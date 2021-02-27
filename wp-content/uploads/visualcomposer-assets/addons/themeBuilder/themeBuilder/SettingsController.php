<?php

namespace themeBuilder\themeBuilder;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Options;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;
use VisualComposer\Modules\Settings\Traits\Fields;
use VisualComposer\Modules\Settings\Traits\Page;
use VisualComposer\Modules\Settings\Traits\SubMenu;

/**
 * Class SettingsController
 * @package themeBuilder\themeBuilder
 */
class SettingsController extends Container implements Module
{
    use WpFiltersActions;
    use EventsFilters;
    use Fields;
    use Page;
    use SubMenu;

    /**
     * @var string
     */
    protected $slug = 'vcv-custom-page-templates';

    /*
     * Settings template to render
     * @var string
     */
    /**
     * @var string
     */
    protected $templatePath = 'settings/pages/index';

    /**
     * SettingsController constructor.
     */
    public function __construct()
    {
        $this->optionGroup = 'vcv-custom-page-templates';
        $this->optionSlug = 'vcv-custom-page-templates';

        $this->wpAddAction(
            'admin_init',
            'buildPage',
            40
        );
        $this->wpAddAction(
            'in_admin_header',
            'enqueueCss'
        );

        $this->wpAddAction(
            'admin_menu',
            'addPage'
        );

        $this->addFilter('vcv:settings:tabs', 'addSettingsTab', 3);
        $this->wpAddFilter('submenu_file', 'subMenuHighlight');
    }

    /**
     * @param $tabs
     *
     * @return mixed
     */
    protected function addSettingsTab($tabs)
    {
        $tabs['vcv-custom-page-templates'] = [
            'name' => __('Custom Pages', 'visualcomposer'),
        ];

        return $tabs;
    }

    /**
     * Setup the menu parent vcv-settings
     *
     * @param $submenuFile
     *
     * @return string
     */
    protected function subMenuHighlight($submenuFile)
    {
        $screen = get_current_screen();
        if (strpos($screen->id, $this->slug)) {
            $submenuFile = 'vcv-settings';
        }

        return $submenuFile;
    }

    /**
     * Prints inline styles to hide menu item immediately
     */
    protected function enqueueCss()
    {
        $urlHelper = vchelper('Url');
        wp_register_style(
            'vcv:wpUpdate:style',
            $urlHelper->to('public/dist/wpUpdate.bundle.css'),
            [],
            VCV_VERSION
        );
        wp_enqueue_style('vcv:wpUpdate:style');

        echo '<style id="vcv-addons-custom-page-templates-style" type="text/css">';
        $fileHelper = vchelper('File');
        echo $fileHelper->getContents(__DIR__ . '/../public/dist/element.bundle.css');
        echo '</style>';
    }

    /**
     * Add section and fields in settings page
     */
    protected function buildPage()
    {
        $sectionCallback = function () {
            echo sprintf(
                '<p class="description">%s</p>',
                esc_html__(
                    'Extend website builder with additional functionality to create and manage layouts for pages like 404.',
                    'visualcomposer'
                )
            );
        };
        $this->addSection(
            [
                'title' => __('Custom Page Templates', 'visualcomposer'),
                'page' => $this->optionGroup,
                'callback' => $sectionCallback,
            ]
        );

        // 404 page dropdown
        $dropdownFieldCallback = function () {
            echo $this->call('render404Dropdown');
        };

        // 404 page fields
        $this->addField(
            [
                'page' => $this->optionGroup,
                'title' => __('Select your 404 page', 'visualcomposer'),
                'name' => 'custom-page-templates-404-page',
                'id' => 'vcv-custom-page-templates-404-page',
                'fieldCallback' => $dropdownFieldCallback,
            ]
        );
    }

    /**
     * Render dropdown for 404 page
     *
     * @param \VisualComposer\Helpers\Options $optionsHelper
     *
     * @return mixed|string
     */
    protected function render404Dropdown(Options $optionsHelper)
    {
        $customNotFoundPage = $optionsHelper->get('custom-page-templates-404-page', '');
        $selected = '';
        if (!empty($customNotFoundPage)) {
            $selected = (int)$customNotFoundPage;
            $selected = apply_filters('wpml_object_id', $selected, 'post', true); // if translated
            $post = get_post($selected);
            // @codingStandardsIgnoreLine
            if (!$post || $post->post_status !== 'publish') {
                $selected = '';
            }
        }

        $pages = get_pages();
        $available = [];
        foreach ($pages as $page) {
            $available[] = [
                'id' => $page->ID,
                // @codingStandardsIgnoreLine
                'title' => $page->post_title . ' (' . $page->ID . ')',
            ];
        }

        return vcview(
            'settings/fields/dropdown',
            [
                'name' => 'vcv-custom-page-templates-404-page',
                'value' => $selected,
                'enabledOptions' => $available,
                'emptyTitle' => __('Use theme default', 'visualcomposer'),
            ]
        );
    }

    /**
     * Create settings page
     * @throws \Exception
     */
    protected function addPage()
    {
        $page = [
            'slug' => $this->getSlug(),
            'title' => __('Custom Pages', 'visualcomposer'),
            'layout' => 'settings-standalone-with-tabs',
            'showTab' => false,
            'controller' => $this,
        ];
        $this->addSubmenuPage($page);
    }
}
