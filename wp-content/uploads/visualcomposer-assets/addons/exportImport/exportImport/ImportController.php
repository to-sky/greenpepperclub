<?php

namespace exportImport\exportImport;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\File;
use VisualComposer\Helpers\Hub\Actions\TemplatesBundle;
use VisualComposer\Helpers\Hub\Addons;
use VisualComposer\Helpers\Hub\Bundle;
use VisualComposer\Helpers\Hub\Elements;
use VisualComposer\Helpers\Hub\Templates;
use VisualComposer\Helpers\Nonce;
use VisualComposer\Helpers\Options;
use VisualComposer\Helpers\Request;
use VisualComposer\Helpers\Token;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;
use VisualComposer\Helpers\WpMedia;

/**
 * Class ImportController.
 */
class ImportController extends Container implements Module
{
    use WpFiltersActions;
    use EventsFilters;

    protected $items = [];

    protected $newTemplateId = false;

    protected $fileId = false;

    protected $file = false;

    protected $bundleJson = false;

    protected $zipManifest = false;

    public function __construct()
    {
        $this->wpAddAction('admin_init', 'registerImporter');
        $this->addFilter('vcv:ajax:vcv:addon:exportImport:importProgress:adminNonce', 'getImportProgress');
        $this->addFilter('vcv:ajax:vcv:addon:exportImport:continueImport:adminNonce', 'continueImport');
    }

    /**
     * Must be public
     *
     * @throws \ReflectionException
     */
    public function dispatch()
    {
        $requestHelper = vchelper('Request');

        $this->header();

        $step = !$requestHelper->exists('step') ? 0 : (int)$requestHelper->input('step');
        switch ($step) {
            case 0:
                $this->uploadForm();
                break;
            case 1:
                check_admin_referer('import-upload');
                $response = $this->call('handleUpload');
                if (!vcIsBadResponse($response)) {
                    $this->call('approveImportTemplate');
                } else {
                    $this->call('abortImport');
                    $this->call('errorMessage', [$response['message']]);
                }

                break;
        }

        $this->footer();
    }

    /**
     * @param \VisualComposer\Helpers\Request $requestHelper
     *
     * @param \VisualComposer\Helpers\Nonce $nonceHelper
     *
     * @return mixed
     * @throws \ReflectionException
     */
    protected function continueImport(Request $requestHelper, Nonce $nonceHelper)
    {
        if ($nonceHelper->verifyAdmin($requestHelper->input('vcv-nonce'))) {
            $this->fileId = (int)$requestHelper->input('vcv-file-id');
            $this->file = get_attached_file($this->fileId);

            $importData = $this->call('parseZipManifest', [$this->file]);
            if (vcIsBadResponse($importData)) {
                $this->call('abortImport');

                return json_encode($importData);
            }

            $zipContent = $this->call('parseZipContent', [$this->file, $importData]);
            if (!vcIsBadResponse($zipContent)) {
                set_time_limit(0);

                return $this->call('import');
            } else {
                $this->call('abortImport');

                return json_encode($zipContent);
            }
        }

        return json_encode(
            [
                'status' => false,
                'message' => __(
                    'Failed to validate nonce.',
                    'visualcomposer'
                ),
            ]
        );
    }

    protected function registerImporter()
    {
        register_importer(
            'vcv-import',
            'Visual Composer Website Builder',
            __(
                'Import <strong>templates, headers, footers and sidebars</strong> from a Visual Composer Website Builder export file.',
                'visualcomposer'
            ),
            [$this, 'dispatch']
        );
    }

    protected function uploadForm()
    {
        echo '<div class="narrow">';
        echo sprintf(
            '<p>%s</p>',
            __(
                'Upload your Visual Composer template and it will be imported into the Global Templates section together with all the Media Library assets.',
                'visualcomposer'
            )
        );
        echo '<p>' . __('Choose ZIP (.zip) file to upload, then click Upload file and import.', 'visualcomposer')
            . '</p>';
        wp_import_upload_form('admin.php?page=vcv-import&step=1');
        echo '</div>';
    }

