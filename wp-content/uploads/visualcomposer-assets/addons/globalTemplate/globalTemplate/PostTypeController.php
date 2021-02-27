<?php

namespace globalTemplate\globalTemplate;

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

class PostTypeController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    protected $postType = 'vcv_templates';

    public function __construct()
    {
        $this->addFilter('vcv:frontend:url', 'addTypeToLink');
        $this->addFilter('vcv:helpers:access:editorPostType', 'addPostType');
        $this->wpAddAction('admin_init', 'doRedirect');
        $this->wpAddFilter('bulk_actions-edit-' . $this->postType, 'removePostActions', 10, 1);
        $this->wpAddFilter('post_row_actions', 'updatePostEditBarLinks');
        $this->wpAddFilter('post_row_actions', 'injectPopup');
        $this->wpAddFilter('display_post_states', 'addPostStatus');
        $this->addFilter('vcv:addons:exportImport:allowedPostTypes', 'enableExportTypes');
    }

    /**
     * Add post type support for frontend editor
     *
     * @param $postTypes
     *
     * @return array
     */
    protected function addPostType($postTypes)
    {
        if (!in_array($this->postType, $postTypes)) {
            $postTypes[] = $this->postType;
        }

        return $postTypes;
    }

    /**
     * @param $url
     * @param $payload
     *
     * @return string
     */
    protected function addTypeToLink($url, $payload)
    {
        if ($this->postType === get_post_type($payload['sourceId'])) {
            return add_query_arg(['vcv-editor-type' => $this->postType], $url);
        }

        return $url;
    }

    /**
     * Redirect to frontend editor
     *
     * @param \VisualComposer\Helpers\Request $requestHelper
     */
    protected function doRedirect(Request $requestHelper)
    {
        global $pagenow;
        if (($pagenow === 'post-new.php' || $pagenow === 'post.php')
            && ($requestHelper->input('post_type') === $this->postType
                || get_post_type($requestHelper->input('post')) === $this->postType
            )
            && !$requestHelper->exists('vcv-action')
        ) {
            $attr = '?';
            //redirect from classic editor to frontend editor
            if ($pagenow === 'post.php' && $requestHelper->input('post')) {
                $sourceId = $requestHelper->input('post');
                $attr .= 'post=' . $sourceId . '&action=edit&vcv-source-id=' . $sourceId . '&';
            }

            wp_redirect(
                admin_url(
                    $pagenow . $attr . 'post_type=' . rawurlencode($this->postType)
                    . '&vcv-action=frontend&vcv-editor-type='
                    . rawurlencode($this->postType)
                )
            );
        }
    }

    /**
     * Remove edit action from dropdown
     *
     * @param $actions
     *
     * @return mixed
     */
    protected function removePostActions($actions)
    {
        global $post;

        // @codingStandardsIgnoreLine
        if (isset($post->post_type) && $post->post_type === $this->postType) {
            unset($actions['edit']);
            unset($actions['trash']);
        }

        return $actions;
    }

    /**
     * Update update post edit bar links
     *
     * @param $actions
     * @param $post
     *
     * @return mixed
     */
    protected function updatePostEditBarLinks(
        $actions,
        $post
    ) {
        // @codingStandardsIgnoreLine
        if ($post->post_type === $this->postType) {
            $templateType = get_post_meta($post->ID, '_vcv-type', true);
            unset($actions['inline hide-if-no-js']);
            unset($actions['edit']);
            unset($actions['view']);
            unset($actions['preview']);
            if (!in_array($templateType, ['', 'custom'])) {
                unset($actions['trash']);
            }
            $actions = array_reverse($actions);
        }

        return $actions;
    }

    /**
     * Add popup for hub and predefined templates
     *
     * @param $actions
     * @param $post
     *
     * @return mixed
     */
    protected function injectPopup(
        $actions,
        $post
    ) {

        $templateType = get_post_meta($post->ID, '_vcv-type', true);
        // @codingStandardsIgnoreLine
        if (isset($actions['edit_vc5']) && $post->post_type === $this->postType
            && $templateType
            && !in_array($templateType, ['', 'custom'])
        ) {
            $confirm = __(
                'You\'re about to edit predefined template. The template will be converted to your personal template. You can download a new copy of this predefined template from the Hub.',
                'visualcomposer'
            );
            $actions['edit_vc5'] = preg_replace(
                '/(href=("|\')(.*?)("|\'))/',
                sprintf('$1 onclick="return confirm(this.getAttribute(\'data-vcv-confirm-text\'))" data-vcv-confirm-text="%s"', esc_attr($confirm)),
                $actions['edit_vc5']
            );
        }

        return $actions;
    }

    protected function addPostStatus($postStates, $post)
    {
        // @codingStandardsIgnoreLine
        if ($post->post_type === $this->postType) {
            $sourceId = $post->ID;
            $templateType = get_post_meta($sourceId, '_vcv-type', true);

            switch ($templateType) {
                case 'hub':
                    return ['hub' => __('Hub', 'visualcomposer')];
                case 'predefined':
                    return ['predefined' => __('Predefined', 'visualcomposer')];
                case 'hubHeader':
                    return ['hubHeader' => __('Hub Header', 'visualcomposer')];
                case 'hubFooter':
                    return ['hubFooter' => __('Hub Footer', 'visualcomposer')];
                case 'hubSidebar':
                    return ['hubSidebar' => __('Hub Sidebar', 'visualcomposer')];
                case 'block':
                    return ['block' => __('Hub Block', 'visualcomposer')];
            }
        }

        return $postStates;
    }

    protected function enableExportTypes($postTypes)
    {
        array_push($postTypes, $this->postType);

        return $postTypes;
    }
}
