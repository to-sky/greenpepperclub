<?php

namespace globalTemplate\globalTemplate;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\EditorTemplates;
use VisualComposer\Helpers\Traits\EventsFilters;

class GlobalTemplateController extends Container implements Module
{
    use EventsFilters;

    public function __construct()
    {
        if (!defined('VCV_GLOBAL_TEMPLATE_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/globalTemplate',
                'getVariables'
            );
            define('VCV_GLOBAL_TEMPLATE_CONTROLLER', true);
        }
    }

    /**
     * @param $variables
     * @param $payload
     * @param \VisualComposer\Helpers\EditorTemplates $editorTemplatesHelper
     *
     * @return array
     */
    protected function getVariables($variables, $payload, EditorTemplates $editorTemplatesHelper)
    {
        $values = $editorTemplatesHelper->getCustomTemplateOptions();

        $variables[] = [
            'key' => 'vcvGlobalTemplatesList',
            'value' => $values,
        ];

        return $variables;
    }
}
