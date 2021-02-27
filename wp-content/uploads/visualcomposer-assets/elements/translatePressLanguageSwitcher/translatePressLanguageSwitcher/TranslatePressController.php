<?php

namespace translatepressLanguageSwitcher\translatepressLanguageSwitcher;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}
use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class TranslatePressController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_TP_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/translatepressLanguageSwitcher',
                'getVariables'
            );
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );
            define('VCV_TP_CONTROLLER', true);
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
        // Language Switcher display options
        $vcLsOptions = [];
        if (class_exists('TRP_Translate_Press')) {
            $trp = \TRP_Translate_Press::get_trp_instance();
            /* @var $settings \TRP_Settings */
            $trpSettings = $trp->get_component('settings');
            $lsOptions = $trpSettings->get_language_switcher_options();

            $vcLsOptions[] = ['label' => __('Default Shortcode Setting', 'visualcomposer'), 'value' => 0];

            foreach ($lsOptions as $lsKey => $lsOption) {
                $vcLsOptions[] = [
                    'label' => $lsOption['label'],
                    'value' => $lsKey,
                ];
            }
        } else {
            $vcLsOptions[] = [
                'label' => __('TranslatePress plugin is not activated', 'visualcomposer'),
                'value' => 0,
            ];
        }

        $variables[] = [
            'key' => 'vcvTpLs',
            'value' => $vcLsOptions,
        ];

        return $variables;
    }

    protected function checkPlugin()
    {
        if (!class_exists('TRP_Translate_Press')) {
            add_shortcode(
                'language-switcher',
                function () {
                    return __('TranslatePress plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
