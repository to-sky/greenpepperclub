<?php

namespace widgetizedSidebar\widgetizedSidebar;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;

class WpSidebarController extends Container implements Module
{
    use EventsFilters;

    public function __construct()
    {
        if (!defined('VCV_WIDGETIZED_SIDEBAR_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/widgetizedSidebar',
                'getVariables'
            );
            define('VCV_WIDGETIZED_SIDEBAR_CONTROLLER', true);
        }
    }

    protected function getVariables($variables)
    {
        // @codingStandardsIgnoreLine
        global $wp_registered_sidebars;
        $values = [];
        // @codingStandardsIgnoreLine
        foreach ($wp_registered_sidebars as $key => $sidebar) {
            $values[] = [
                'label' => $sidebar['name'],
                'value' => $sidebar['id'],
            ];
        }
        $variables[] = [
            'key' => 'vcvWpSidebars',
            'value' => $values,
            'type' => 'variable',
        ];

        return $variables;
    }
}
