<?php

namespace gutenbergTemplateBlock\gutenbergTemplateBlock;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Assets;
use VisualComposer\Helpers\AssetsEnqueue;
use VisualComposer\Helpers\EditorTemplates;
use VisualComposer\Helpers\Frontend;
use VisualComposer\Helpers\Traits\WpFiltersActions;
use VisualComposer\Helpers\Url;

class GutenbergTemplateBlock extends Container implements Module
{
    use WpFiltersActions;

    public function __construct()
    {
        if (!function_exists('register_block_type')) {
            return;
        }

        $this->wpAddAction('init', 'gutenbergTemplateBlock');
        $this->wpAddAction('admin_print_scripts', 'addCustomTemplatesVariable');
    }

    protected function gutenbergTemplateBlock(Assets $assetsHelper, Url $urlHelper)
    {
        wp_register_script(
            'vcv-gutenberg-blocks-js',
            !vcvenv('VCV_ENV_DEV_ADDONS') ? $assetsHelper->getAssetUrl(
                '/addons/gutenbergTemplateBlock/public/dist/addon.bundle.js?'
            ) : $urlHelper->to('devAddons/gutenbergTemplateBlock/public/dist/addon.bundle.js'),
            [
                'wp-blocks',
                'wp-element',
                'wp-editor',
                'wp-components',
                'wp-compose',
                'wp-data',
                'wp-hooks',
                'vcv:assets:vendor:script',
            ],
            VCV_VERSION
        );

        wp_register_style(
            'vcv-gutenberg-blocks-style',
            !vcvenv('VCV_ENV_DEV_ADDONS') ? $assetsHelper->getAssetUrl(
                '/addons/gutenbergTemplateBlock/public/dist/addon.bundle.css'
            ) : $urlHelper->to('devAddons/gutenbergTemplateBlock/public/dist/addon.bundle.css'),
            [],
            VCV_VERSION
        );

        register_block_type(
            'vcv-gutenberg-blocks/template-block',
            [
                'editor_script' => 'vcv-gutenberg-blocks-js',
                'editor_style' => 'vcv-gutenberg-blocks-style',
                'render_callback' => [$this, 'getTemplate'],
            ]
        );
    }

    protected function addCustomTemplatesVariable(EditorTemplates $editorTemplatesHelper)
    {
        evcview(
            'partials/constant-script',
            [
                'key' => 'VCV_CUSTOM_TEMPLATES',
                'value' => $editorTemplatesHelper->getCustomTemplateOptions(),
                'type' => 'constant',
            ]
        );
    }

    public function getTemplate($att)
    {
        global $post;

        if (!isset($att['vcwbTemplate']) || is_admin()) {
            return false;
        }

        $templateId = $att['vcwbTemplate'];
        $query = new \WP_Query('post_type=vcv_templates&post_status=any&p=' . intval(esc_attr($templateId)));
        $output = '';

        while ($query->have_posts()) {
            $query->the_post();
            $this->postId = get_the_ID();
            ob_start();
            do_action('wp_enqueue_scripts');
            $this->call('enqueueAssets');
            // do_action('wp_print_footer_scripts');
            wp_scripts()->do_items(false, 2); // Group === 2 to exclude vcv: scripts in content

            $output = ob_get_clean();

            // @codingStandardsIgnoreLine
            $output .= vcfilter('vcv:frontend:content', do_shortcode($post->post_content));
            wp_reset_postdata();
            break;
        }

        return $output;
    }

    /**
     * @param \VisualComposer\Helpers\AssetsEnqueue $assetsEnqueueHelper
     * @param \VisualComposer\Helpers\Frontend $frontendHelper
     */
    protected function enqueueAssets(AssetsEnqueue $assetsEnqueueHelper, Frontend $frontendHelper)
    {
        $sourceId = get_the_ID();
        if ($frontendHelper->isPreview()) {
            $preview = wp_get_post_autosave($sourceId);
            if (is_object($preview)) {
                $sourceId = $preview->ID;
            }
        }
        $assetsEnqueueHelper->enqueueAssets($sourceId);
    }
}
