<?php

namespace cartIconWithCounter\cartIconWithCounter;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Nonce;
use VisualComposer\Helpers\Url;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class Controller extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    protected $items;

    public function __construct()
    {
        if (!defined('VCV_CARTICONWITHCOUNTER_CONTROLLER')) {
            $this->addFilter(
                'vcv:frontView:variables vcv:editor:variables vcv:editor:variables/cartIconWithCounter',
                'getVariables'
            );
            $this->addFilter(
                'vcv:ajax:element:cartIconWithCounter:wooCartCount:nonce',
                'getWooCartCount'
            );
            define('VCV_CARTICONWITHCOUNTER_CONTROLLER', true);
        }
    }

    protected function getWooCartCount($response, $payload)
    {
        $count = -1;
        if (function_exists('WC')) {
            $count = WC()->cart->get_cart_contents_count();
        }
        $response = [
            'status' => true,
            'count' => $count,
        ];

        return $response;
    }

    /**
     * @param $variables
     * @param $payload
     *
     * @param \VisualComposer\Helpers\Url $urlHelper
     * @param \VisualComposer\Helpers\Nonce $nonceHelper
     *
     * @return array
     */
    protected function getVariables($variables, $payload, Url $urlHelper, Nonce $nonceHelper)
    {
        if (!is_array($variables)) {
            $variables = [];
        }

        $url = '';
        if (function_exists('wc_get_cart_url')) {
            $url = wc_get_cart_url();
        }

        $variables[] = [
            'key' => 'VCV_WP_CARTICONWITHCOUNTER_CART_URL',
            'type' => 'constant',
            'value' => $url,
        ];

        $publicAjaxUrl = $urlHelper->ajax(
            [
                'vcv-action' => 'element:cartIconWithCounter:wooCartCount:nonce',
                'vcv-late-request' => 1,
            ]
        );

        $variables[] = [
            'key' => 'VCV_WP_CARTICONWITHCOUNTER_AJAX_URL',
            'type' => 'constant',
            'value' => $publicAjaxUrl,
        ];

        $variables[] = [
            'key' => 'VCV_WP_CARTICONWITHCOUNTER_USER_NONCE',
            'type' => 'constant',
            'value' => $nonceHelper->user(),
        ];

        return $variables;
    }
}
