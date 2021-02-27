<?php

namespace woocommerceProductCategories\woocommerceProductCategories;

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;

class AutocompleteController extends Container implements Module
{
    use EventsFilters;

    public function __construct()
    {
        if (!defined('VCV_WOOCOMMERCE_AUTOCOMPLETE_CATEGORY')) {
            $this->addFilter('vcv:autocomplete:woocommerceCategory:render', 'productCategoryAutocompleteSuggester');
            define('VCV_WOOCOMMERCE_AUTOCOMPLETE_CATEGORY', true);
        }
    }

    protected function productCategoryAutocompleteSuggester($response, $payload)
    {
        global $wpdb;
        $searchValue = $payload['searchValue'];
        $returnValue = $payload['returnValue'];
        $carId = (int)$searchValue;
        $searchValue = trim($searchValue);
        $postMetaInfos = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT a.term_id AS id, b.name as name, b.slug AS slug
						FROM {$wpdb->term_taxonomy} AS a
						INNER JOIN {$wpdb->terms} AS b ON b.term_id = a.term_id
						WHERE a.taxonomy = 'product_cat' AND (a.term_id = '%d' OR b.slug LIKE '%%%s%%' OR b.name LIKE '%%%s%%' )",
                $carId > 0 ? $carId : -1,
                stripslashes($searchValue),
                stripslashes($searchValue)
            ),
            ARRAY_A
        );

        $response['results'] = [];
        if (is_array($postMetaInfos) && !empty($postMetaInfos)) {
            foreach ($postMetaInfos as $value) {
                $data = [];
                $data['value'] = $returnValue ? $value[$returnValue] : $value['id'];
                $data['label'] = __('Id', 'visualcomposer') . ': ' . $value['id'] . ((strlen($value['name']) > 0) ? ' - '
                        . __('Name', 'visualcomposer') . ': ' . $value['name'] : '') . ((strlen($value['slug']) > 0)
                        ? ' - ' . __('Slug', 'visualcomposer') . ': ' . $value['slug'] : '');
                $response['results'][] = $data;
            }
        }

        return $response;
    }
}
