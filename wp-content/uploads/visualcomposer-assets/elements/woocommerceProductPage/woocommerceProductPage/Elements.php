<?php

namespace woocommerceProductPage\woocommerceProductPage;

use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Framework\Container;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class Elements extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    public function __construct()
    {
        /** @see \woocommerceProductPage\woocommerceProductPage\Elements::renderEditor */
        $this->addFilter(
            'vcv:ajax:elements:ajaxShortcode:adminNonce',
            'renderEditor'
        );
        $this->wpAddFilter('wc_get_template_part', 'preventInfiniteLoop', 10, 3);
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
        if (strpos($response['shortcodeContent'], '[product_page ') !== false && !class_exists('WooCommerce')) {
            $response['shortcodeContent'] = __('The WooCommerce plugin is not activated', 'visualcomposer');
        }

        return $response;
    }

    /**
     * Prevent infinite loop in single product
     *
     * @param $template
     *
     * @return string
     */
    protected function preventInfiniteLoop($template, $slug, $name)
    {
        if (did_action('woocommerce_single_product_summary') && $name === 'single-product') {
            $pageContent = get_post_meta(get_the_ID(), VCV_PREFIX . 'pageContent', true);
            $pageContent = json_decode(rawurldecode($pageContent), true);

            foreach ($pageContent['elements'] as $item) {
                if ($item['tag'] === 'woocommerceProductPage') {
                    $template = '';
                    break;
                }
            }
        }

        return $template;
    }
}
