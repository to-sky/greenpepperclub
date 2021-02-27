<?php

namespace wpForms\wpForms;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class WpFormsController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_WP_FORMS_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/wpForms',
                'getVariables'
            );
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );
            define('VCV_WP_FORMS_CONTROLLER', true);
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
        $forms = get_posts('post_type=wpforms&numberposts=-1');

        $wpForms = [];
        $wpForms[] = ['label' => __('Select form', 'visualcomposer'), 'value' => 0];

        if ($forms) {
            foreach ($forms as $form) {
                $wpForms[] = [
                    //@codingStandardsIgnoreLine
                    'label' => $form->post_title . ' (' . $form->ID . ')',
                    'value' => $form->ID,
                ];
            }
        } else {
            $wpForms = [
                ['label' => __('No form found', 'visualcomposer'), 'value' => 0],
            ];
        }

        $variables[] = [
            'key' => 'vcvWpForms',
            'value' => $wpForms,
        ];

        return $variables;
    }

    protected function checkPlugin()
    {
        if (!class_exists('WPForms')) {
            add_shortcode(
                'wpForms',
                function () {
                    return __('The WP Forms plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
