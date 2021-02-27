<?php

namespace contactForm7\contactForm7;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class ContactForm7Controller extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_WP_CF7_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/contactForm7',
                'getVariables'
            );
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );
            define('VCV_WP_CF7_CONTROLLER', true);
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
        $cf = get_posts('post_type=wpcf7_contact_form&numberposts=-1');

        $contactForms = [];
        $contactForms[] = ['label' => __('Select source', 'visualcomposer'), 'value' => 0];

        if ($cf) {
            foreach ($cf as $cform) {
                $contactForms[] = [
                    //@codingStandardsIgnoreLine
                    'label' => $cform->post_title . '(' . $cform->ID . ')',
                    'value' => $cform->ID,
                ];
            }
        } else {
            $contactForms = [
                ['label' => __('No contact forms found', 'visualcomposer'), 'value' => 0],
            ];
        }

        $variables[] = [
            'key' => 'vcvWpCf7Forms',
            'value' => $contactForms,
        ];

        return $variables;
    }

    protected function checkPlugin()
    {
        if (!defined('WPCF7_VERSION')) {
            add_shortcode(
                'contact-form-7',
                function () {
                    return __('The Contact Form 7 plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
