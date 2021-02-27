<?php

namespace maintenanceMode\maintenanceMode;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Hub\Addons;
use VisualComposer\Helpers\Options;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;
use VisualComposer\Modules\Settings\Traits\Fields;
use VisualComposer\Modules\Settings\Traits\Page;
use VisualComposer\Modules\Settings\Traits\SubMenu;

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
    protected $slug = 'vcv-maintenance-mode';

    /*
     * @var string
     */
    protected $templatePath = 'settings/pages/index';

    public function __construct()
    {
        $this->optionGroup = 'vcv-maintenance-mode';
        $this->optionSlug = 'vcv-maintenanceMode';

        $this->wpAddAction(
            'admin_init',
            'buildPage',
            40
        );
        $this->addEvent(
            'vcv:settings:page:vcv-maintenance-mode:beforeRender',
            'enqueueJs'
        );
        $this->wpAddFilter('submenu_file', 'subMenuHighlight');
        $this->wpAddAction(
            'in_admin_header',
            'enqueueCss'
        );

        $this->wpAddAction(
            'admin_menu',
            'addPage'
        );

        $this->addFilter('vcv:settings:tabs', 'addSettingsTab', 3);
    }

    /**
     * @param $tabs
     *
     * @return mixed
     */
    protected function addSettingsTab($tabs)
    {
        $tabs['vcv-maintenance-mode'] = [
            'name' => __('Maintenance Mode', 'visualcomposer'),
        ];

        return $tabs;
    }

    protected function subMenuHighlight($submenuFile)
    {
        $screen = get_current_screen();
        if (strpos($screen->id, $this->slug)) {
            $submenuFile = 'vcv-settings';
        }

        return $submenuFile;
    }

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

        echo '<style id="vcv-addons-maintenance-mode-settings-style" type="text/css">';
        $fileHelper = vchelper('File');
        echo $fileHelper->getContents(__DIR__ . '/../public/dist/element.bundle.css');
        echo '</style>';
    }

    protected function enqueueJs(Addons $addonsHelper)
    {
        $addonUrl = $addonsHelper->getAddonUrl('maintenanceMode');
        wp_enqueue_script(
            'vcv-addons-maintenance-mode-settings',
            $addonUrl . '/public/dist/element.bundle.js',
            ['jquery'],
            VCV_VERSION
        );
        $urlHelper = vchelper('Url');
        wp_register_script(
            'vcv:wpUpdate:script',
            $urlHelper->to('public/dist/wpUpdate.bundle.js'),
            ['vcv:assets:vendor:script'],
            VCV_VERSION
        );
        wp_enqueue_script('vcv:wpUpdate:script');
    }

    protected function buildPage()
    {
        $sectionCallback = function () {
            echo sprintf(
                '<p class="description">%s</p>',
                esc_html__(
                    'Enable maintenance mode and select the page that will be displayed to the website visitors. Users with access to the admin panel will still be able to preview the website and make changes.',
                    'visualcomposer'
                )
            );
        };
        $this->addSection(
            [
                'title' => __('Maintenance Mode', 'visualcomposer'),
                'page' => $this->optionGroup,
                'callback' => $sectionCallback,
            ]
        );

        $toggleFieldCallback = function () {
            echo $this->call('renderToggle');
        };

        $this->addField(
            [
                'page' => $this->optionGroup,
                'title' => __('Enable', 'visualcomposer'),
                'name' => 'settings-maintenanceMode-enabled',
                'id' => 'vcv-maintenance-mode-enable',
                'fieldCallback' => $toggleFieldCallback,
            ]
        );

        $dropdownFieldCallback = function () {
            echo $this->call('renderDropdown');
        };

        $this->addField(
            [
                'page' => $this->optionGroup,
                'title' => '', // __('Select your maintenance page', 'visualcomposer'),
                'name' => 'settings-maintenanceMode-page',
                'id' => 'vcv-maintenance-mode-page',
                'fieldCallback' => $dropdownFieldCallback,
            ]
        );
    }

    protected function renderToggle(Options $optionsHelper)
    {
        return vcview(
            'settings/fields/toggle',
            [
                'name' => 'vcv-settings-maintenanceMode-enabled',
                'value' => 'maintenanceMode-enabled',
                'isEnabled' => $optionsHelper->get('settings-maintenanceMode-enabled', ''),
            ]
        );
    }

    protected function renderDropdown(Options $optionsHelper)
    {
        $sourceId = (int)$optionsHelper->get('settings-maintenanceMode-page', '');
        $selected = '';
        if ($sourceId) {
            $selected = apply_filters('wpml_object_id', $sourceId, 'post', true); // if translated
            $post = get_post($selected);
            // Reset in case if post not published/removed
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
                'name' => 'vcv-settings-maintenanceMode-page',
                'value' => $selected,
                'enabledOptions' => $available,
            ]
        );
    }

    /**
     * @throws \Exception
     */
    protected function addPage()
    {
        $page = [
            'slug' => $this->getSlug(),
            'title' => __('Maintenance Mode', 'visualcomposer'),
            'layout' => 'settings-standalone-with-tabs',
            'showTab' => false,
            'controller' => $this,
        ];
        $this->addSubmenuPage($page);
    }
}
