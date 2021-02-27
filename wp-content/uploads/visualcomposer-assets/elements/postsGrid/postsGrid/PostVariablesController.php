<?php

namespace postsGrid\postsGrid;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;

/**
 * Class TemplateVariablesController
 * @package VisualComposer\Modules\Elements\Grids
 */
class PostVariablesController extends Container implements Module
{
    use EventsFilters;

    /**
     * TemplateVariablesController constructor.
     */
    public function __construct()
    {
        if (!defined('VCV_POSTS_GRID_POSTS_VARIABLES_CONTROLLER')) {
            /** @see \postsGrid\postsGrid\PostVariablesController::templatePostVariables */
            $this->addFilter('vcv:elements:grid_item_template:variable:post_*', 'templatePostVariables');
            /** @see \postsGrid\postsGrid\PostVariablesController::postAuthor */
            $this->addFilter('vcv:elements:grid_item_template:variable:post_author', 'postAuthor');
            $this->addFilter('vcv:elements:grid_item_template:variable:post_author_url', 'postAuthorUrl');
            /** @see \postsGrid\postsGrid\PostVariablesController::postTeaser */
            $this->addFilter('vcv:elements:grid_item_template:variable:post_teaser', 'postTeaser');
            $this->addFilter('vcv:elements:grid_item_template:variable:post_date', 'postDate');
            /** @see \postsGrid\postsGrid\PostVariablesController::simplePostTeaser */
            $this->addFilter('vcv:elements:grid_item_template:variable:simple_post_teaser', 'simplePostTeaser');
            /** @see \postsGrid\postsGrid\PostVariablesController::postPermalink */
            $this->addFilter('vcv:elements:grid_item_template:variable:post_permalink', 'postPermalink');
            $this->addFilter('vcv:elements:grid_item_template:variable:post_category', 'postCategory');
            $this->addFilter('vcv:elements:grid_item_template:variable:post_category_link', 'postCategoryLink');
            /** @see \postsGrid\postsGrid\PostVariablesController::featuredImage */
            $this->addFilter('vcv:elements:grid_item_template:variable:featured_image_url', 'featuredImage');
            $this->addFilter('vcv:elements:grid_item_template:variable:post_comments_count', 'postCommentsCount');
            define('VCV_POSTS_GRID_POSTS_VARIABLES_CONTROLLER', true);
        }
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return string
     */
    protected function templatePostVariables($result, $payload)
    {
        /** @var \WP_Post $post */
        $post = $payload['post'];

        return isset($post->{$payload['key']}) ? $post->{$payload['key']} : '';
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return string
     */
    protected function postAuthor($result, $payload)
    {
        /** @var \WP_Post $post */
        $post = $payload['post'];
        // @codingStandardsIgnoreLine
        $postAuthor = $post->post_author;
        $author = '';
        if ($postAuthor) {
            // @codingStandardsIgnoreLine
            $author = get_userdata($postAuthor)->display_name;
        }

        return $author;
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return string
     */
    protected function postCommentsCount($result, $payload)
    {
        /** @var \WP_Post $post */
        $post = $payload['post'];
        return get_comments_number($post->ID);
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return string
     */
    protected function postAuthorUrl($result, $payload)
    {
        /** @var \WP_Post $post */
        $post = $payload['post'];
        $niceName = $this->postAuthor($result, $payload);

        // @codingStandardsIgnoreLine
        return get_author_posts_url($post->post_author, $niceName);
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return string
     */
    protected function postTeaser($result, $payload)
    {
        ob_start();
        the_excerpt();
        $result = ob_get_clean();

        return $result;
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return string
     */
    protected function postDate($result, $payload)
    {
        return get_the_date('', $payload['post']);
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return string
     */
    protected function simplePostTeaser($result, $payload)
    {
        add_filter('excerpt_more', [$this, 'removeReadMore']);
        $result = $this->postTeaser($result, $payload);
        remove_filter('excerpt_more', [$this, 'removeReadMore']);

        return $result;
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return string
     */
    protected function postCategory($result, $payload)
    {
        ob_start();
        $categories = get_the_category();
        if (is_array($categories) && isset($categories[0])) {
            echo $categories[0]->name;
        }
        $result = ob_get_clean();

        return $result;
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return string
     */
    protected function postCategoryLink($result, $payload)
    {
        ob_start();
        $categories = get_the_category();
        if (is_array($categories) && isset($categories[0])) {
            $id = $categories[0]->term_id;
            $link = get_category_link($id);
            echo $link;
        } else {
            echo get_post_type_archive_link($payload['post']->post_type);
        }
        $result = ob_get_clean();

        return $result;
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return string
     */
    protected function postPermalink($result, $payload)
    {
        return get_the_permalink($payload['post']);
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return bool
     */
    protected function featuredImage($result, $payload)
    {
        /** @var \WP_Post $post */
        $post = $payload['post'];
        $thumbnailId = get_post_meta($post->ID, '_thumbnail_id', true);
        $imageId = $thumbnailId ? $thumbnailId : $post->ID;
        $image = wp_get_attachment_image_src($imageId, 'post-thumbnail');
        $url = isset($image['0']) ? $image['0'] : false;
        if ($url) {
            $result = $url;
        }

        return $result;
    }

    /**
     * Remove default continue reading link
     *
     * @param $more
     *
     * @return string
     */
    public function removeReadMore($more)
    {
        return '';
    }
}
