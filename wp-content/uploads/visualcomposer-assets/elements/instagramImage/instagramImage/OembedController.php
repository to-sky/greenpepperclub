<?php

namespace instagramImage\instagramImage;

if (! defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class OembedController extends Container implements Module
{
    use WpFiltersActions;

    public function __construct()
    {
        $this->wpAddFilter('oembed_fetch_url', function ($provider, $url, $args) {
            if (isset($args['hidecaption'])) {
                $provider = add_query_arg('hidecaption', $args['hidecaption'], $provider);
            }

            return $provider;
        });
    }
}
