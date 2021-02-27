<?php

namespace addToAnyShareButtons\addToAnyShareButtons;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class AddToAnyShareButtonsController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_WP_ADDTOANY_SHARE_BUTTONS_CONTROLLER')) {
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );
            define('VCV_ADDTOANY_SHARE_BUTTONS_CONTROLLER', true);
        }
    }

    protected function checkPlugin()
    {
        if (!function_exists('A2A_SHARE_SAVE_init')) {
            add_shortcode(
                'addtoany',
                function () {
                    return __('The AddToAny Share Buttons plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
