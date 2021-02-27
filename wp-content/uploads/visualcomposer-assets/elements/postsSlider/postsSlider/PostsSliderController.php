<?php

namespace postsSlider\postsSlider;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Modules\Elements\Traits\ShortcodesTrait;

/**
 * Class PostsSliderController
 * @package VisualComposer\Modules\Elements\Grids
 */
class PostsSliderController extends Container implements Module
{
    use EventsFilters;
    use ShortcodesTrait;

    protected $shortcodeTag = 'vcv_posts_slider_grid';

    /**
     * PostsGridController constructor.
     */
    public function __construct()
    {
        if (!defined('VCV_POSTS_GRID_POSTS_SLIDER_GRID_CONTROLLER')) {
            /** @see \VisualComposer\Modules\Elements\Traits\ShortcodesTrait::renderEditor */
            $this->addFilter('vcv:ajax:elements:posts_slider_grid:adminNonce', 'renderEditor');
            define('VCV_POSTS_GRID_POSTS_SLIDER_GRID_CONTROLLER', true);
        }
    }
}
