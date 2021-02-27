<?php

namespace postSliderBlock\postSliderBlock;

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
 * Class PostSliderBlockController
 * @package VisualComposer\Modules\Elements\Grids
 */
class PostSliderBlockController extends Container implements Module
{
    use EventsFilters;
    use ShortcodesTrait;

    protected $shortcodeTag = 'vcv_post_slider_block_grid';

    /**
     * PostsGridController constructor.
     */
    public function __construct()
    {
        if (!defined('VCV_POSTS_GRID_POST_SLIDER_BLOCK_GRID_CONTROLLER')) {
            /** @see \VisualComposer\Modules\Elements\Traits\ShortcodesTrait::renderEditor */
            $this->addFilter('vcv:ajax:elements:post_slider_block_grid:adminNonce', 'renderEditor');
            define('VCV_POSTS_GRID_POST_SLIDER_BLOCK_GRID_CONTROLLER', true);
        }
    }
}
