<?php

namespace themeEditor\themeEditor;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}
require_once('PostTypeController.php');

use VisualComposer\Framework\Illuminate\Support\Module;

class HeaderController extends PostTypeController implements Module
{
    /**
     * @var string
     */
    protected $postType = 'vcv_headers';

    protected $postNameSlug = 'Header';

    public function __construct()
    {
        $this->postNameSingular = __('Header', 'visualcomposer');
        $this->postNamePlural = __('Headers', 'visualcomposer');
        parent::__construct();

        $this->wpAddAction('get_header', 'getHeader');
    }

    /**
     * @param $name
     *
     * To replace the header
     *
     * @param \themeEditor\themeEditor\LayoutController $layoutController
     */
    protected function getHeader($name, LayoutController $layoutController)
    {
        $templateData = $layoutController->getTemplatePartId('header');
        $sourceId = $templateData['sourceId'];

        if (!$templateData['replaceTemplate']) {
            return;
        }

        echo vcaddonview(
            'layouts/vcv-custom-header',
            [
                'addon' => 'themeEditor',
                'sourceId' => $sourceId,
                'part' => __('Header', 'visualcomposer'),
            ]
        );

        $templates = [];
        if ($name) {
            $templates[] = 'header-' . $name . '.php';
        }
        $templates[] = 'header.php';

        remove_all_actions('wp_head'); // skip multiple execution
        $this->extractTemplate($templates);
    }
}