    protected function header()
    {
        echo '<div class="wrap">';
        echo '<h2>' . __('Visual Composer Website Builder', 'visualcomposer') . '</h2>';
    }

    protected function footer()
    {
        echo '</div>';
    }

    /**
     * @param \VisualComposer\Helpers\Options $optionsHelper
     *
     * @return array|bool|mixed
     * @throws \ReflectionException
     */
    protected function handleUpload(Options $optionsHelper)
    {
        $this->call('removeTempContent');
        $optionsHelper->deleteTransient('import:progress');
        $file = wp_import_handle_upload(null, true);

        if (isset($file['error'])) {
            return ['status' => false, 'message' => esc_html($file['error'])];
        } elseif (!file_exists($file['file'])) {
            return [
                'status' => false,
                'message' => sprintf(
                    __(
                        'The export file could not be found at <code>%s</code>. It is likely that this was caused by a permissions problem.',
                        'visualcomposer'
                    ),
                    esc_html($file['file'])
                ),
            ];
        }

        $this->fileId = (int)$file['id'];
        $importData = $this->call('parseZipManifest', [$file['file']]);
        if (vcIsBadResponse($importData)) {
            return $importData;
        }

        return ['status' => true];
    }

    /**
     * @param $file
     * @param \VisualComposer\Helpers\Hub\Actions\TemplatesBundle $hubBundleHelper
     * @param \VisualComposer\Helpers\File $fileHelper
     *
     * @return array
     */
    protected function parseZipManifest($file, TemplatesBundle $hubBundleHelper, File $fileHelper)
    {
        $tempBundleFolder = $hubBundleHelper->getTempBundleFolder('templateImport/');
        if (!$fileHelper->isDir($tempBundleFolder)) {
            $result = $fileHelper->unzip($file, $tempBundleFolder, true);

            if (is_wp_error($result)) {
                return ['status' => false, 'message' => esc_html($result->get_error_message())];
            }
        }

        $manifest = $tempBundleFolder . 'manifest.json';
        if (file_exists($manifest)) {
            $this->zipManifest = $manifest = json_decode(file_get_contents($manifest), true);

            if (isset($manifest['templates']) && !empty($manifest['templates'])) {
                $this->items = $this->items + $manifest['templates'];

                return $manifest['templates'];
            }
        }

        return [
            'status' => false,
            'message' => sprintf(
                __(
                    'Uploaded file <code>%s</code> is invalid.',
                    'visualcomposer'
                ),
                esc_html(substr(basename($file), 0, strrpos(basename($file), '.')))
            ),
        ];
    }

    /**
     * @param $file
     * @param $data
     * @param \VisualComposer\Helpers\Hub\Actions\TemplatesBundle $hubBundleHelper
     *
     * @return array|bool|mixed
     * @throws \ReflectionException
     */
    protected function parseZipContent(
        $file,
        $data,
        TemplatesBundle $hubBundleHelper
    ) {
        foreach ($data as $id => $item) {
            $bundle = $this->getTemplateBundle($hubBundleHelper, $id);

            if (file_exists($bundle)) {
                $bundle = json_decode(file_get_contents($bundle), true);

                if (isset($bundle['id']) && isset($bundle['tags']) && isset($bundle['post'])
                    && isset($bundle['post']['ID'])) {
                    $templateDependencies = $this->call('parseDependencies', [$bundle['tags']]);

                    if (vcIsBadResponse($templateDependencies)) {
                        return $templateDependencies;
                    }
                }
            } else {
                return [
                    'status' => false,
                    'message' => __('Uploaded .zip file is invalid.', 'visualcomposer'),
                ];
            }
        }

        return true;
    }

