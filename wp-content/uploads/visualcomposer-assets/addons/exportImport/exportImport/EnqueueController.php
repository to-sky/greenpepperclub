<?php

namespace exportImport\exportImport;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Assets;
use VisualComposer\Helpers\Request;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;
use VisualComposer\Helpers\Url;

class EnqueueController extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;

    protected $importPage;

    public function __construct(Request $requestHelper)
    {
        $this->importPage = vcapp('exportImport\exportImport\ImportPage');

        if (in_array($this->importPage->getSlug(), [$requestHelper->input('page'), $requestHelper->input('import')])
            && $requestHelper->input('step') === '1') {
            $this->wpAddAction('admin_print_scripts', 'adminHead', 0);
            $this->wpAddAction('admin_enqueue_scripts', 'enqueueAssets', 10);
            $this->addFilter('vcv:editors:internationalization:printLocalizations', '__return_true');
        }
    }

    /**
     * @param \VisualComposer\Helpers\Url $urlHelper
     * @param \VisualComposer\Helpers\Assets $assetsHelper
     */
    protected function enqueueAssets(Url $urlHelper, Assets $assetsHelper)
    {
        wp_deregister_script('vcv:settings:script');
        wp_enqueue_script(
            'vcv:addon:exportImport:scripts:importProgress:vendor',
            $urlHelper->to('public/dist/vendor.bundle.js'),
            [],
            VCV_VERSION,
            true
        );
        wp_enqueue_script(
            'vcv:addon:exportImport:scripts:importProgress:base',
            $urlHelper->to('public/dist/wpbase.bundle.js'),
            [],
            VCV_VERSION,
            true
        );
        if (!vcvenv('VCV_ENV_DEV_ADDONS')) {
            wp_enqueue_script(
                'vcv:addon:exportImport:scripts:importProgress',
                $assetsHelper->getAssetUrl('/addons/exportImport/public/dist/addon.bundle.js'),
                [],
                VCV_VERSION,
                true
            );
        } else {
            wp_enqueue_script(
                'vcv:addon:exportImport:scripts:importProgress',
                $urlHelper->to('devAddons/exportImport/public/dist/addon.bundle.js'),
                [],
                VCV_VERSION,
                true
            );
        }
    }

    protected function adminHead(Url $urlHelper)
    {
        echo '<script>';
        echo 'window.vcvAdminAjaxUrl = "' . $urlHelper->adminAjax() . '";';
        echo 'window.vcvBackToImportLink = "' . esc_js(admin_url('admin.php?page=' . rawurlencode($this->importPage->getSlug()))) . '";';
        echo '</script>';
    }
}
