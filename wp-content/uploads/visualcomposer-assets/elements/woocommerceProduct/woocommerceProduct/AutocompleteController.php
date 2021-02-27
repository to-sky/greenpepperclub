<?php

namespace woocommerceProduct\woocommerceProduct;

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;

class AutocompleteController extends Container implements Module
{
    use EventsFilters;

    public function __construct()
    {
        if (!defined('VCV_WOOCOMMERCE_AUTOCOMPLETE')) {
            $this->addFilter('vcv:autocomplete:woocommerce:render', 'productIdAutocompleteSuggester');
            define('VCV_WOOCOMMERCE_AUTOCOMPLETE', true);
        }
    }

    protected function productIdAutocompleteSuggester($response, $payload)
    {
        global $wpdb;
        $searchValue = $payload['searchValue'];
        $productId = (int)$searchValue;
        $postMetaInfos = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT a.ID AS id, a.post_title AS title, b.meta_value AS sku
					FROM {$wpdb->posts} AS a
					LEFT JOIN ( SELECT meta_value, post_id  FROM {$wpdb->postmeta} WHERE `meta_key` = '_sku' ) AS b ON b.post_id = a.ID
					WHERE a.post_type = 'product' AND a.post_status = 'publish' AND ( a.ID = '%d' OR b.meta_value LIKE '%%%s%%' OR a.post_title LIKE '%%%s%%' )",
                $productId > 0 ? $productId : -1,
                stripslashes($searchValue),
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
                        ? ' - ' . __('Title', 'visualcomposer') . ': ' . $value['title'] : '') . ((strlen(
                            $value['sku']
                        ) > 0) ? ' - ' . __('Sku', 'visualcomposer') . ': ' . $value['sku'] : '');
                $response['results'][] = $data;
            }
        }

        return $response;
    }
}
