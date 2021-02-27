<?php

namespace essentialGrid\essentialGrid;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class EssentialGridController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_WP_ESSENTIAL_GRID_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/essentialGrid',
                'getVariables'
            );
            $this->wpAddAction(
                'plugins_loaded',
                'checkPlugin',
                16
            );
            define('VCV_WP_ESSENTIAL_GRID_CONTROLLER', true);
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
        if (class_exists('Essential_Grid')) {
            $arrGrids = \Essential_Grid::get_essential_grids();
            $essentialGrids = [];
            $essentialGrids[] = ['label' => __('Select grid', 'visualcomposer'), 'value' => 0];

            if (!empty($arrGrids)) {
                foreach ($arrGrids as $grid) {
                    $essentialGrids[] = [
                        'label' => $grid->name,
                        'value' => $grid->handle,
                    ];
                }
            } else {
                $essentialGrids = [
                    ['label' => __('No grid found', 'visualcomposer'), 'value' => 0],
                ];
            }
        } else {
            $essentialGrids = [
                ['label' => __('No grid found', 'visualcomposer'), 'value' => 0],
            ];
        }

        $variables[] = [
            'key' => 'vcvWpEssentialGrid',
            'value' => $essentialGrids,
        ];

        return $variables;
    }

    protected function checkPlugin()
    {
        if (!class_exists('Essential_Grid')) {
            add_shortcode(
                'ess_grid',
                function () {
                    return __('The Essential Grid plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
