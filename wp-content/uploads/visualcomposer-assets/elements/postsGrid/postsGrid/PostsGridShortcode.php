<?php

namespace postsGrid\postsGrid;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\PostsGridPostIterator;
use VisualComposer\Modules\Elements\Traits\AddShortcodeTrait;

class PostsGridShortcode extends Container implements Module
{
    use AddShortcodeTrait;

    protected $shortcodeTag = 'vcv_posts_grid';

    /**
     * PostsGridController constructor.
     */
    public function __construct()
    {
        if (!defined('VCV_POSTS_GRID_POSTS_GRID_SHORTCODE')) {
            /** @see \VisualComposer\Modules\Elements\Grids\PostsGridShortcode::render */
            $this->addShortcode($this->shortcodeTag, 'render');
            define('VCV_POSTS_GRID_POSTS_GRID_SHORTCODE', true);
        }
    }

    /**
     * @param $atts
     * @param $content
     * @param $tag
     * @param \VisualComposer\Helpers\PostsGridPostIterator $postsGridPostIteratorHelper
     *
     * @return string
     */
    protected function render($atts, $content, $tag, PostsGridPostIterator $postsGridPostIteratorHelper)
    {
        // Build Query from $atts
        $atts = shortcode_atts(
            [
                'unique_id' => '',
                'source' => '',
                'pagination' => '',
                'pagination_color' => '',
                'pagination_per_page' => '',
            ],
            $atts
        );
        $atts['source'] = json_decode(rawurldecode($atts['source']), true);
        $posts = vcfilter(
            'vcv:elements:grids:posts',
            [],
            [
                'atts' => $atts,
                'tag' => $tag,
            ]
        );
        if (is_array($posts) && !count($posts)) {
            $output = '';
        } else {
            $postsOutput = $postsGridPostIteratorHelper->loopPosts($posts, $content);
            $output = sprintf('<div class="vce-posts-grid-list">%s</div>', $postsOutput);
            $output = vcfilter(
                'vcv:elements:grids:output',
                $output,
                [
                    'atts' => $atts,
                    'tag' => $tag,
                ]
            );
        }

        return $output;
    }
}
