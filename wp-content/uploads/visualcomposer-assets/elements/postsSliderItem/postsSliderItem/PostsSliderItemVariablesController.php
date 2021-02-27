<?php

namespace postsSliderItem\postsSliderItem;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;

/**
 * Class PostDescriptionVariablesController
 * @package VisualComposer\Modules\Elements\Grids
 */
class PostsSliderItemVariablesController extends Container implements Module
{
    use EventsFilters;

    /**
     * PostsSliderItemVariablesController constructor.
     */
    public function __construct()
    {
        if (!defined('VCV_POSTS_SLIDER_VARIABLES_CONTROLLER')) {
            $this->addFilter(
                'vcv:elements:grid_item_template:variable:custom_featured_image_hasimage_class_posts_slider',
                'addFeaturedClass'
            );
            define('VCV_POSTS_SLIDER_VARIABLES_CONTROLLER', true);
        }
    }

    /**
     * @param $result
     * @param $payload
     *
     * @return mixed|string
     */
    protected function addFeaturedClass($result, $payload)
    {
        $url = vcfilter(
            'vcv:elements:grid_item_template:variable:featured_image_url',
            '',
            [
                'key' => 'featured_image_url',
                'value' => null,
                'post' => $payload['post'],
            ]
        );
        if (empty($url)) {
            $result = ' vce-posts-slider-item-content-background';
        }

        return $result;
    }
}
