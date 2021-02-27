<?php

namespace calderaForms\calderaForms;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class CalderaFormsController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_CALDERA_FORMS_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/calderaForms',
                'getVariables'
            );
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );
            define('VCV_CALDERA_FORMS_CONTROLLER', true);
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
        $forms = false;
        if (class_exists('Caldera_Forms_Forms')) {
            $forms = \Caldera_Forms_Forms::get_forms(true);
        }

        $calderaForms = [];
        $calderaForms[] = ['label' => __('Select form', 'visualcomposer'), 'value' => 0];

        if ($forms) {
            foreach ($forms as $form) {
                $calderaForms[] = [
                    'label' => $form['name'] . ' (' . $form['ID'] . ')',
                    'value' => $form['ID'],
                ];
            }
        } else {
            $calderaForms = [
                ['label' => __('No form found', 'visualcomposer'), 'value' => 0],
            ];
        }

        $variables[] = [
            'key' => 'vcvCalderaForms',
            'value' => $calderaForms,
        ];

        return $variables;
    }

    protected function checkPlugin()
    {
        if (!class_exists('Caldera_Forms_Forms')) {
            add_shortcode(
                'caldera_form',
                function () {
                    return __('The Caldera Forms plugin is not activated', 'visualcomposer');
                }
            );
            add_shortcode(
                'caldera_form_modal',
                function () {
                    return __('The Caldera Forms plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
