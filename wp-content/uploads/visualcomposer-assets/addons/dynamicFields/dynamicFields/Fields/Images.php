<?php

namespace dynamicFields\dynamicFields\Fields;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

require_once 'FieldResponse.php';

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\PostData;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

/**
 * Class Images
 * @package dynamicFields\dynamicFields\Fields
 */
class Images extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;
    use FieldResponse;

    /**
     * Images constructor.
     */
    public function __construct()
    {
        $this->addFilter('vcv:editor:data:postFields', 'addFeaturedImage');
        $this->addFilter('vcv:editor:data:postFields', 'addAuthorImage');
        $this->addFilter('vcv:editor:data:postFields', 'addBlogLogo');

        $this->addFilter('vcv:dynamic:value:wp_blog_logo', 'blogLogo');
        $this->addFilter('vcv:dynamic:value:featured_image', 'postFeaturedImage');
        $this->addFilter('vcv:dynamic:value:post_author_image', 'postAuthorImage');
    }

    /**
     * @param $response
     *
     * @param $payload
     *
     * @return mixed
     */
    protected function addFeaturedImage($response, $payload)
    {
        $sourceId = $payload['sourceId'];
        $post = get_post($sourceId);
        if ((isset($payload['forceAddField']) && $payload['forceAddField'])
            //@codingStandardsIgnoreLine
            || (isset($post) && post_type_supports($post->post_type, 'thumbnail') && $post->post_status !== 'trash')) {
            $featuredImage = [
                'value' => 'featured_image',
                'label' => esc_html__('Featured Image', 'visualcomposer'),
            ];
            $response['attachimage']['post']['group']['values'][] = $featuredImage;
            $response['designOptions']['post']['group']['values'][] = $featuredImage;
            $response['designOptionsAdvanced']['post']['group']['values'][] = $featuredImage;
        }

        return $response;
    }

    /**
     * @param $response
     *
     * @param $payload
     *
     * @return mixed
     */
    protected function addAuthorImage($response, $payload)
    {
        $sourceId = $payload['sourceId'];
        $post = get_post($sourceId);
        if ((isset($payload['forceAddField']) && $payload['forceAddField'])
            //@codingStandardsIgnoreLine
            || (isset($post) && post_type_supports($post->post_type, 'author') && $post->post_status !== 'trash')) {
            $postAuthorImage = [
                'value' => 'post_author_image',
                'label' => esc_html__('Author Profile Picture', 'visualcomposer'),
            ];
            $response['attachimage']['author']['group']['values'][] = $postAuthorImage;
            $response['designOptions']['author']['group']['values'][] = $postAuthorImage;
            $response['designOptionsAdvanced']['author']['group']['values'][] = $postAuthorImage;
        }

        return $response;
    }

    /**
     * @param $response
     *
     * @param $payload
     *
     * @return mixed
     */
    protected function addBlogLogo($response, $payload)
    {
        if (current_theme_supports('custom-logo')) {
            $blogLogo = [
                'value' => 'wp_blog_logo',
                'label' => esc_html__('Logo', 'visualcomposer'),
            ];
            $response['attachimage']['site']['group']['values'][] = $blogLogo;
            $response['designOptions']['site']['group']['values'][] = $blogLogo;
            $response['designOptionsAdvanced']['site']['group']['values'][] = $blogLogo;
        }

        return $response;
    }

    /**
     * @param $response
     * @param $payload
     *
     * @param \VisualComposer\Helpers\PostData $postDataHelper
     *
     * @return mixed
     */
    protected function postFeaturedImage($response, $payload, PostData $postDataHelper)
    {
        $atts = $payload['atts'];
        $sourceId = false;
        if (isset($atts['sourceId'])) {
            $sourceId = $atts['sourceId'];
        }

        if (isset($atts['currentValue'])) {
            $actualValue = $postDataHelper->getFeaturedImage($sourceId);
            if (empty($response)) {
                return $actualValue;
            }
            $response = $this->parseResponse($atts['currentValue'], $actualValue, $response);
        } elseif (isset($atts['type']) && $atts['type'] === 'backgroundImage') {
            $src = $postDataHelper->getFeaturedImage($sourceId);
            if (!empty($src)) {
                $this->addDesignOptionsStyles($atts['elementId'], $src, $atts['device']);
            }
        }

        return $response;
    }

    /**
     * @param $response
     * @param $payload
     *
     * @param \VisualComposer\Helpers\PostData $postDataHelper
     *
     * @return mixed
     */
    protected function blogLogo($response, $payload, PostData $postDataHelper)
    {
        $atts = $payload['atts'];
        if (isset($atts['currentValue'])) {
            $actualValue = $postDataHelper->getBlogLogo();
            if (empty($response)) {
                return $actualValue;
            }
            $response = $this->parseResponse($atts['currentValue'], $actualValue, $response);
        } elseif (isset($atts['type']) && $atts['type'] === 'backgroundImage') {
            $src = $postDataHelper->getBlogLogo();
            if (!empty($src)) {
                $this->addDesignOptionsStyles($atts['elementId'], $src, $atts['device']);
            }
        }

        return $response;
    }

    /**
     * @param $response
     * @param $payload
     * @param \VisualComposer\Helpers\PostData $postDataHelper
     *
     * @return mixed
     */
    protected function postAuthorImage($response, $payload, PostData $postDataHelper)
    {
        $atts = $payload['atts'];
        if (isset($atts['currentValue'])) {
            $actualValue = $postDataHelper->getPostAuthorImage();
            if (empty($response)) {
                return $actualValue;
            }
            $response = $this->parseResponse($atts['currentValue'], $actualValue, $response);
        } elseif (isset($atts['type']) && $atts['type'] === 'backgroundImage') {
            $src = $postDataHelper->getPostAuthorImage();
            if (!empty($src)) {
                $this->addDesignOptionsStyles($atts['elementId'], $src, $atts['device']);
            }
        }

        return $response;
    }

    /**
     * @param $id
     * @param $src
     * @param $device
     */
    protected function addDesignOptionsStyles($id, $src, $device)
    {
        $frontendHelper = vchelper('Frontend');
        if ($frontendHelper->isPageEditable()) {
            return;
        }

        $this->wpAddAction(
            'wp_print_footer_scripts',
            function () use ($id, $src, $device) {
                $devicesMedia = [
                    'all' => ['', ''],
                    'xs' => ['@media (max-width: 543px) {', '}'],
                    'sm' => ['@media (max-width: 767px) and (min-width: 544px) {', '}'],
                    'md' => ['@media (max-width: 991px) and (min-width: 768px) {', '}'],
                    'lg' => ['@media (max-width: 1199px) and (min-width: 992px) {', '}'],
                    'xl' => ['@media (min-width: 1200px) {', '}'],
                ];
                // TODO: Use wp_add_inline_style
                $selector = sprintf(
                    '#el-%1$s[data-vce-do-apply*="all"][data-vce-do-apply*="el-%1$s"][data-vce-dynamic-image-%2$s="%1$s"],#el-%1$s[data-vce-do-apply*="background"][data-vce-do-apply*="el-%1$s"][data-vce-dynamic-image-%2$s="%1$s"],#el-%1$s [data-vce-do-apply*="all"][data-vce-do-apply*="el-%1$s"][data-vce-dynamic-image-%2$s="%1$s"],#el-%1$s [data-vce-do-apply*="background"][data-vce-do-apply*="el-%1$s"][data-vce-dynamic-image-%2$s="%1$s"]',
                    esc_attr($id),
                    esc_attr($device)
                );
                echo sprintf(
                    '<style>%1$s %2$s { background-image: url("%3$s"); } %4$s</style>',
                    $devicesMedia[ $device ][0],
                    $selector,
                    esc_url($src),
                    $devicesMedia[ $device ][1]
                );
            }
        );
    }
}
