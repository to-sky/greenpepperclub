<?php

namespace sliderRevolution\sliderRevolution;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class SliderRevolutionController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_WP_SLIDER_REVOLUTION_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/sliderRevolution',
                'getVariables'
            );
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );
            define('VCV_WP_SLIDER_REVOLUTION_CONTROLLER', true);
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
        $revSliders = [];
        if (class_exists('RevSlider')) {
            $slider = new \RevSlider();
            $arrSliders = $slider->getArrSliders();

            $revSliders = [];
            $revSliders[] = ['label' => __('Select slider', 'visualcomposer'), 'value' => 0];

            if ($arrSliders) {
                foreach ($arrSliders as $slider) {
                    $revSliders[] = [
                        'label' => $slider->getTitle() . '(' . $slider->getAlias() . ')',
                        'value' => $slider->getAlias(),
                    ];
                }
            }
        }

        if (empty($revSliders)) {
            $revSliders = [
                ['label' => __('No slider found', 'visualcomposer'), 'value' => 0],
            ];
        }

        $variables[] = [
            'key' => 'vcvWpSliderRevolution',
            'value' => $revSliders,
        ];

        return $variables;
    }


    protected function checkPlugin()
    {
        if (!class_exists('RevSliderFront')) {
            add_shortcode(
                'rev_slider',
                function () {
                    return __('The Slider Revolution plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
