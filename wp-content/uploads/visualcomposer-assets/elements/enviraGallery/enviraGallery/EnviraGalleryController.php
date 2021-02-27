<?php

namespace enviraGallery\enviraGallery;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class EnviraGalleryController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        if (!defined('VCV_WP_ENVIRA_GALLERY_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/enviraGallery',
                'getVariables'
            );
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );

            define('VCV_WP_ENVIRA_GALLERY_CONTROLLER', true);
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
        $galleries = get_posts('post_type=envira&numberposts=-1');

        $enviraGalleries = [];
        $enviraGalleries[] = ['label' => __('Select gallery', 'visualcomposer'), 'value' => 0];

        if ($galleries) {
            foreach ($galleries as $gallery) {
                $enviraGalleries[] = [
                    //@codingStandardsIgnoreLine
                    'label' => $gallery->post_title . ' (' . $gallery->ID . ')',
                    'value' => $gallery->ID,
                ];
            }
        } else {
            $enviraGalleries = [
                ['label' => __('No gallery found', 'visualcomposer'), 'value' => 0],
            ];
        }

        $variables[] = [
            'key' => 'vcvWpEnviraGallery',
            'value' => $enviraGalleries,
        ];

        return $variables;
    }

    protected function checkPlugin()
    {
        if (!(class_exists('Envira_Gallery_Lite') || class_exists('Envira_Gallery'))) {
            add_shortcode(
                'envira-gallery',
                function () {
                    return __('The Envira Gallery plugin is not activated', 'visualcomposer');
                }
            );
        }
    }
}
