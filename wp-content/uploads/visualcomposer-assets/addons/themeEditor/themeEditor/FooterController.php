<?php

namespace themeEditor\themeEditor;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}
require_once('PostTypeController.php');

use VisualComposer\Framework\Illuminate\Support\Module;

class FooterController extends PostTypeController implements Module
{
    /**
     * @var string
     */
    protected $postType = 'vcv_footers';

    protected $postNameSlug = 'Footer';

    public function __construct()
    {
        $this->postNameSingular = __('Footer', 'visualcomposer');
        $this->postNamePlural = __('Footers', 'visualcomposer');
        parent::__construct();

        $this->wpAddAction('get_footer', 'getFooter');
    }

    /**
     * @param $name
     *
     * To replace the footer
     *
     * @param \themeEditor\themeEditor\LayoutController $layoutController
     *
     */
    protected function getFooter($name, LayoutController $layoutController)
    {
        $templateData = $layoutController->getTemplatePartId('footer');
        $sourceId = $templateData['sourceId'];

        if (!$templateData['replaceTemplate']) {
            return;
        }

        echo vcaddonview(
            'layouts/vcv-custom-footer',
            [
                'addon' => 'themeEditor',
                'sourceId' => $sourceId,
                'part' => __('Footer', 'visualcomposer'),
            ]
        );

        $templates = [];
        if ($name) {
            $templates[] = 'footer-' . $name . '.php';
        }
        $templates[] = 'footer.php';

        $this->extractTemplate($templates);
    }
}
