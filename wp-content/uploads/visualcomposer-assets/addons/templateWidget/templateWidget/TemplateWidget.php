<?php

namespace templateWidget\templateWidget;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Illuminate\Support\Module;
use WP_Widget;

class TemplateWidget extends WP_Widget implements Module
{
    public function __construct()
    {

        $widgetOps = [
            'classname' => 'we-docs widget_nav_menu',
            'description' => __('Add Visual Composer templates in your sidebar.', 'visualcomposer'),
        ];

        $controlOps = ['width' => 300, 'height' => 350, 'id_base' => 'vcwb-template-widget'];

        parent::__construct(
            'vcwb-template-widget',
            __('Visual Composer Template', 'visualcomposer'),
            $widgetOps,
            $controlOps
        );
    }

    public function widget($args, $instance)
    {
        if (isset($instance['template'])) {
            $widgetController = vcapp('templateWidget\templateWidget\WidgetController');
            $content = $widgetController->getTemplateContent($instance['template']);

            echo $content;
        }
    }

    public function update($newInstance, $oldInstance)
    {
        $instance = $oldInstance;
        $instance['template'] = strip_tags($newInstance['template']);

        return $instance;
    }

    public function form($instance)
    {
        $editorTemplatesHelper = vchelper('EditorTemplates');
        //Set up some default widget settings.
        $defaults = [
            'template' => '',
        ];
        $instance = wp_parse_args((array)$instance, $defaults);
        $selectedTemplate = $instance['template'];
        $options = $editorTemplatesHelper->getCustomTemplateOptions();
        ?>
        <p>
            <select id="<?php echo $this->get_field_id('template'); ?>" name="<?php echo $this->get_field_name('template'); ?>" class="widefat" style="width:100%;">
                <?php
                foreach ($options as $key => $option) {
                    if (isset($option['group'])) {
                        echo $this->createGroup($option['group'], $selectedTemplate);
                    } else {
                        echo $this->createOption($option, $selectedTemplate);
                    }
                }
                ?>
            </select>
        </p>
        <?php
    }

    protected function createGroup($group, $selectedTemplate)
    {
        $options = '';
        foreach ($group['values'] as $value) {
            $options .= $this->createOption($value, $selectedTemplate);
        }

        //return "<optgroup label=\"".$group['label']."\">".$options."</optgroup>\r\n";
        return $options;
    }

    protected function createOption($item, $selectedTemplate)
    {
        $value = $item['value'];
        $label = $item['label'];
        $selected = false;
        if ($selectedTemplate === $value) {
            $selected = " selected='selected'";
        }

        return "<option" . $selected . " value=\"" . $value . "\">" . $label . "</option>\r\n";
    }
}
