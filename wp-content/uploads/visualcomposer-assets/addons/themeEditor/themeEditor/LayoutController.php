<?php

namespace themeEditor\themeEditor;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Hub\Addons;
use VisualComposer\Helpers\Request;
use VisualComposer\Helpers\Str;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class LayoutController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    protected $addonPath;

    public function __construct(Addons $addonsHelper)
    {
        $this->addonPath = rtrim($addonsHelper->getAddonRealPath('themeEditor'), '\\/');

        $this->wpAddAction(
            'wp',
            'addLayoutCss'
        );

        $this->addFilter('vcv:themeEditor:layoutController:getTemplatePartId', 'isCustomPage', 20);
        $this->addFilter('vcv:themeEditor:layoutController:getTemplatePartId', 'isPost', 30);
    }

    protected function templatePath()
    {
        $outputResponse = $this->addonPath . '/views/layouts/';

        return $outputResponse;
    }

    protected function assetsPath()
    {
        $outputResponse = $this->addonPath . '/public/layouts/';

        return $outputResponse;
    }

    protected function addLayoutCss(
        Str $strHelper,
        Addons $addonsHelper,
        Request $requestHelper
    ) {
        $pageTemplate = false;
        $stretched = false;
        if ($requestHelper->input('vcv-template-type', '') === 'vc-theme') {
            $pageTemplate = $requestHelper->input('vcv-template');
            $stretched = intval($requestHelper->input('vcv-template-stretched'));
        } else {
            $currentTemplate = vcfilter('vcv:editor:settings:pageTemplatesLayouts:current', '');
            if (!empty($currentTemplate) && is_array($currentTemplate) && isset($currentTemplate['type'])
                && $currentTemplate['type'] === 'vc-theme') {
                $pageTemplate = $currentTemplate['value'];
                $stretched = $currentTemplate['stretchedContent'];
            }
        }
        $this->enqueueLayoutCss($strHelper, $addonsHelper, $pageTemplate, $stretched);
    }

    /**
     * @param \VisualComposer\Helpers\Str $strHelper
     * @param \VisualComposer\Helpers\Hub\Addons $addonsHelper
     * @param $pageTemplate
     * @param $stretched
     */
    protected function enqueueLayoutCss(Str $strHelper, Addons $addonsHelper, $pageTemplate, $stretched)
    {
        if ($pageTemplate
            && in_array(
                $pageTemplate,
                [
                    'header-footer-layout',
                    'header-footer-sidebar-layout',
                    'header-footer-sidebar-left-layout',
                ]
            )) {
            $addonUrl = $addonsHelper->getAddonUrl('themeEditor/themeEditor');
            $cssUrl = $addonUrl . '/public/layouts/css/bundle.min.css';
            wp_enqueue_style('vcv:theme:layout:bundle:css', $cssUrl);

            $file = $this->templatePath() . VCV_PREFIX . $pageTemplate . '.php';
            $fileName = basename($pageTemplate, '.php');
            $cssFilePart = 'css/' . VCV_PREFIX . $fileName . ($stretched ? '-stretched' : '') . '.min.css';
            $cssPath = $this->assetsPath() . $cssFilePart;
            if (file_exists($file) && file_exists($cssPath)) {
                $cssUrl = $addonUrl . '/public/layouts/' . $cssFilePart;
                wp_enqueue_style('vcv:theme:layout:' . $strHelper->slugify($fileName) . ':css', $cssUrl);
            }
        }
    }

    /**
     * Find specific template part id
     *
     * @param $templatePart
     *
     * @return bool|mixed
     */
    public function getTemplatePartId($templatePart)
    {
        $specificPost = $this->getSpecificPostTemplatePartData($templatePart);

        if ($specificPost['replaceTemplate']) {
            return $specificPost;
        } else {
            return $this->getGlobalTemplatePartData($templatePart);
        }
    }

    /**
     * @param $templatePart
     *
     * @return bool|mixed
     */
    public function getGlobalTemplatePartData($templatePart)
    {
        $optionsHelper = vchelper('Options');
        $headerFooterSettings = $optionsHelper->get('headerFooterSettings');

        if ($headerFooterSettings === 'allSite') {
            return $this->allContent($templatePart);
        } elseif ($headerFooterSettings === 'customPostType') {
            $customTemplatePart = vcfilter(
                'vcv:themeEditor:layoutController:getTemplatePartId',
                ['pageFound' => false, 'replaceTemplate' => true, 'sourceId' => false],
                ['templatePart' => $templatePart]
            );
            if ($customTemplatePart) {
                if ($customTemplatePart['replaceTemplate'] && $customTemplatePart['pageFound']) {
                    return $customTemplatePart;
                }
            }
        }

        return ['pageFound' => false, 'replaceTemplate' => false, 'sourceId' => false];
    }

    /**
     * @param $response
     * @param $payload
     *
     * @return bool|mixed
     */
    protected function isPost($response, $payload)
    {
        if (!$response['pageFound'] && $response['replaceTemplate']) {
            $templatePart = $payload['templatePart'];
            $optionsHelper = vchelper('Options');

            $postType = get_post_type();
            $separatePostType = $optionsHelper->get('headerFooterSettingsSeparatePostType-' . $postType);
            if ($separatePostType && !empty($separatePostType) && is_singular()) {
                $key = 'headerFooterSettingsSeparatePostType' . ucfirst($templatePart) . '-' . $postType;
                $templatePartId = $optionsHelper->get($key);
                if ($templatePart) {
                    return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => $templatePartId];
                }

                return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => false];
            }
        }

        return $response;
    }

    /**
     * @param $response
     * @param $payload
     *
     * @return bool|mixed
     */
    protected function isCustomPage($response, $payload)
    {
        if (!$response['pageFound'] && $response['replaceTemplate']) {
            $templatePart = $payload['templatePart'];

            if (is_front_page()) {
                return $this->getFrontPageTemplatePartData($templatePart);
            } elseif (is_home()) {
                return $this->getPostPageTemplatePartData($templatePart);
            } else {
                return $this->getOtherPageTemplatePartData($response, $templatePart);
            }
        }

        return $response;
    }

    /**
     * @param $templatePart
     *
     * @return bool|mixed
     */
    protected function allContent($templatePart)
    {
        $optionsHelper = vchelper('Options');
        $templatePartId = $optionsHelper->get('headerFooterSettingsAll' . ucfirst($templatePart));

        if ($templatePart) {
            return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => $templatePartId];
        }

        return false;
    }

    /**
     * @param $templatePart
     *
     * @return array
     */
    protected function getFrontPageTemplatePartData($templatePart)
    {
        $optionsHelper = vchelper('Options');
        if ($optionsHelper->get('headerFooterSettingsPageType-frontPage')) {
            $templatePartId = $optionsHelper->get(
                'headerFooterSettingsPageType' . ucfirst($templatePart) . '-frontPage'
            );
            if ($templatePartId) {
                return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => $templatePartId];
            }

            return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => false];
        }

        return ['pageFound' => true, 'replaceTemplate' => false, 'sourceId' => false];
    }

    /**
     * @param $templatePart
     *
     * @return array
     */
    protected function getPostPageTemplatePartData($templatePart)
    {
        $optionsHelper = vchelper('Options');
        if ($optionsHelper->get('headerFooterSettingsPageType-postPage')) {
            $templatePartId = $optionsHelper->get(
                'headerFooterSettingsPageType' . ucfirst($templatePart) . '-postPage'
            );
            if ($templatePartId) {
                return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => $templatePartId];
            }

            return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => false];
        }

        return ['pageFound' => true, 'replaceTemplate' => false, 'sourceId' => false];
    }

    /**
     * @param $response
     * @param $templatePart
     *
     * @return bool
     */
    protected function getOtherPageTemplatePartData($response, $templatePart)
    {
        $pageType = false;

        $optionsHelper = vchelper('Options');
        if (is_category()) {
            $pageType = 'category';
        } elseif (is_author()) {
            $pageType = 'author';
        } elseif (is_search()) {
            $pageType = 'search';
        } elseif (is_archive() && vcfilter('vcv:themeEditor:layoutController:getOtherPageTemplatePartData:isArchive')) {
            $pageType = 'archive';
        } elseif (is_404()) {
            $pageType = 'notFound';
        }

        if ($pageType) {
            $separatePageType = $optionsHelper->get('headerFooterSettingsPageType-' . $pageType);
            if ($separatePageType && !empty($separatePageType)) {
                $key = 'headerFooterSettingsPageType' . ucfirst($templatePart) . '-' . $pageType;

                $templatePartId = $optionsHelper->get($key);
                if ($templatePartId) {
                    return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => $templatePartId];
                }

                return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => false];
            }
        }

        return $response;
    }

    /**
     * Find header and footer for view page and page editable
     *
     * @param $templatePart
     *
     * @return array
     */
    protected function getSpecificPostTemplatePartData($templatePart)
    {
        $frontendHelper = vchelper('Frontend');
        $requestHelper = vchelper('Request');
        $sourceId = get_the_ID();

        if ($frontendHelper->isPreview()) {
            $preview = wp_get_post_autosave($sourceId);
            if (is_object($preview)) {
                $sourceId = $preview->ID;
            }
        }

        if ($frontendHelper->isPageEditable() && $requestHelper->exists('vcv-' . $templatePart)) {
            return $this->getPageEditableTemplatePartData($templatePart, $requestHelper);
        } else {
            $currentTemplateId = get_post_meta(
                $sourceId,
                '_' . VCV_PREFIX . ucfirst($templatePart) . 'TemplateId',
                true
            );

            $footerId = get_post_meta(
                $sourceId,
                '_' . VCV_PREFIX . 'FooterTemplateId',
                true
            );
            $headerId = get_post_meta(
                $sourceId,
                '_' . VCV_PREFIX . 'HeaderTemplateId',
                true
            );

            if ($currentTemplateId && $currentTemplateId !== 'default') {
                return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => $currentTemplateId];
            }

            if ($footerId === 'default' && $headerId === 'default') {
                return ['pageFound' => true, 'replaceTemplate' => false, 'sourceId' => false];
            }

            if ($footerId || $headerId) {
                $getGlobalTemplatePartId = $this->getGlobalTemplatePartData($templatePart);

                return [
                    'pageFound' => true,
                    'replaceTemplate' => true,
                    'sourceId' => $getGlobalTemplatePartId['sourceId'],
                ];
            }
        }

        return ['pageFound' => false, 'replaceTemplate' => false, 'sourceId' => false];
    }

    /**
     * Find header and footer on page editable
     *
     * @param $templatePart
     * @param $requestHelper
     *
     * @return array
     */
    protected function getPageEditableTemplatePartData($templatePart, $requestHelper)
    {
        $currentTemplateId = $requestHelper->input('vcv-' . $templatePart);
        $footerId = $requestHelper->input('vcv-footer');
        $headerId = $requestHelper->input('vcv-header');
        if ($currentTemplateId !== 'default') {
            return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => intval($currentTemplateId)];
        } elseif (!in_array('default', [$headerId, $footerId])
            || ($footerId === 'default'
                && $headerId === 'default')) {
            return ['pageFound' => true, 'replaceTemplate' => false, 'sourceId' => false];
        }

        $getGlobalTemplatePartId = $this->getGlobalTemplatePartData($templatePart);

        return ['pageFound' => true, 'replaceTemplate' => true, 'sourceId' => $getGlobalTemplatePartId['sourceId']];
    }
}
