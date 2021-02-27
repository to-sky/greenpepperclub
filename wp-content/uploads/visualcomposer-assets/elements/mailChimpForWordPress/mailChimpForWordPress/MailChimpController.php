<?php

namespace mailChimpForWordPress\mailChimpForWordPress;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Frontend;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class MailChimpController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct(Frontend $frontendHelper)
    {
        if (!defined('VCV_MAIL_CHIMP_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/mailChimp',
                'getVariables'
            );
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );

            define('VCV_MAIL_CHIMP_CONTROLLER', true);
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
        if (defined('MC4WP_VERSION')) {
            $forms = get_posts('post_type=mc4wp-form&numberposts=-1');

            $mcForms = [];
            $mcForms[] = ['label' => __('Select form', 'visualcomposer'), 'value' => 0];

            if ($forms) {
                foreach ($forms as $form) {
                    $mcForms[] = [
                        //@codingStandardsIgnoreLine
                        'label' => $form->post_title . ' (' . $form->ID . ')',
                        'value' => $form->ID,
                    ];
                }
            } else {
                $mcForms = [
                    ['label' => __('No form found', 'visualcomposer'), 'value' => 0],
                ];
            }

            $variables[] = [
                'key' => 'vcvWpMailChimp',
                'value' => $mcForms,
            ];
        }
        return $variables;
    }

    protected function checkPlugin()
    {
        if (!defined('MC4WP_VERSION')) {
            add_shortcode(
                'mc4wp_form',
                function () {
                    return __('The MailChimp plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
