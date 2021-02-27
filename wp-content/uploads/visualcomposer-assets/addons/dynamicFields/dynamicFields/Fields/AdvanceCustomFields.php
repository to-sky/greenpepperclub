<?php

namespace dynamicFields\dynamicFields\Fields;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

require_once 'FieldResponse.php';

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Data;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

/**
 * Class WooCommerce
 * @package dynamicFields\dynamicFields\Fields
 */
class AdvanceCustomFields extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;
    use FieldResponse;

    protected $fields = [];

    /**
     * Post constructor.
     */
    public function __construct()
    {
        if (!class_exists('acf')) {
            return;
        }
        $this->addFilter('vcv:editor:data:postFields', 'addGroup');
        $this->addFilter('vcv:editor:data:postData', 'addPostData');
        $this->addFilter('vcv:editor:data:postFields', 'addFields');
        $this->addFilter('vcv:dynamic:value:acf:*', 'renderFields');
    }

    /**
     * @param string $sourceId
     *
     * @param $payload
     *
     * @return array
     */
    protected function fields($sourceId, $payload)
    {
        if (isset($this->fields[ $sourceId ])) {
            return $this->fields[ $sourceId ];
        }

        $isForce = isset($payload['forceAddField']) && $payload['forceAddField'];
        $acfData = [];
        $fields = [];

        if ($isForce) {
            $acfGroups = acf_get_field_groups();
        } else {
            $acfGroups = acf_get_field_groups(['post_id' => $sourceId]);
        }

        if (!empty($acfGroups)) {
            foreach ($acfGroups as $acfGroup) {
                $groupFields = acf_get_fields($acfGroup['ID']);
                $acfData[] = [
                    'forceAddField' => $isForce,
                    'groupTitle' => $acfGroup['title'],
                    'groupFields' => $groupFields,
                ];
            }
        }

        if (!$isForce && !is_array($acfData) || empty($acfData)) {
            return;
        }

        if (isset($this->fields[ $sourceId ]) && !empty($this->fields[ $sourceId ])) {
            return $this->fields[ $sourceId ];
        }

        $allowedFieldTypes = [
            'text' => ['string', 'htmleditor', 'inputSelect'],
            'textarea' => ['string', 'htmleditor', 'inputSelect'],
            'number' => ['string', 'htmleditor', 'inputSelect'],
            'range' => ['string', 'htmleditor', 'inputSelect'],
            'email' => ['string', 'htmleditor', 'inputSelect'],
            'date_picker' => ['string', 'htmleditor', 'inputSelect'],
            'date_time_picker' => ['string', 'htmleditor', 'inputSelect'],
            'time_picker' => ['string', 'htmleditor', 'inputSelect'],
            'color_picker' => ['string', 'htmleditor', 'inputSelect'],
            'button_group' => ['string', 'htmleditor', 'inputSelect'],
            'radio' => ['string', 'htmleditor', 'inputSelect'],
            'checkbox' => ['string', 'htmleditor', 'inputSelect'],
            'select' => ['string', 'htmleditor', 'inputSelect'],
            'image' => ['attachimage', 'designOptions', 'designOptionsAdvanced'],
            'url' => ['url'],
            'page_link' => ['url'],
            'link' => ['url'],
            'file' => ['url'],
            'wysiwyg' => ['htmleditor'],
            'oembed' => ['htmleditor'],
        ];

        $post = get_post($sourceId);
        $postType = get_post_type($post);

        foreach ($acfData as $acfGroup) {
            $fields = $this->parseFields($sourceId, $postType, $acfGroup, $allowedFieldTypes, $fields);
        }

        $this->fields[ $sourceId ] = [];
        $this->fields[ $sourceId ] = $fields;

        return $fields;
    }

    /**
     * @param $response
     *
     * @return mixed
     */
    protected function addGroup($response)
    {
        $values = [
            'group' => [
                'label' => __('Advance Custom Fields', 'visualcomposer'),
                'values' => [],
            ],
        ];

        if (!isset($response['string']['acf'])) {
            $response['string']['acf'] = $values;
        }
        if (!isset($response['inputSelect']['acf'])) {
            $response['inputSelect']['acf'] = $values;
        }
        if (!isset($response['htmleditor']['acf'])) {
            $response['htmleditor']['acf'] = $values;
        }
        if (!isset($response['attachimage']['acf'])) {
            $response['attachimage']['acf'] = $values;
        }
        if (!isset($response['designOptions']['acf'])) {
            $response['designOptions']['acf'] = $values;
        }
        if (!isset($response['designOptionsAdvanced']['acf'])) {
            $response['designOptionsAdvanced']['acf'] = $values;
        }
        if (!isset($response['url']['acf'])) {
            $response['url']['acf'] = $values;
        }

        return $response;
    }

    /**
     * @param $response
     *
     * @param $payload
     *
     * @return mixed
     */
    protected function addPostData($response, $payload)
    {
        $sourceId = false;
        if (isset($payload['sourceId'])) {
            $sourceId = $payload['sourceId'];
        }

        $fields = $this->fields($sourceId, $payload);
        if (is_array($fields) && !empty($fields)) {
            foreach ($fields as $field) {
                $response[ $field['value'] ] = $field['actualValue'];
            }
        }

        return $response;
    }

    /**
     * @param $response
     *
     * @param $payload
     *
     * @return mixed
     * @throws \ReflectionException
     */
    protected function addFields($response, $payload)
    {
        $sourceId = $payload['sourceId'];
        $response = $this->call('removeMetaFieldDuplicates', [$response, $sourceId]);

        $fields = $this->fields($sourceId, $payload);
        if (is_array($fields) && !empty($fields)) {
            foreach ($fields as $field) {
                $values = [
                    'value' => $field['value'],
                    'label' => $field['label'],
                ];

                $types = $field['type'];
                foreach ($types as $type) {
                    $response[ $type ][ $field['group'] ]['group']['values'][] = $values;
                }
            }
        }

        return $response;
    }

    /**
     * @param $needle
     * @param $haystack
     * @param string $currentKey
     *
     * @return bool|string
     */
    protected function findMetaDuplicates($needle, $haystack, $currentKey = '')
    {
        foreach ($haystack as $key => $value) {
            if (is_array($value)) {
                $nextKey = $this->findMetaDuplicates($needle, $value, $currentKey . '.' . $key);
                if ($nextKey) {
                    return $nextKey;
                }
            } elseif ($value === $needle) {
                return $currentKey;
            }
        }

        return false;
    }

    /**
     * @param $response
     * @param $payload
     *
     * @return mixed
     */
    protected function renderFields($response, $payload)
    {
        $atts = $payload['atts'];
        $sourceId = get_the_ID();
        if (isset($atts['sourceId'])) {
            $sourceId = $atts['sourceId'];
        }

        $fields = $this->fields($sourceId, $payload);

        if (is_array($fields)) {
            foreach ($fields as $field) {
                if (isset($atts['currentValue']) && $atts['value'] === $field['value']) {
                    if (empty($response)) {
                        $response = $field['actualValue'];
                    }
                    $response = $this->parseResponse($atts['currentValue'], $field['actualValue'], $response);
                }
            }
        }

        return $response;
    }

    /**
     * Remove ACF fields from meta group
     *
     * @param $response
     * @param $sourceId
     * @param \VisualComposer\Helpers\Data $dataHelper
     *
     * @return array
     */
    protected function removeMetaFieldDuplicates($response, $sourceId, Data $dataHelper)
    {
        $fieldsToUnset = [];
        if (isset($this->fields[ $sourceId ]) && !empty($this->fields[ $sourceId ])) {
            foreach ($this->fields[ $sourceId ] as $key => $field) {
                foreach ($response as $groupKey => $fieldGroup) {
                    if ($this->findMetaDuplicates($field['name'], $fieldGroup)) {
                        $fieldsToUnset[] = $groupKey . $this->findMetaDuplicates('customMetaField:' . $field['name'], $fieldGroup);
                    }
                }
            }
        }

        if (!empty($fieldsToUnset)) {
            foreach ($fieldsToUnset as $field) {
                $dataHelper->forget($response, ltrim($field, '.'));
            }
        }

        return $response;
    }

    /**
     * @param $sourceId
     * @param $acfField
     * @param $acfKey
     * @param $value
     *
     * @return string
     */
    protected function parseFieldValues($sourceId, $acfField, $acfKey, $value = '')
    {
        if (in_array($acfField['type'], ['image'])) {
            $fieldData = get_field($acfKey, $sourceId);
            $value = $fieldData['url'];
        } elseif (in_array($acfField['type'], ['page_link'])) {
            $fieldValue = $acfField['value'];
            if (is_array($fieldValue)) {
                $value = $fieldValue[0];
            } else {
                $value = $fieldValue;
            }
        } elseif (in_array($acfField['type'], ['link', 'url', 'file'])) {
            $fieldValue = $acfField['value'];
            if (is_array($fieldValue)) {
                $value = $fieldValue['url'];
            } else {
                $value = $fieldValue;
            }
        } elseif (in_array($acfField['type'], ['select', 'checkbox'])) {
            $value = $this->parseMultipleOptions($acfField, $value);
        } elseif (in_array($acfField['type'], ['radio', 'button_group'])) {
            $value = $this->parseSingleOptions($sourceId, $acfField, $acfKey);
        } else {
            $value = get_field($acfKey, $sourceId);
        }

        return $value;
    }

    /**
     * @param $acfField
     * @param $value
     *
     * @return string
     */
    protected function parseMultipleOptions($acfField, $value)
    {
        $fieldValue = $acfField['value'];
        if (is_array($fieldValue)) {
            foreach ($fieldValue as $key => $field) {
                if ($acfField['return_format'] === 'array') {
                    $value .= $field['value'] . ' : ' . $field['label'] . ', ';
                } elseif ($acfField['return_format'] === 'value') {
                    $value .= $key . ', ';
                } elseif ($acfField['return_format'] === 'label') {
                    $value .= $field . ', ';
                }
            }
            $value = rtrim($value, ', ');
        } else {
            $value = $fieldValue;
        }

        return $value;
    }

    /**
     * @param $sourceId
     * @param $acfField
     * @param $acfKey
     *
     * @return string
     */
    protected function parseSingleOptions($sourceId, $acfField, $acfKey)
    {
        $fieldValue = $acfField['value'];
        if (is_array($fieldValue)) {
            if ($acfField['return_format'] === 'array') {
                $value = $fieldValue['value'] . ' : ' . $fieldValue['label'];
            } else {
                $value = get_field($acfKey, $sourceId);
            }
        } else {
            $value = $fieldValue;
        }

        return $value;
    }

    /**
     * @param $sourceId
     * @param $postType
     * @param $acfGroup
     * @param array $allowedFieldTypes
     * @param array $fields
     *
     * @return array
     */
    protected function parseFields($sourceId, $postType, $acfGroup, array $allowedFieldTypes, $fields = [])
    {
        $acfFields = $acfGroup['groupFields'];
        foreach ($acfFields as $acfField) {
            if (key_exists($acfField['type'], $allowedFieldTypes)) {
                $value = $this->parseFieldValues($sourceId, $acfField, $acfField['key']);
                if (empty($value) && $acfGroup['forceAddField'] || !empty($value)) {
                    $fields[] = [
                        'value' => 'acf:' . $acfField['key'],
                        'label' => $acfGroup['groupTitle'] . ' - ' . $acfField['label'],
                        'actualValue' => !is_null($value) ? $value : '',
                        'type' => $allowedFieldTypes[ $acfField['type'] ],
                        'group' => 'acf',
                        'name' => $acfField['name'],
                    ];
                }
            }
        }

        return $fields;
    }
}
