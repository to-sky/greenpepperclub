<?php

namespace extendedEditForm\extendedEditForm;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Assets;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Url;

class BundleEnqueueController extends Container implements Module
{
    use EventsFilters;

    public function __construct()
    {
        $this->addFilter(
            'vcv:editors:frontend:render',
            function ($response) {
                /** @see \VisualComposer\Modules\Editors\Frontend\BundleController::addFooterBundleScript */
                $this->addFilter('vcv:frontend:footer:extraOutput', 'addFooterBundleScript');

                return $response;
            },
            -2
        );
        /** @see \VisualComposer\Helpers\AssetsShared::assetsLibraries */
        $this->addFilter('vcv:helper:assetsShared:getLibraries', 'assetsLibraries');
    }

    protected function addFooterBundleScript($response, $payload, Url $urlHelper, Assets $assetsHelper)
    {
        // Add JS
        if (vcvenv('VCV_ENV_DEV_ADDONS')) {
            $response = array_merge(
                (array)$response,
                [
                    sprintf(
                        '<script id="vcv-script-extended-edit-form-fe-bundle" type="text/javascript" src="%s"></script>',
                        $urlHelper->to(
                            'devAddons/extendedEditForm/public/dist/element.bundle.js?v=' . VCV_VERSION
                        )
                    ),
                ]
            );
        } else {
            $response = array_merge(
                (array)$response,
                [
                    sprintf(
                        '<script id="vcv-script-extended-edit-form-fe-bundle" type="text/javascript" src="%s"></script>',
                        $assetsHelper->getAssetUrl(
                            '/addons/extendedEditForm/public/dist/element.bundle.js?v=' . VCV_VERSION
                        )
                    ),
                ]
            );
        }

        return $response;
    }

    /**
     * @param $assetsLibraries
     *
     * @param \VisualComposer\Helpers\Assets $assetsHelper
     *
     * @param \VisualComposer\Helpers\Url $urlHelper
     *
     * @return mixed
     */
    protected function assetsLibraries($assetsLibraries, Assets $assetsHelper, Url $urlHelper)
    {
        if (vcvenv('VCV_ENV_DEV_ADDONS')) {
            $assetsLibraries['vanillaTilt'] = [
                'dependencies' => [],
                'jsBundle' => add_query_arg(
                    'v',
                    VCV_VERSION,
                    $urlHelper->to(
                        '/devAddons/extendedEditForm/extendedEditForm/public/dist/vanillaTilt.min.js'
                    )
                ),
                'cssBundle' => '',
            ];
            $assetsLibraries['backgroundAnimation'] = [
                'dependencies' => ['anime'],
                'jsBundle' => add_query_arg(
                    'v',
                    VCV_VERSION,
                    $urlHelper->to(
                        '/devAddons/extendedEditForm/extendedEditForm/public/dist/backgroundAnimation.min.js'
                    )
                ),
                'cssBundle' => '',
            ];
            $assetsLibraries['anime'] = [
                'dependencies' => [],
                'jsBundle' => add_query_arg(
                    'v',
                    VCV_VERSION,
                    $urlHelper->to(
                        '/devAddons/extendedEditForm/extendedEditForm/public/dist/anime.min.js'
                    )
                ),
                'cssBundle' => '',
            ];
        } else {
            $assetsLibraries['vanillaTilt'] = [
                'dependencies' => [],
                'jsBundle' => add_query_arg(
                    'v',
                    VCV_VERSION,
                    $assetsHelper->getAssetUrl(
                        '/addons/extendedEditForm/extendedEditForm/public/dist/vanillaTilt.min.js'
                    )
                ),
                'cssBundle' => '',
            ];
            $assetsLibraries['backgroundAnimation'] = [
                'dependencies' => ['anime'],
                'jsBundle' => add_query_arg(
                    'v',
                    VCV_VERSION,
                    $assetsHelper->getAssetUrl(
                        '/addons/extendedEditForm/extendedEditForm/public/dist/backgroundAnimation.min.js'
                    )
                ),
                'cssBundle' => '',
            ];
            $assetsLibraries['anime'] = [
                'dependencies' => [],
                'jsBundle' => add_query_arg(
                    'v',
                    VCV_VERSION,
                    $assetsHelper->getAssetUrl(
                        '/addons/extendedEditForm/extendedEditForm/public/dist/anime.min.js'
                    )
                ),
                'cssBundle' => '',
            ];
        }

        return $assetsLibraries;
    }
}
