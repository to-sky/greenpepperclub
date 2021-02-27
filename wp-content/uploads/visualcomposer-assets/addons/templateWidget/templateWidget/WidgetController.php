<?php

namespace templateWidget\templateWidget;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\AssetsEnqueue;
use VisualComposer\Helpers\Frontend;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class WidgetController extends Container implements Module
{
    use WpFiltersActions;
    use EventsFilters;

    protected $footerScripts = '';

    public function __construct()
    {
        $this->wpAddAction('widgets_init', 'registerTemplateWidget');
        $this->wpAddAction('wp_footer', 'addFooterScripts');
    }

    protected function registerTemplateWidget()
    {
        register_widget('templateWidget\templateWidget\TemplateWidget');
    }

    public function getTemplateContent($templateId)
    {
        global $post;
        $backup = $post;
        $query = new \WP_Query('post_type=vcv_templates&post_status=any&p=' . intval(esc_attr($templateId)));
        $output = '';

        while ($query->have_posts()) {
            $query->the_post();

            ob_start();
            the_content();
            $postContent = ob_get_clean();

            ob_start();
            do_action('wp_enqueue_scripts');
            $this->call('enqueueAssets');
            // do_action('wp_print_footer_scripts');
            wp_scripts()->do_items(false, 2); // Group === 2 to exclude vcv: scripts in content
            $this->footerScripts .= ob_get_clean();

            $output .= $this->addWidgetWrapper($postContent);
            wp_reset_postdata();
            break;
        }
        $post = $backup;

        $requestHelper = vchelper('Request');
        if ($requestHelper->isAjax()) {
            return $output . $this->footerScripts;
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

    protected function addWidgetWrapper($content)
    {
        $content = '<div class="vcv-template-widget">' . $content . '</div>';

        return $content;
    }

    protected function addFooterScripts()
    {
        echo $this->footerScripts;
    }
}
