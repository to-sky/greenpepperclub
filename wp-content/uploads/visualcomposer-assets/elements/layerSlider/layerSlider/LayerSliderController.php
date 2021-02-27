<?php

namespace layerSlider\layerSlider;

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

class LayerSliderController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct(Frontend $frontendHelper)
    {
        if (!defined('VCV_WP_LAYER_SLIDER_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/layerSlider',
                'getVariables'
            );
            $this->wpAddAction(
                'plugins_loaded',
                'checkPlugin',
                16
            );

            if ($frontendHelper->isPageEditable()) {
                // TODO: CHECK IF WORKS
                $this->wpAddFilter('layerslider_slider_init', 'setId');
                $this->wpAddFilter('layerslider_slider_markup', 'setId');
            }

            define('VCV_WP_LAYER_SLIDER_CONTROLLER', true);
        }
    }

    /**
     * @param $output
     *
     * @return string
     */
    protected function setId($output)
    {
        return preg_replace('/(layerslider_\d+)/', '$1_' . $_SERVER['REQUEST_TIME'], $output);
    }

    /**
     * @param $variables
     * @param $payload
     *
     * @return array
     */
    protected function getVariables($variables, $payload)
    {
        if (defined('LS_ROOT_PATH')) {
            include_once LS_ROOT_PATH . '/classes/class.ls.sliders.php';
            $layerSliderData = \LS_Sliders::find(
                [
                    'limit' => 999,
                    'order' => 'ASC',
                ]
            );
            $layerSlider = [];
            $layerSlider[] = ['label' => __('Select source', 'visualcomposer'), 'value' => 0];
            if (!empty($layerSliderData)) {
                // Fill array with Name=>Value(ID)
                foreach ($layerSliderData as $key => $value) {
                    if (is_array($value)) {
                        $layerSlider[] = [
                            'label' => $value['name'],
                            'value' => $value['id'],
                        ];
                    }
                }
            } else {
                $layerSlider = [
                    ['label' => __('No layer slider found', 'visualcomposer'), 'value' => 0],
                ];
            }
        } else {
            $layerSlider = [
                ['label' => __('No layer slider found', 'visualcomposer'), 'value' => 0],
            ];
        }
        $variables[] = [
            'key' => 'vcvWpLayerSlider',
            'value' => $layerSlider,
        ];

        return $variables;
    }

    protected function checkPlugin()
    {
        if (!defined('LS_ROOT_PATH')) {
            add_shortcode(
                'layerslider',
                function () {
                    return __('The Layer Slider plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
