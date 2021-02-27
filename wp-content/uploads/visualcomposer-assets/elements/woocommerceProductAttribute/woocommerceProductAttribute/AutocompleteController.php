<?php

namespace woocommerceProductAttribute\woocommerceProductAttribute;

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;

class AutocompleteController extends Container implements Module
{
    use EventsFilters;

    public function __construct()
    {
        if (!defined('VCV_WOOCOMMERCE_AUTOCOMPLETE_ATTRIBUTE')) {
            $this->addFilter('vcv:autocomplete:woocommerceAttribute:render', 'attributeSuggester');
            $this->addFilter('vcv:autocomplete:woocommerceAttributeFilter:render', 'filterSuggester');
            define('VCV_WOOCOMMERCE_AUTOCOMPLETE_ATTRIBUTE', true);
        }
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
