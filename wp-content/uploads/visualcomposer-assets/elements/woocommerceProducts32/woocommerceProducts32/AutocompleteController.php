<?php

namespace woocommerceProducts32\woocommerceProducts32;

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
        if (!defined('VCV_WOOCOMMERCE_AUTOCOMPLETE_CATEGORY')) {
            $this->addFilter('vcv:autocomplete:woocommerceCategory:render', 'productCategoryAutocompleteSuggester');
            define('VCV_WOOCOMMERCE_AUTOCOMPLETE_CATEGORY', true);
        }
        if (!defined('VCV_WOOCOMMERCE_AUTOCOMPLETE_ATTRIBUTE')) {
            $this->addFilter('vcv:autocomplete:woocommerceAttribute:render', 'attributeSuggester');
            $this->addFilter('vcv:autocomplete:woocommerceAttributeFilter:render', 'filterSuggester');
            define('VCV_WOOCOMMERCE_AUTOCOMPLETE_ATTRIBUTE', true);
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

    protected function attributeSuggester($response, $payload)
    {
        global $wpdb;
        $searchValue = $payload['searchValue'];
        $taxonomies = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT taxonomy FROM {$wpdb->term_taxonomy} WHERE taxonomy LIKE CONCAT('%%pa_','%s','%%') GROUP BY taxonomy",
                stripslashes(trim($searchValue))
            ),
            ARRAY_A
        );
        $response['results'] = [];
        if (is_array($taxonomies) && !empty($taxonomies)) {
            foreach ($taxonomies as $value) {
                $data = [];
                $data['value'] = substr($value['taxonomy'], 3);
                $data['label'] = substr($value['taxonomy'], 3);
                $response['results'][] = $data;
            }
        }

        return $response;
    }

    protected function filterSuggester($response, $payload)
    {
        global $wpdb;
        $searchValue = $payload['searchValue'];
        $element = $payload['element'];
        $selectedAttribute = $element['atts_attribute'];
        $attributeFilter = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT a.term_id AS id, a.name AS title, a.slug AS slug FROM {$wpdb->terms} AS a RIGHT JOIN ( SELECT taxonomy, term_id FROM {$wpdb->term_taxonomy} WHERE taxonomy = CONCAT('pa_','%s')) AS b ON b.term_id = a.term_id WHERE a.slug LIKE '%%%s%%'",
                stripslashes($selectedAttribute),
                stripslashes($searchValue)
            ),
            ARRAY_A
        );

        $response['results'] = [];
        if (is_array($attributeFilter) && !empty($attributeFilter)) {
            foreach ($attributeFilter as $value) {
                $data = [];
                $data['value'] = $value['slug'];
                $data['label'] = $value['title'];
                $response['results'][] = $data;
            }
        }

        return $response;
    }
}
