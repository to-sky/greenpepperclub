<?php

namespace copyright\copyright;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Framework\Container;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Modules\Elements\Traits\AddShortcodeTrait;

class CopyrightShortcodes extends Container implements Module
{
    use EventsFilters;
    use AddShortcodeTrait;

    public function __construct()
    {
        if (!defined('VCV_COPYRIGHT_SHORTCODE')) {
            $this->addEvent('vcv:inited', 'registerShortcode');
            $this->addFilter('vcv:editor:variables vcv:editor:variables/copyright', 'getVariables');
            define('VCV_COPYRIGHT_SHORTCODE', true);
        }
    }

    /**
     * Register Shortcode
     */
    protected function registerShortcode()
    {
        $this->addShortcode('vcv_year', 'renderYear');
        $this->addShortcode('vcv_blogname', 'renderBlogname');
    }

    protected function getVariables($variables)
    {
        $value = get_bloginfo('name');
        $variables[] = [
            'key' => 'vcvBlogname',
            'value' => $value,
            'type' => 'variable',
        ];

        return $variables;
    }

    /**
     * @param $atts
     * @param $content
     * @param $tag
     *
     * @return string
     */
    protected function renderYear($atts, $content, $tag)
    {
        return date('Y');
    }

    /**
     * @param $atts
     * @param $content
     * @param $tag
     *
     * @return string
     */
    protected function renderBlogname($atts, $content, $tag)
    {
        return get_bloginfo('name');
    }
}
