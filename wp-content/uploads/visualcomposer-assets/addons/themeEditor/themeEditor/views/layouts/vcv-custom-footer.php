<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
/** @var string $sourceId */
/** @var string $part */
$frontendHelper = vchelper('Frontend');
?>

<footer class="vcv-footer" data-vcv-layout-zone="footer">
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
</footer>

<?php wp_footer(); ?>

</body>
</html>
