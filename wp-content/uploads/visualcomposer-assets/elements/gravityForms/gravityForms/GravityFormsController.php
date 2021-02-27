<?php

namespace gravityForms\gravityForms;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class GravityFormsController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_WP_GRAVITY_FORMS_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/getForms',
                'getForms'
            );
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );
            define('VCV_WP_GRAVITY_FORMS_CONTROLLER', true);
        }
    }

    /**
     * @param $variables
     * @param $payload
     *
     * @return array
     */
    protected function getForms($variables, $payload)
    {
        $gravityForms = [];
        if (class_exists('GFAPI')) {
            $forms = \GFAPI::get_forms();
            $gravityForms[] = ['label' => __('Select form', 'visualcomposer'), 'value' => 0];

            if ($forms) {
                foreach ($forms as $form) {
                    $gravityForms[] = [
                        'label' => $form['title'] . ' (' . $form['id'] . ')',
                        'value' => $form['id'],
                    ];
                }
            }
        }

        if (empty($gravityForms)) {
            $gravityForms = [
                ['label' => __('No gravity form found', 'visualcomposer'), 'value' => 0],
            ];
        }

        $variables[] = [
            'key' => 'vcvWpGravityForms',
            'value' => $gravityForms,
        ];

        return $variables;
    }

    protected function checkPlugin()
    {
        if (!class_exists('GFAPI')) {
            add_shortcode(
                'gravityform',
                function () {
                    return __('The gravity forms plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
