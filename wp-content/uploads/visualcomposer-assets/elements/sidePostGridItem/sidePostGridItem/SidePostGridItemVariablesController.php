<?php

namespace sidePostGridItem\sidePostGridItem;

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
class SidePostGridItemVariablesController extends Container implements Module
{
    use EventsFilters;

    /**
     * PostDescriptionVariablesController constructor.
     */
    public function __construct()
    {
        if (!defined('VCV_SIDE_POSTS_GRID_VARIABLES_CONTROLLER')) {
            $this->addFilter(
                'vcv:elements:grid_item_template:variable:custom_featured_image_hasimage_class_side_post_grid_item',
                'addFeaturedClass'
            );
            define('VCV_SIDE_POSTS_GRID_VARIABLES_CONTROLLER', true);
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
            $result = ' vce-side-post-grid-item--no-image';
        }

        return $result;
    }
}