    /**
     * @param $tags
     * @param \VisualComposer\Helpers\Options $optionsHelper
     * @param \VisualComposer\Helpers\Token $tokenHelper
     * @param \VisualComposer\Helpers\Hub\Bundle $bundleHelper
     *
     * @param \VisualComposer\Helpers\Hub\Elements $elementsHelper
     *
     * @return array|bool
     * @throws \ReflectionException
     */
    protected function parseDependencies(
        $tags,
        Options $optionsHelper,
        Token $tokenHelper,
        Bundle $bundleHelper,
        Elements $elementsHelper,
        Addons $addonsHelper
    ) {
        if (!$this->bundleJson) {
            $this->call('updateImportProgress', [__('Validating license...', 'visualcomposer')]);

            $token = $tokenHelper->getToken();
            if (vcIsBadResponse($token)) {
                return [
                    'status' => false,
                    'message' => __(
                        'Token generation failed. It is likely that this was caused by a timeout,  please check your server configuration and try again.',
                        'visualcomposer'
                    ),
                ];
            }

            $url = $bundleHelper->getJsonDownloadUrl(['token' => $token]);
            $this->bundleJson = $bundleHelper->getRemoteBundleJson($url);
        }

        if ($this->bundleJson['actions']) {
            $actions = $this->call('parseJsonActions', [$this->bundleJson]);
            $bundleUpdateRequired = false;
            $hubElements = $elementsHelper->getElements();
            $hubAddons = $addonsHelper->getAddons();

            //check if bundles are downloaded
            foreach ($tags as $tag) {
                if (!in_array(str_replace('element/', '', $tag), array_keys($hubElements))
                    && !in_array(
                        str_replace('addon/', '', $tag),
                        array_keys($hubAddons)
                    )) {
                    // check we can download the missing bundles
                    if (!in_array($tag, $actions)) {
                        return [
                            'status' => false,
                            'message' => sprintf(
                                __(
                                    'Hmm, it seems you are missing Visual Composer Premium license for this site to download elements from the Hub. Make sure to activate it before the import or grab one at %svisualcomposer.io/premium%s',
                                    'visualcomposer'
                                ),
                                '<a href = "https://visualcomposer.com/premium" target="_blank">',
                                '</a>'
                            ),
                        ];
                    }
                }
            }

            //if all elements available check if elements are in system, if not then add them to download
            $elementsToRegister = vchelper('DefaultElements')->all();
            foreach ($tags as $tag) {
                if (!$optionsHelper->get('hubAction:' . $tag)
                    && !in_array(
                        str_replace('element/', '', $tag),
                        $elementsToRegister
                    )
                    && !in_array(str_replace('addon/', '', $tag), $elementsToRegister)) {
                    $optionsHelper->set('hubAction:' . $tag, '0.0.1');
                    $bundleUpdateRequired = 1;
                }
            }

            if ($bundleUpdateRequired) {
                $optionsHelper->set('bundleUpdateRequired', $bundleUpdateRequired);
                $optionsHelper->setTransient('lastBundleUpdate', 0);

                $importProgress = __(
                    'Seems like you are missing some elements that are in the imported template, we are adding them to download queue and will download them right after the editor will be opened.',
                    'visualcomposer'
                );
                $this->call('updateImportProgress', [$importProgress]);
            }
        } else {
            return [
                'status' => false,
                'message' => __(
                    'Failed to read json from account. Please check your connection and try again.',
                    'visualcomposer'
                ),
            ];
        }

        return ['status' => true];
    }

