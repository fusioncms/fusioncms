<?php

if (! function_exists('unique_id')) {
    /**
     * Generates a unique id independent of the systems
     * current date and time.
     *
     * @return string
     */
    function unique_id($length = 13)
    {
        if (function_exists('random_bytes')) {
            $bytes = random_bytes(ceil($length / 2));
        } elseif (function_exists('openssl_random_pseudo_bytes')) {
            $bytes = openssl_random_pseudo_bytes(ceil($length / 2));
        } else {
            throw new \Exception('No cryptographically secure random function available');
        }

        return substr(bin2hex($bytes), 0, $length);
    }
}