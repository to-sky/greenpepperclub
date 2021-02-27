<?php

namespace backgroundImagePostGridItem\backgroundImagePostGridItem;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;

class VariablesController extends Container implements Module
{
    use EventsFilters;

    public function __construct()
    {
        if (!defined('VCV_FEATURED_POSTS_GRID_VARIABLES_CONTROLLER')) {
            $this->addFilter(
                'vcv:elements:grid_item_template:variable:post_comments_icon_backround_image_posts_grid',
                'postCommentsIconVariable'
            );
            define('VCV_FEATURED_POSTS_GRID_VARIABLES_CONTROLLER', true);
        }
    }

    protected function postCommentsIconVariable($result, $payload)
    {
        /** @var \WP_Post $post */
        $post = $payload['post'];
        $value = rawurldecode($payload['value']);
        $commentsCount = get_comments_number($post->ID);
        if (!empty($commentsCount)) {
            $result = sprintf(
                '<svg class="vce-post-description--meta-icon" width="15px" height="14px" viewBox="0 0 15 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g class="vce-post-description--meta-icon-shape" transform="translate(-150.000000, -442.000000)" fill="%s">
                    <path d="M150,442 L165,442 L165,444 L150,444 L150,442 Z M150,446 L158,446 L158,448 L150,448 L150,446 Z M150,454 L155,454 L155,456 L150,456 L150,454 Z M150,450 L161,450 L161,452 L150,452 L150,450 Z" />
                  </g>
                </g>
              </svg>
              <span class="vce-post-description--meta-comment">%d</span>',
                $value,
                $commentsCount
            );
        }

        return $result;
    }
}
