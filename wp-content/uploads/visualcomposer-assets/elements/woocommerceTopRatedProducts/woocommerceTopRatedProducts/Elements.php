<?php

namespace woocommerceTopRatedProducts\woocommerceTopRatedProducts;

use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Framework\Container;
use VisualComposer\Helpers\Traits\EventsFilters;

class Elements extends Container implements Module
{
    use EventsFilters;

    public function __construct()
    {
        /** @see \woocommerceTopRatedProducts\woocommerceTopRatedProducts\Elements::renderEditor */
        $this->addFilter(
            'vcv:ajax:elements:ajaxShortcode:adminNonce',
            'renderEditor'
        );
    }

    /**
     * Add message in case if plugin is not activated
     *
     * @param $response
     *
     * @return array
     */
    protected function renderEditor($response)
    {
        if (strpos($response['shortcodeContent'], '[top_rated_products ') !== false && !class_exists('WooCommerce')) {
            $response['shortcodeContent'] = __('The WooCommerce plugin is not activated', 'visualcomposer');
        }

        return $response;
    }
}