    /**
     * @param \VisualComposer\Helpers\Hub\Actions\TemplatesBundle $hubBundleHelper
     * @param \VisualComposer\Helpers\File $fileHelper
     * @param \VisualComposer\Helpers\Hub\Templates $hubTemplatesHelper
     * @param \VisualComposer\Helpers\Options $optionsHelper
     * @param \VisualComposer\Helpers\WpMedia $wpMediaHelper
     *
     * @return array
     * @throws \ReflectionException
     */
    protected function import(
        TemplatesBundle $hubBundleHelper,
        File $fileHelper,
        Templates $hubTemplatesHelper,
        Options $optionsHelper,
        WpMedia $wpMediaHelper
    ) {
        $needUpdatePost = $optionsHelper->get('hubAction:updatePosts', []);

        $fileHelper->createDirectory(
            $hubTemplatesHelper->getTemplatesPath()
        );

        if (!empty($this->items)) {
            foreach ($this->items as $id => $item) {
                $bundle = $this->getTemplateBundle($hubBundleHelper, $id);

                if (file_exists($bundle)) {
                    if ($id > 0) {
                        $templateDir = $hubBundleHelper->getTempBundleFolder(
                            'templateImport/' . $id . '/templates/' . $item['templateId']
                        );
                    } else {
                        $templateDir = $hubBundleHelper->getTempBundleFolder(
                            'templateImport/' . 'templates/' . $item['templateId']
                        );
                    }

                    $fileHelper->createDirectory($hubTemplatesHelper->getTemplatesPath($item['templateId']));
                    $fileHelper->copyDirectory(
                        $templateDir,
                        $hubTemplatesHelper->getTemplatesPath($item['templateId'])
                    );

                    $bundle = json_decode(file_get_contents($bundle), true);

                    $this->newTemplateId = $newTemplateId = wp_insert_post(
                        [
                            'post_title' => $bundle['post']['post_title'],
                            'post_type' => $bundle['post']['post_type'],
                            'post_status' => 'publish',
                        ]
                    );

                    if ($newTemplateId) {
                        $optionsHelper->set('bundleUpdateRequired', 1);
                    } else {
                        return ['status' => false, 'message' => 'Failed to create the template.'];
                    }

                    $templateElements = $bundle['data'];
                    $elementsMedia = $wpMediaHelper->getTemplateElementMedia($templateElements);
                    $templateElements = $this->call(
                        'parseTemplateElements',
                        [
                            $elementsMedia,
                            $bundle,
                            $newTemplateId,
                            $templateElements,
                        ]
                    );
                    $templateElements = $this->processDesignOptions($templateElements, $bundle, $newTemplateId);
                    $templateElements = json_decode(
                        str_replace(
                            '[publicPath]',
                            $hubTemplatesHelper->getTemplatesUrl($bundle['id']),
                            json_encode($templateElements)
                        ),
                        true
                    );

                    foreach ($bundle['postMeta'] as $id => $meta) {
                        if (!in_array($id, ['vcv-pageContent', 'vcvEditorTemplateElements'])) {
                            update_post_meta($newTemplateId, $id, $meta[0]);
                        }
                    }

                    $pageContent = rawurlencode(
                        json_encode(
                            [
                                'elements' => $templateElements,
                            ]
                        )
                    );

                    update_post_meta($newTemplateId, VCV_PREFIX . 'pageContent', $pageContent);

                    $needUpdatePost[] = $newTemplateId;
                    $importProgress = sprintf(
                        __('Template - %s was imported successfully!', 'visualcomposer'),
                        '<strong>' . $bundle['post']['post_title'] . '</strong>'
                    );
                    $this->call('updateImportProgress', [$importProgress]);
                }
            }

            $this->call('removeTempContent');
            $optionsHelper->set('hubAction:updatePosts', array_unique($needUpdatePost));

            return ['status' => true];
        }

        return ['status' => false, 'message' => 'Missing import content.'];
    }

    /**
     * @param $json
     *
     * @return array
     */
    protected function parseJsonActions($json)
    {
        $actions = [];
        foreach ($json['actions'] as $item) {
            $actions[] = $item['action'];
        }

        return $actions;
    }

