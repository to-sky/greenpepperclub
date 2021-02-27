<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
/** @var string $sourceId */
/** @var string $part */
$frontendHelper = vchelper('Frontend');
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php if (!current_theme_supports('title-tag')) : ?>
        <title>
            <?php echo wp_title(); ?>
        </title>
    <?php endif; ?>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="vcv-header" data-vcv-layout-zone="header">
    <?php
    $frontendHelper->renderContent($sourceId);
    if ($frontendHelper->isPageEditable()) {
        echo vcaddonview(
            'zone-edit-control',
            [
                'addon' => 'themeEditor',
                'blockId' => $sourceId,
                'editLink' => $sourceId > 0 ? get_edit_post_link($sourceId, 'url') : '',
                'title' => $part,
            ]
        );
    }
    ?>
</header>
