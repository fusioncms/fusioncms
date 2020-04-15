<?php

if (! function_exists('seo')) {
    /**
     * Fetch an instance of SEO.
     */
    function seo()
    {
        return app('seo.seo');
    }
}