    /**
     * @param $mediaData
     * @param $template
     * @param $newTemplateId
     *
     * @param string $prefix
     *
     * @return array
     * @throws \ReflectionException
     */
    protected function processWpMedia($mediaData, $template, $newTemplateId, $prefix = '')
    {
        $newMedia = [];
        $newIds = [];

        $value = $mediaData['value'];
        $files = is_array($value) && isset($value['urls']) ? $value['urls'] : [$value];
        foreach ($files as $key => $file) {
            $newMediaData = $this->processSimple($file, $template, $newTemplateId, $prefix . $key . '-');
            if (isset($newMediaData['newMedia'])) {
                $newMedia[] = $newMediaData['newMedia'];
            } elseif (isset($newMediaData)) {
                $newMedia[] = $newMediaData;
            } else {
                return;
            }

            if (isset($newMediaData['newIds'])) {
                $newIds[] = $newMediaData['newIds'];
            }
        }

        return ['newMedia' => $newMedia, 'newIds' => $newIds];
    }

    /**
     * @param $file
     * @param $template
     * @param string $prefix
     *
     * @param $newTemplateId
     *
     * @return bool|mixed|string
     * @throws \ReflectionException
     */
    protected function processSimple($file, $template, $newTemplateId, $prefix = '')
    {
        $fileHelper = vchelper('File');
        $hubTemplatesHelper = vchelper('HubTemplates');
        $urlHelper = vchelper('Url');
        $wpMedia = vchelper('WpMedia');
        $newIds = [];
        $default = false;

        $url = $this->findFileUrl($file);

        $templatesPath = $hubTemplatesHelper->getTemplatesPath($template['id']);

        if (isset($url)) {
            if ($urlHelper->isUrl($url)) {
                return; //as we don't need to download external files
            } else {
                // File located locally
                if (strpos($url, '[publicPath]') !== false) {
                    $url = str_replace('[publicPath]', '', $url);
                    $localMediaPath = $templatesPath . '/' . ltrim($url, '\\/');
                } elseif (strpos($url, 'assets/elements/') !== false) {
                    $localMediaPath = $templatesPath . '/' . ltrim($url, '\\/');
                } else {
                    $localMediaPath = $url; // it is local file url (default file)
                    $default = true;
                }

                if ($newTemplateId && !$default) {
                    $attachment = $this->call('addToMedia', [$newTemplateId, $localMediaPath, $fileHelper]);

                    if (isset($file['id'])) {
                        $newIds = $file['id'] = $attachment['id'];
                    }

                    if (isset($file['url'])) {
                        $file['url'] = $attachment['url'];
                    }

                    $newIds = $file['id'] = $attachment['id'];
                    $file['url'] = $attachment['url'];
                }

                return ['newMedia' => $file, 'newIds' => $newIds];
            }
        } else {
            //parse hub template default images
            if (is_array($file) && strpos($file[0], '[publicPath]') !== false && $wpMedia->checkIsImage($file[0])) {
                $path = str_replace('[publicPath]', '', $file[0]);
                $localMediaPath = $templatesPath . '/' . ltrim($path, '\\/');
                $wpUploadDir = wp_upload_dir();
                $url = str_replace($wpUploadDir['basedir'], $wpUploadDir['baseurl'], $localMediaPath);

                return ['newMedia' => $url, 'newIds' => []];
            }
        }

        return false;
    }

    /**
     * @param $newTemplateId
     * @param $localMediaPath
     * @param $fileHelper
     *
     * @return array
     */
    protected function addToMedia($newTemplateId, $localMediaPath, $fileHelper)
    {
        $fileType = wp_check_filetype(basename($localMediaPath), null);
        $wpUploadDir = wp_upload_dir();
        $fileHelper->copyFile($localMediaPath, $wpUploadDir['path'] . '/' . basename($localMediaPath));

        $attachment = [
            'guid' => $wpUploadDir['url'] . '/' . basename($localMediaPath),
            'post_mime_type' => $fileType['type'],
            'post_title' => preg_replace('/\.[^.]+$/', '', basename($localMediaPath)),
            'post_content' => '',
            'post_status' => 'inherit',
        ];

        $attachment = wp_insert_attachment(
            $attachment,
            $wpUploadDir['path'] . '/' . basename($localMediaPath),
            $newTemplateId
        );
        wp_update_attachment_metadata(
            $attachment,
            wp_generate_attachment_metadata(
                $attachment,
                $wpUploadDir['path'] . '/' . basename($localMediaPath)
            )
        );

        return ['id' => $attachment, 'url' => $wpUploadDir['url'] . '/' . basename($localMediaPath)];
    }

