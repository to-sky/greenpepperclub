<?php

namespace exportImport\exportImport;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\WpFiltersActions;
use VisualComposer\Modules\Settings\Traits\Page;
use VisualComposer\Modules\Settings\Traits\SubMenu;

/**
 * Class ImportPage.
 */
class ImportPage extends Container implements Module
{
    use Page;
    use SubMenu;
    use WpFiltersActions;

    /**
     * @var string
     */
    protected $slug = 'vcv-import';

    /**
     * @var string
     */
    protected $templatePath = 'import';

    /**
     * About constructor.
     */
    public function __construct()
    {
        /** @see \VisualComposer\Modules\Settings\Pages\Settings::addPage */
        $this->wpAddAction(
            'admin_menu',
            'addPage',
            10
        );
    }

    /**
     * Add import page
     */
    protected function addPage()
    {
        $page = [
            'slug' => $this->getSlug(),
            'title' => __('Import', 'visualcomposer'),
            'controller' => $this,
            'capability' => 'edit_posts',
        ];
        $this->addSubmenuPage($page);
    }

    /**
     * Render page.
     *
     * @param $page
     *
     * @return mixed|string
     * @throws \ReflectionException
     */
    public function render($page)
    {
        /**
         * @var $this \VisualComposer\Application|\VisualComposer\Framework\Container
         * @see \VisualComposer\Framework\Container::call
         * @see \VisualComposer\Modules\Settings\Traits\Page::beforeRender
         */
        $this->call('beforeRender');
        /** @var $this Page */
        $args = array_merge(
            method_exists($this, 'getRenderArgs') ? (array)$this->call('getRenderArgs') : [],
            [
                'addon' => 'exportImport',
                'controller' => $this,
                'slug' => $this->getSlug(),
                'path' => $this->getTemplatePath(),
                'page' => $page,
            ]
        );

        return vcaddonview($this->getTemplatePath(), $args);
    }
}
