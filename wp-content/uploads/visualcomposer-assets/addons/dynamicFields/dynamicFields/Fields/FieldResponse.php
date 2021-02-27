<?php

namespace dynamicFields\dynamicFields\Fields;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

trait FieldResponse
{
    /**
     * @param $currentValue
     * @param $actualValue
     * @param $response
     *
     * @return mixed
     */
    private function parseResponse($currentValue, $actualValue, $response)
    {
        $currentValue = preg_replace("/\r\n|\r/", "\n", $currentValue);
        $actualValue = preg_replace("/\r\n|\r/", "\n", $actualValue);
        $response = preg_replace("/\r\n|\r/", "\n", $response);

        if (strpos($response, $currentValue) !== false) {
            $response = str_replace($currentValue, $actualValue, $response);
        } else {
            // Arabic encoded symbols replace in woocommerce price..
            $actualValueDecoded = html_entity_decode($actualValue);
            $currentValueDecoded = html_entity_decode($currentValue);
            if (strpos($response, $currentValueDecoded) !== false) {
                $response = str_replace($currentValueDecoded, $actualValueDecoded, $response);
            } else {
                // Current value was saved in encoded way
                $response = str_replace(htmlentities($currentValue, ENT_QUOTES, 'utf-8'), $actualValue, $response);
            }
        }

        return $response;
    }
}
