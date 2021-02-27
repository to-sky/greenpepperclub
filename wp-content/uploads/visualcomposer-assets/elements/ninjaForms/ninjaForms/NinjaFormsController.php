<?php

namespace ninjaForms\ninjaForms;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class NinjaFormsController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_WP_NINJA_FORMS_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/ninjaForms',
                'getVariables'
            );
            $this->wpAddAction(
                'plugins_loaded',
                'checkPlugin',
                16
            );
            define('VCV_WP_NINJA_FORMS_CONTROLLER', true);
        }
    }

    /**
     * @param $variables
     * @param $payload
     *
     * @return array
     */
    protected function getVariables($variables, $payload)
    {
        if (function_exists('ninja_forms_get_all_forms')) {
            $ninjaFormsData = ninja_forms_get_all_forms();
            $ninjaForms = [];
            $ninjaForms[] = ['label' => __('Select source', 'visualcomposer'), 'value' => 0];
            if (!empty($ninjaFormsData)) {
                // Fill array with Name=>Value(ID)
                foreach ($ninjaFormsData as $key => $value) {
                    if (is_array($value)) {
                        $ninjaForms[] = [
                            'label' => $value['name'],
                            'value' => $value['id'],
                        ];
                    }
                }
            } else {
                $ninjaForms = [
                    ['label' => __('No ninja forms found', 'visualcomposer'), 'value' => 0],
                ];
            }
        } else {
            $ninjaForms = [
                ['label' => __('No ninja forms found', 'visualcomposer'), 'value' => 0],
            ];
        }
        $variables[] = [
            'key' => 'vcvWpNinjaForms',
            'value' => $ninjaForms,
        ];

        return $variables;
    }

    protected function checkPlugin()
    {
        if (!function_exists('ninja_forms_get_all_forms')) {
            add_shortcode(
                'ninja_form',
                function () {
                    return __('The Ninja Forms plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
