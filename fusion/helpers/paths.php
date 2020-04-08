<?php

if (! function_exists('fusion_path')) {
    /**
     * Get the path to the fusion folder.
     *
     * @param  string  $path
     * @return string
     */
    function fusion_path($path = '')
    {
        return realpath(__DIR__.'/../').$path;
    }
}