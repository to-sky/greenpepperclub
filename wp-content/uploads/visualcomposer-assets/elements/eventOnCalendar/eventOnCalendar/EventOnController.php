<?php

namespace eventOnCalendar\eventOnCalendar;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Frontend;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class EventOnController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct(Frontend $frontendHelper)
    {
        if (!defined('VCV_WP_EVENT_ON_CONTROLLER')) {
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );

            $this->addFilter('vcv:autocomplete:eventsOnType:render', 'eventTypeAutocomplete');
            $this->addFilter('vcv:autocomplete:eventsOnType2:render', 'eventType2Autocomplete');

            $this->addFilter('vcv:editor:autocomplete:checkAction', 'checkAction');
            $this->addFilter('vcv:frontend:footer:extraOutput', 'fixEditorStyles');

            define('VCV_WP_EVENT_ON_CONTROLLER', true);
        }
    }

    protected function fixEditorStyles($output)
    {
        $output[] = <<<STYLE
<style>
.evo_lightboxes {
 display: none !important;
}
</style>
STYLE;

        return $output;
    }

    /**
     * @param $output
     *
     * @return string
     */
    protected function setId($output)
    {
        return preg_replace('/(eventon_\d+)/', '$1_' . $_SERVER['REQUEST_TIME'], $output);
    }

    /**
     * @param $response
     * @param $payload
     *
     * @return mixed
     */
    protected function eventTypeAutocomplete($response, $payload)
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
						WHERE a.taxonomy = 'event_type' AND (a.term_id = '%d' OR b.slug LIKE '%%%s%%' OR b.name LIKE '%%%s%%' )",
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
                $data['value'] = $returnValue ? $value[ $returnValue ] : $value['id'];
                $data['label'] = __('Id', 'visualcomposer') . ': ' . $value['id'] . ((strlen($value['name']) > 0) ? ' - '
                        . __('Name', 'visualcomposer') . ': ' . $value['name'] : '') . ((strlen($value['slug']) > 0)
                        ? ' - ' . __('Slug', 'visualcomposer') . ': ' . $value['slug'] : '');
                $response['results'][] = $data;
            }
        }

        return $response;
    }

    /**
     * @param $response
     * @param $payload
     *
     * @return mixed
     */
    protected function eventType2Autocomplete($response, $payload)
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
						WHERE a.taxonomy = 'event_type_2' AND (a.term_id = '%d' OR b.slug LIKE '%%%s%%' OR b.name LIKE '%%%s%%' )",
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
                $data['value'] = $returnValue ? $value[ $returnValue ] : $value['id'];
                $data['label'] = __('Id', 'visualcomposer') . ': ' . $value['id'] . ((strlen($value['name']) > 0) ? ' - '
                        . __('Name', 'visualcomposer') . ': ' . $value['name'] : '') . ((strlen($value['slug']) > 0)
                        ? ' - ' . __('Slug', 'visualcomposer') . ': ' . $value['slug'] : '');
                $response['results'][] = $data;
            }
        }

        return $response;
    }

    /**
     * @param $tokenLabels
     * @param $payload
     *
     * @return mixed
     */
    protected function checkAction($tokenLabels, $payload)
    {
        if (isset($payload['action']) && isset($payload['token']) && isset($payload['returnValue'])) {
            $action = $payload['action'];
            $token = $payload['token'];
            $returnValue = $payload['returnValue'];

            switch ($action) {
                case 'event_type':
                    if ('slug' == $returnValue) {
                        $term = get_term_by('slug', $token, 'event_type');
                    } else {
                        $term = get_term_by('id', $token, 'event_type');
                    }
                    if ($term) {
                        $tokenLabels[ $token ] = $term->name;
                    }
                    break;
                case 'event_type_2':
                    if ('slug' == $returnValue) {
                        $term = get_term_by('slug', $token, 'event_type_2');
                    } else {
                        $term = get_term_by('id', $token, 'event_type_2');
                    }
                    if ($term) {
                        $tokenLabels[ $token ] = $term->name;
                    }
                    break;
            }
        }

        return $tokenLabels;
    }

    /**
     *
     */
    protected function checkPlugin()
    {
        if (!class_exists('EventON')) {
            add_shortcode(
                'add_eventon',
                function () {
                    return __('The EventOn plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