    /**
     * @param $templateElements
     * @param $template
     * @param $newTemplateId
     *
     * @return mixed
     * @throws \ReflectionException
     */
    protected function processDesignOptions($templateElements, $template, $newTemplateId)
    {
        $this->call('updateImportProgress', [__('Processing design options...', 'visualcomposer')]);

        $arrayIterator = new \RecursiveArrayIterator($templateElements);
        $recursiveIterator = new \RecursiveIteratorIterator($arrayIterator, \RecursiveIteratorIterator::SELF_FIRST);

        $keys = [
            'videoEmbed',
            'image',
            'images',
        ];

        foreach ($recursiveIterator as $key => $value) {
            if (is_array($value) && in_array($key, $keys, true) && isset($value['urls'])) {
                $newValue = $this->processWpMedia(
                    ['value' => $value, 'key' => $key],
                    $template,
                    $newTemplateId,
                    $key . '-'
                );
                if ($newValue) {
                    $newMedia = [];
                    $newMedia['ids'] = $newValue['newIds'];
                    $newMedia['urls'] = $newValue['newMedia'];
                    // Get the current depth and traverse back up the tree, saving the modifications
                    $currentDepth = $recursiveIterator->getDepth();
                    for ($subDepth = $currentDepth; $subDepth >= 0; $subDepth--) {
                        // Get the current level iterator
                        $subIterator = $recursiveIterator->getSubIterator($subDepth);
                        // If we are on the level we want to change
                        // use the replacements ($value) other wise set the key to the parent iterators value
                        $subIterator->offsetSet(
                            $subIterator->key(),
                            ($subDepth === $currentDepth ? $newMedia : $recursiveIterator->getSubIterator(
                                ($subDepth + 1)
                            )->getArrayCopy())
                        );
                    }
                }
            }
        }

        return $recursiveIterator->getArrayCopy();
    }

    /**
     * @param $message
     *
     * @return bool
     */
    protected function errorMessage($message)
    {
        echo '<p><strong>' . __('Sorry, there has been an error.', 'visualcomposer') . '</strong><br />';
        echo $message;
        echo '</p>';

        return false;
    }

    /**
     * @param $file
     *
     * @return array
     */
    protected function findFileUrl($file)
    {
        if (is_string($file)) {
            $url = $file;
        } elseif (isset($file['full'])) {
            $url = $file['full'];
        } elseif (isset($file['url'])) {
            $url = $file['url'];
        }

        return $url;
    }

    /**
     * @param $elementsMedia
     * @param $bundle
     * @param $newTemplateId
     * @param $templateElements
     *
     * @return mixed
     * @throws \ReflectionException
     */
    protected function parseTemplateElements($elementsMedia, $bundle, $newTemplateId, $templateElements)
    {
        $this->call('updateImportProgress', [__('Processing media...', 'visualcomposer')]);
        foreach ($elementsMedia as $element) {
            foreach ($element['media'] as $key => $media) {
                if (isset($media['complex']) && $media['complex']) {
                    $newMediaData = $this->processWpMedia(
                        $media,
                        $bundle,
                        $newTemplateId,
                        $element['elementId'] . '-' . $media['key'] . '-'
                    );

                    $mediaData = $newMediaData['newMedia'];
                } else {
                    // it is simple url
                    $newMediaData = $this->processSimple(
                        $media['url'],
                        $bundle,
                        $newTemplateId,
                        $element['elementId'] . '-' . $media['key'] . '-'
                    );
                    $mediaData = $newMediaData['newMedia'];
                }
                if (!is_wp_error($mediaData) && $mediaData) {
                    if (isset($templateElements[ $element['elementId'] ][ $media['key'] ]['urls'])) {
                        $templateElements[ $element['elementId'] ][ $media['key'] ]['urls'] = $newMediaData['newMedia'];
                        $templateElements[ $element['elementId'] ][ $media['key'] ]['ids'] = $newMediaData['newIds'];
                    } else {
                        $templateElements[ $element['elementId'] ][ $media['key'] ][ $key ] = $mediaData[0];
                    }
                }
            }
        }

        return $templateElements;
    }

