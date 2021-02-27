<?php

namespace dynamicFields\dynamicFields;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Request;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

/**
 * Class DynamicFieldController
 * @package dynamicFields\dynamicFields
 */
class DynamicFieldController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    /**
     * DynamicFieldController constructor.
     */
    public function __construct()
    {
        // Use WordPress 5.1 pre_render_block as it is more performance efficient
        if (version_compare(get_bloginfo('version'), '5.1', '>=')) {
            $this->wpAddFilter('pre_render_block', 'renderDynamicBlock');
        } else {
            $this->wpAddFilter('render_block', 'renderDynamicBlock');
        }

        if (version_compare(get_bloginfo('version'), '5.0', '>=')) {
            $this->addFilter(
                'vcv:ajax:getData:adminNonce',
                'getData',
                11
            );
        }

        $this->addFilter(
            'vcv:dataAjax:getData vcv:ajax:getDynamicPost:adminNonce',
            'forceFields',
            -1
        );

        \VcvEnv::set('VCV_JS_FT_DYNAMIC_FIELDS', true);
    }

    /**
     * Force field display in our custom posts
     *
     * @param $response
     * @param $payload
     * @param \VisualComposer\Helpers\Request $requestHelper
     *
     * @return mixed
     */
    protected function forceFields($response, $payload, Request $requestHelper)
    {
        $post = get_post($payload['sourceId']);
        $postType = get_post_type($post);
        $customPost = $requestHelper->input('vcv-custom-post');
        if (in_array($postType, ['vcv_headers', 'vcv_footers', 'vcv_sidebars', 'vcv_templates'])
            && empty($customPost)
            && empty($payload['vcv-custom-post'])) {
            $response['forceAddField'] = true;
        }

        return $response;
    }

    /**
     * @param $atts
     * @param $content
     *
     * @return array|null
     */
    protected function parseDynamicField($atts, $content)
    {
        if (array_key_exists('value', $atts)) {
            $content = vcfilter(
                'vcv:dynamic:value:' . $atts['value'],
                $content,
                [
                    'atts' => $atts,
                ]
            );
        }

        return $content;
    }

    protected function renderDynamicBlock($response, $block)
    {
        if (isset($block) && is_array($block) && array_key_exists('blockName', $block)
            && strpos(
                $block['blockName'],
                'vcv-gutenberg-blocks/dynamic-field-block'
            ) !== false) {
            if (isset($block['attrs']) && isset($block['attrs']['currentValue'])
                && $block['attrs']['currentValue'] === '0'
                && empty($block['innerContent'])) {
                $block['innerContent'][] = '0';
            }

            // We are inside dynamic-field block!
            if (array_key_exists('innerContent', $block) && !empty($block['innerContent'])) {
                $response = '';
                $count = count($block['innerContent']);
                $index = 0;
                foreach ($block['innerContent'] as $chunk) {
                    if (is_string($chunk) && (!empty($chunk) || $chunk === '0')) {
                        $response .= $this->call(
                            'parseDynamicField',
                            [
                                'atts' => $block['attrs'] ? $block['attrs'] : [],
                                'content' => $chunk,
                            ]
                        );
                    } elseif (isset($block['innerBlocks'][ $index ])) {
                        $content = render_block($block['innerBlocks'][ $index++ ]);
                        $response .= $this->call(
                            'parseDynamicField',
                            [
                                'atts' => $block['attrs'],
                                'content' => $content,
                            ]
                        );
                    }
                }
            }
        }

        return $response;
    }

    /**
     * @param $response
     * @param $payload
     *
     * @return
     * @throws \ReflectionException
     */
    protected function getData(
        $response,
        $payload
    ) {
        if (isset($response['postData']) && isset($response['post_content']) && has_blocks($response['post_content'])) {
            $blocks = parse_blocks($response['post_content']);

            $blockResponse = $this->call(
                'parseBlockData',
                [
                    'response' => [],
                    'blocks' => $blocks,
                ]
            );

            if (is_array($blockResponse) && !empty($blockResponse)) {
                $response['postFields']['dynamicFieldCustomPostData'] = $blockResponse;
            }
        }

        return $response;
    }

    /**
     * @param $response
     * @param $blocks
     *
     * @return array
     * @throws \ReflectionException
     */
    protected function parseBlockData($response, $blocks)
    {
        foreach ($blocks as $block) {
            if (isset($block) && is_array($block) && array_key_exists('blockName', $block)
                && strpos(
                    $block['blockName'],
                    'vcv-gutenberg-blocks/dynamic-field-block'
                ) !== false) {
                if (isset($block['attrs']) && isset($block['attrs']['currentValue'])
                    && $block['attrs']['currentValue'] === '0'
                    && empty($block['innerContent'])) {
                    $block['innerContent'][] = '0';
                }

                if (array_key_exists('innerContent', $block) && !empty($block['innerContent'])) {
                    $index = 0;
                    if (isset($block['attrs']['sourceId'])) {
                        $sourceId = $block['attrs']['sourceId'];

                        $response[ $sourceId ] = vcfilter(
                            'vcv:ajax:getDynamicPost:adminNonce',
                            '',
                            ['sourceId' => $sourceId, 'vcv-custom-post' => 1]
                        );
                    }

                    foreach ($block['innerContent'] as $chunk) {
                        if (is_string($chunk) && (!empty($chunk) || $chunk === '0')) {
                            $response = $this->call(
                                'parseBlockData',
                                [
                                    'response' => $response,
                                    'blocks' => parse_blocks($chunk),
                                ]
                            );
                        } elseif (isset($block['innerBlocks'][ $index++ ])) {
                            $response = $this->call(
                                'parseBlockData',
                                [
                                    'response' => $response,
                                    'blocks' => $block['innerBlocks'],
                                ]
                            );
                        }
                    }
                }
            }
        }

        return $response;
    }
}
