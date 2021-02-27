<?php

namespace nextGen\nextGen;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class NextGenController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_WP_NEXTGEN_CONTROLLER')) {
            $this->addFilter('vcv:autocomplete:nextGenGalleryGallery:render', 'gallerySuggester');
            $this->addFilter('vcv:autocomplete:nextGenGalleryAlbum:render', 'albumSuggester');
            $this->addFilter('vcv:autocomplete:nextGenGalleryTag:render', 'tagSuggester');

            $this->addFilter('vcv:editor:autocomplete:checkAction', 'checkAction');

            $this->wpAddAction('template_redirect', 'checkPlugin');
            define('VCV_WP_NEXTGEN_CONTROLLER', true);
        }
    }

    /**
     * @param $response
     * @param $payload
     *
     * @return mixed
     */
    protected function gallerySuggester($response, $payload)
    {
        global $wpdb;
        $searchValue = $payload['searchValue'];
        $sourceId = (int)$searchValue;
        $posts = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT gid, title
					FROM {$wpdb->nggallery}
					WHERE gid = '%d' OR title LIKE '%%%s%%'",
                $sourceId > 0 ? $sourceId : -1,
                stripslashes($searchValue)
            ),
            ARRAY_A
        );
        $response['results'] = [];
        if (is_array($posts) && !empty($posts)) {
            foreach ($posts as $value) {
                $data = [];
                $data['value'] = $value['gid'];
                $data['label'] = __('Id', 'visualcomposer') . ': ' . $value['gid'] . ((strlen($value['title']) > 0)
                        ? ' - ' . __('Title', 'visualcomposer') . ': ' . $value['title'] : '');
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
    protected function albumSuggester($response, $payload)
    {
        global $wpdb;
        $searchValue = $payload['searchValue'];
        $sourceId = (int)$searchValue;
        $posts = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT id, name
					FROM {$wpdb->nggalbum}
					WHERE id = '%d' OR name LIKE '%%%s%%'",
                $sourceId > 0 ? $sourceId : -1,
                stripslashes($searchValue)
            ),
            ARRAY_A
        );
        $response['results'] = [];
        if (is_array($posts) && !empty($posts)) {
            foreach ($posts as $value) {
                $data = [];
                $data['value'] = $value['id'];
                $data['label'] = __('Id', 'visualcomposer') . ': ' . $value['id'] . ((strlen($value['name']) > 0)
                        ? ' - ' . __('Title', 'visualcomposer') . ': ' . $value['name'] : '');
                $response['results'][] = $data;
            }
        }

        return $response;
    }

    protected function tagSuggester($response, $payload)
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
						WHERE a.taxonomy = 'ngg_tag' AND (a.term_id = '%d' OR b.slug LIKE '%%%s%%' OR b.name LIKE '%%%s%%' )",
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
                case 'ngg_tag':
                    $term = get_term_by('slug', $token, 'ngg_tag');
                    if ($term) {
                        $tokenLabels[ $token ] = $term->name;
                    }
                    break;
                case 'ngg_gallery':
                    if (class_exists('C_NextGEN_Bootstrap')) {
                        global $nggdb;
                        $gallery = $nggdb->find_gallery($token);
                        if ($gallery) {
                            $tokenLabels[ $token ] = $gallery->title;
                        }
                    }
                    break;
                case 'ngg_album':
                    if (class_exists('C_NextGEN_Bootstrap')) {
                        global $nggdb;
                        $album = $nggdb->find_album($token);
                        if ($album) {
                            $tokenLabels[ $token ] = $album->name;
                        }
                    }
                    break;
            }
        }

        return $tokenLabels;
    }

    protected function checkPlugin()
    {
        if (!class_exists('C_NextGEN_Bootstrap')) {
            add_shortcode(
                'ngg_images',
                function () {
                    return __('The NextGen plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