    /**
     * Return the import progress
     *
     * @param \VisualComposer\Helpers\Options $optionsHelper
     *
     * @param \VisualComposer\Helpers\Nonce $nonceHelper
     *
     * @param \VisualComposer\Helpers\Request $requestHelper
     *
     * @return array
     */
    protected function getImportProgress(Options $optionsHelper, Nonce $nonceHelper, Request $requestHelper)
    {
        if ($nonceHelper->verifyAdmin($requestHelper->input('vcv-nonce'))) {
            $importProgress = $optionsHelper->getTransient('import:progress');

            return json_encode($importProgress);
        }

        return json_encode(
            [
                'status' => false,
                'message' => __(
                    'Failed to validate nonce.',
                    'visualcomposer'
                ),
            ]
        );
    }

    /**
     * Update the import progress
     *
     * @param $progress
     * @param \VisualComposer\Helpers\Options $optionsHelper
     *
     * @return void
     */
    protected function updateImportProgress($progress, Options $optionsHelper)
    {
        $importProgress = $optionsHelper->getTransient('import:progress');
        if (!$importProgress) {
            $importProgress = ['statusMessages' => []];
        }

        $importProgress['statusMessages'][] = $progress;
        $optionsHelper->setTransient('import:progress', $importProgress, '600');
    }

    /**
     * @param \VisualComposer\Helpers\Hub\Actions\TemplatesBundle $hubBundleHelper
     * @param $id
     *
     * @return string
     */
    protected function getTemplateBundle(TemplatesBundle $hubBundleHelper, $id)
    {
        if ($id > 0 || !is_int($id)) {
            $bundle = $hubBundleHelper->getTempBundleFolder('templateImport/') . $id . '/bundle.json';
        } else {
            $bundle = $hubBundleHelper->getTempBundleFolder('templateImport/') . 'bundle.json';
        }

        return $bundle;
    }

    protected function approveImportTemplate()
    {
        $templates = $this->zipManifest['templates'];
        echo '<input type="hidden" name="vcv-file-id" value="' . $this->fileId . '" />';

        echo '<div class="vcv-start-import-inner">';
        $sprintf = sprintf(
            _n(
                'The import file contains <strong>%s</strong> template:',
                'The import file contains <strong>%s</strong> templates:',
                count($templates),
                'visualcomposer'
            ),
            count($templates)
        );
        echo '<p>' . $sprintf . '</p>';
        echo '<ol>';
        foreach ($templates as $template) {
            echo '<li><strong>' . $template['templateTitle'] . '</strong></li>';
        }
        echo '</ol>';
        echo '<p>' . __('Do you want to proceed with the import?', 'visualcomposer') . '</p>';
        echo '</div>';
        echo '<div id="vcv-import-container"></div>';
    }

    /**
     * @param \VisualComposer\Helpers\Hub\Actions\TemplatesBundle $hubBundleHelper
     * @param \VisualComposer\Helpers\File $fileHelper
     */
    protected function abortImport(TemplatesBundle $hubBundleHelper, File $fileHelper)
    {
        $hubBundleHelper->removeTempBundleFolder();
        $fileHelper->removeFile($this->file);
        wp_delete_attachment($this->fileId);
        wp_delete_post($this->newTemplateId, true);
    }

    /**
     * @param \VisualComposer\Helpers\Hub\Actions\TemplatesBundle $hubBundleHelper
     * @param \VisualComposer\Helpers\File $fileHelper
     */
    protected function removeTempContent(TemplatesBundle $hubBundleHelper, File $fileHelper)
    {
        $hubBundleHelper->removeTempBundleFolder();
        $fileHelper->removeFile($this->file);
    }
}
