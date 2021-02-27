<?php

namespace postsGridDataSourceListOfIds\postsGridDataSourceListOfIds;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\PostType;
use VisualComposer\Helpers\Traits\EventsFilters;

/**
 * Class ListOfIdsController
 * @package VisualComposer\Modules\Elements\Grids\DataSource
 */
class ListOfIdsController extends Container implements Module
{
    use EventsFilters;

    /**
     * PostsController constructor.
     */
    public function __construct()
    {
        if (!defined('VCV_POSTS_GRID_LIST_OF_IDS_CONTROLLER')) {
            /** @see \VisualComposer\Modules\Elements\Grids\DataSource\ListOfIdsController::postSuggester */
            $this->addFilter('vcv:autocomplete:postGrid:render', 'postSuggester');
            /** @see \VisualComposer\Modules\Elements\Grids\DataSource\ListOfIdsController::queryPosts */
            $this->addFilter('vcv:elements:grids:posts', 'queryPosts');
            define('VCV_POSTS_GRID_LIST_OF_IDS_CONTROLLER', true);
        }
    }

    /**
     * @param $response
     * @param $payload
     * @param \VisualComposer\Helpers\PostType $postTypeHelper
     *
     * @return array
     */
    protected function postSuggester($response, $payload, PostType $postTypeHelper)
    {
        global $wpdb;
        $searchValue = $payload['searchValue'];
        $postId = (int)$searchValue;
        $postTypes = get_post_types(['public' => true], 'names');
        $postTypeQuery = [];

        foreach ($postTypes as $postType) {
            $postTypeQuery[] = "post_type='" . esc_sql($postType) . "'";
        }

        $postQuery = implode(" OR ", $postTypeQuery);

        $posts = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT ID AS id, post_title AS title FROM {$wpdb->posts} WHERE ( post_status = 'publish' ) AND ({$postQuery}) AND ( ID = '%d' OR post_title LIKE '%%%s%%' ) LIMIT 30",
                $postId > 0 ? $postId : -1,
                stripslashes($searchValue)
            ),
            ARRAY_A
        );
        $response['results'] = [];
        if (is_array($posts) && !empty($posts)) {
            foreach ($posts as $post) {
                $data = [];
                $data['value'] = $post['id'];
                $data['label'] = __('Id', 'visualcomposer') . ': ' . $post['id'] . ' - ' . __('Title', 'visualcomposer') . ': '
                    . $post['title'];
                $response['results'][] = $data;
            }
        }

        return $response;
    }

    /**
     * @param $posts
     * @param $payload
     * @param \VisualComposer\Helpers\PostType $postTypeHelper
     *
     * @return array
     */
    protected function queryPosts(
        $posts,
        $payload,
        PostType $postTypeHelper
    ) {
        if (isset($payload['atts']['source'], $payload['atts']['source']['tag'])
            && $payload['atts']['source']['tag'] === 'postsGridDataSourceListOfIds'
        ) {
            // Value:
            $value = html_entity_decode($payload['atts']['source']['value']);
            if (!$value) {
                return false;
            }

            $values = explode('&', $value);
            $query = [];
            foreach ($values as $value) {
                $_values = explode('=', $value);

                if ('post__in' === $_values[0]) {
                    $query[ $_values[0] ] = json_decode($_values[1], true);
                } else {
                    $query[ $_values[0] ] = $_values[1];
                }
            }

            $query = array_merge(
                $query,
                [
                    'post_type' => get_post_types(['public' => true], 'names'),
                    'orderby' => 'post__in',
                    'posts_per_page' => '-1',
                ]
            );
            $posts = array_merge(
                $posts,
                $postTypeHelper->query($query)
            );
        }

        return $posts;
    }
}
