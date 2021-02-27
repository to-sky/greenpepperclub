<?php

namespace advancedCustomFieldsController\advancedCustomFieldsController;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class AdvancedCustomFieldsController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_WP_ADVANCED_CUSTOM_FIELDS_CONTROLLER')) {
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );

            $this->addFilter('vcv:autocomplete:acfSourceId:render', 'acfSourceId');

            define('VCV_WP_ADVANCED_CUSTOM_FIELDS_CONTROLLER', true);
        }
    }

    /**
     * @param $response
     * @param $payload
     *
     * @return mixed
     */
    protected function acfSourceId($response, $payload)
    {
        global $wpdb;
        $searchValue = $payload['searchValue'];
        $sourceId = (int)$searchValue;
        $postMetaInfos = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT ID AS id, post_title AS title
					FROM {$wpdb->posts} 
					WHERE post_status = 'publish' AND ( ID = '%d' OR post_title LIKE '%%%s%%' )",
                $sourceId > 0 ? $sourceId : -1,
                stripslashes($searchValue)
            ),
            ARRAY_A
        );
        $response['results'] = [];
        if (is_array($postMetaInfos) && !empty($postMetaInfos)) {
            foreach ($postMetaInfos as $value) {
                $data = [];
                $data['value'] = $value['id'];
                $data['label'] = __('Id', 'visualcomposer') . ': ' . $value['id'] . ((strlen($value['title']) > 0)
                        ? ' - ' . __('Title', 'visualcomposer') . ': ' . $value['title'] : '');
                $response['results'][] = $data;
            }
        }

        return $response;
    }

    protected function checkPlugin()
    {
        if (!class_exists('acf')) {
            add_shortcode(
                'acf',
                function () {
                    return __('The Advanced Custom Fields plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
