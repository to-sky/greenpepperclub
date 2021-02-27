<?php

namespace globalTemplate\globalTemplate;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Framework\Container;
use VisualComposer\Helpers\AssetsEnqueue;
use VisualComposer\Helpers\Frontend;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Modules\Elements\Traits\AddShortcodeTrait;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class GlobalTemplateShortcode extends Container implements Module
{
    use EventsFilters;
    use AddShortcodeTrait;
    use WpFiltersActions;

    protected $postId;

    public function __construct()
    {
        if (!defined('VCV_GLOBAL_TEMPLATE_SHORTCODE')) {
            $this->addEvent('vcv:inited', 'registerShortcode');
            define('VCV_GLOBAL_TEMPLATE_SHORTCODE', true);
        }
        $this->wpAddAction('wp_enqueue_scripts', 'resetPostVariable', 49);
    }

    /**
     *
     */
    protected function registerShortcode()
    {
        $this->addShortcode('vcv_global_template', 'render');
    }

    /**
     * @param $atts
     * @param $content
     * @param $tag
     *
     * @return string
     * @throws \ReflectionException
     */
    protected function render($atts, $content, $tag)
    {
        $output = __('Please Select your Template', 'visualcomposer');
        $atts = shortcode_atts(
            [
                'id' => '',
            ],
            $atts
        );
        if (!empty($atts['id'])) {
            global $post;
            $backup = $post;
            $query = new \WP_Query('post_type=vcv_templates&suppress_filters=true&post_status=any&p=' . intval(esc_attr($atts['id'])));
            while ($query->have_posts()) {
                $query->the_post();
                $this->postId = get_the_ID();
                //$newPosts[] = $post;
                // $blockId = get_the_ID();
                // @codingStandardsIgnoreLine
                // the_content(); // Has issues with typewritter
                // @codingStandardsIgnoreLine

                ob_start();
                do_action('wp_enqueue_scripts');
                $this->call('enqueueAssets');
                wp_scripts()->do_items(false, 2); // Group === 2 to exclude vcv: scripts in content
                $output = ob_get_clean();

                // @codingStandardsIgnoreLine
                $post = $backup; // We need set scope - current post. This may raise issues.. VC-534
                $output .= vcfilter('vcv:frontend:content', do_shortcode($query->post->post_content));
                wp_reset_postdata();
                break;
            }
            $post = $backup;
        }

        return $output;
    }

    /**
     * @param \VisualComposer\Helpers\AssetsEnqueue $assetsEnqueueHelper
     * @param \VisualComposer\Helpers\Frontend $frontendHelper
     */
    protected function enqueueAssets(
        AssetsEnqueue $assetsEnqueueHelper,
        Frontend $frontendHelper
    ) {
        $sourceId = get_the_ID();
        if ($frontendHelper->isPreview()) {
            $preview = wp_get_post_autosave($sourceId);
            if (is_object($preview)) {
                $sourceId = $preview->ID;
            }
        }
        $assetsEnqueueHelper->enqueueAssets($sourceId);
    }

    /**
     * CF7 redirection plugin fix
     * Reset post variable manipulated by get_forms() of CF7 redirection plugin
     */
    protected function resetPostVariable()
    {
        // if plugin is not activated return
        if (!class_exists('WPCF7_Redirect')) {
            return false;
        }
        global $post;
        if (!empty($post)) {
            global $post;
            if (null !== $this->postId && !empty($this->postId)) {
                $post = get_post($this->postId);
            }
        }
    }
}
