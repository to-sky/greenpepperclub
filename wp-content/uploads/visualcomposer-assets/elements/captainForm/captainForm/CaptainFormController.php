<?php

namespace captainForm\captainForm;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;

class CaptainFormController extends Container implements Module
{
    use EventsFilters;

    public function __construct()
    {
        if (!defined('CAPTAIN_FORM_CONTROLLER_INIT')) {
            define('CAPTAIN_FORM_CONTROLLER_INIT', true); // Avoid double initialization
            $this->addFilter(
                'vcv:ajaxForm:render:response',
                function ($response, $payload) {
                    if ($payload['action'] === 'vcv:captainForm:all') {
                        return $this->getResponse($response, $payload);
                    }

                    return $response;
                }
            );
        }
    }

    protected function getResponse($response, $payload)
    {
        $forms = $this->getForms();
        $html = '';
        $selected = false;
        if (isset($payload['value'], $payload['value']['vcvCaptainFormList'])) {
            $selected = $payload['value']['vcvCaptainFormList'];
        }
        if (class_exists('Captainform')) {
            if (is_object($forms) && isset($forms->forms) && is_array($forms->forms)) {
                $html .= '<select name="vcvCaptainFormList" class="vcv-ui-form-dropdown">';
                $html .= sprintf('<option>%s</option>', __('Select Captain Form Source', 'visualcomposer'));
                foreach ($forms->forms as $form) {
                    // @codingStandardsIgnoreLine
                    $id = $form->f_id;
                    // @codingStandardsIgnoreLine
                    $name = $form->f_name;
                    $extra = $selected && $selected === $id ? ' selected="selected"' : '';
                    $html .= sprintf('<option value="%s"%s>%s</option>', $id, $extra, $name);
                }
                $html .= '</select>';
            } else {
                $html = __('Please create a form via Captain Forms plugin', 'visualcomposer');
            }
        } else {
            $html = __('Please activate Captain Forms plugin', 'visualcomposer');
        }

        $response['html'] = $html;

        return $response;
    }

    protected function getForms()
    {
        $remoteUrl = 'http://app.captainform.com/wp_dispatcher.php?' .
            'app_id=' . urlencode(get_site_option('captainform_installation_id')) .
            '&app_key=' . urlencode(get_site_option('captainform_installation_key'));

        $result = wp_remote_fopen($remoteUrl);
        if ($result === false) {
            return false;
        }

        return json_decode($result);
    }
}
