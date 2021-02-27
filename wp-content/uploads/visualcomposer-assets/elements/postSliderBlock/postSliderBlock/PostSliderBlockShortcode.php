<?php

namespace postSliderBlock\postSliderBlock;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\PostsGridPostIterator;
use VisualComposer\Modules\Elements\Traits\AddShortcodeTrait;

class PostSliderBlockShortcode extends Container implements Module
{
    use AddShortcodeTrait;

    protected $shortcodeTag = 'vcv_post_slider_block_grid';

    /**
     * PostsGridController constructor.
     */
    public function __construct()
    {
        if (!defined('VCV_POSTS_GRID_POST_SLIDER_BLOCK_GRID_SHORTCODE')) {
            $this->addShortcode($this->shortcodeTag, 'render');
            define('VCV_POSTS_GRID_POST_SLIDER_BLOCK_GRID_SHORTCODE', true);
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
                'pointers' => '',
                'arrows' => '',
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
        if (!count($posts)) {
            $output = '';
        } else {
            $postsOutput = $postsGridPostIteratorHelper->loopPosts($posts, $content);

            $prevArrow = '';
            $nextArrow = '';
            $sliderDots = '';

            if ($atts['arrows']) {
                $prevArrow = '<div class="vce-post-slider-block-arrow vce-post-slider-block-prev-arrow">
                       <svg width="16px" height="25px" viewBox="0 0 16 25">
                         <polygon id="Prev-Arrow" points="12.3743687 5.68434189e-14 0 12.3743687 12.0208153 24.395184 14.1421356 22.2738636 4.31790889 12.4496369 14.5709572 2.19658855" />
                       </svg>
                     </div>';
                $nextArrow = '<div class="vce-post-slider-block-arrow vce-post-slider-block-next-arrow">
                       <svg width="16px" height="25px" viewBox="0 0 16 25">
                         <polygon id="Next-Arrow" points="3.02081528 24.395184 15.395184 12.0208153 3.37436867 1.13686838e-13 1.25304833 2.12132034 11.0772751 11.9455471 0.824226734 22.1985954" />
                       </svg>
                    </div>';
            }
            if ($atts['pointers']) {
                $sliderDots = '<div class="vce-post-slider-block-dots"></div>';
            }

            $output = sprintf(
                '<div class="vce-post-slider-block-list">
                   %s
                   <div class="slick-list">
                     <div class="slick-track">%s</div>
                   </div>
                   %s
                   %s
                </div>',
                $prevArrow,
                $postsOutput,
                $nextArrow,
                $sliderDots
            );
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
