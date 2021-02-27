<?php

namespace globalTemplate\globalTemplate;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Options;
use VisualComposer\Helpers\Str;
use VisualComposer\Helpers\Traits\EventsFilters;

class DataController extends Container implements Module
{
    use EventsFilters;

    protected $postType = 'vcv_templates';

    public function __construct()
    {
        $this->addFilter('vcv:dataAjax:setData', 'setAsCustom');
    }

    protected function setAsCustom($response, $payload, Options $optionsHelper, Str $strHelper)
    {
        $post = $payload['post'];
        $sourceId = $post->ID;
        // @codingStandardsIgnoreLine
        $postType = $post->post_type;
        $templateType = get_post_meta($sourceId, '_vcv-type', true);

        if ($postType === $this->postType) {
            // @codingStandardsIgnoreLine
            if ($templateType && !in_array($templateType, ['', 'custom']) && $optionsHelper->delete('hubAction:template/' . $strHelper->camel($post->post_title))) {
                update_post_meta($sourceId, '_vcv-type', 'custom');
                delete_post_meta($sourceId, '_vcv-id');
                delete_post_meta($sourceId, '_vcv-thumbnail');
                delete_post_meta($sourceId, '_vcv-preview');
                delete_post_meta($sourceId, '_vcv-bundle');
                delete_post_meta($sourceId, '_vcv-description');
            }

            //BC for older custom templates
            if (!$templateType || $templateType === '') {
                update_post_meta($sourceId, '_vcv-type', 'custom');
            }
        }

        return $response;
    }
}
