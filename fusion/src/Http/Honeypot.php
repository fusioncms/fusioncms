<?php

namespace Fusion\Http;

use Exception;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Facades\Crypt;


class Honeypot
{
    /**
     * Generate the honeypot hidden fields.
     *
     * @return string
     */
    public function generate()
    {
        return new HtmlString(
            '<input type="text" name="_honeypot" value="" style="display:none !important" tabindex="-1" autocomplete="off">'."\n".
            '<input type="hidden" name="_honeypot_timestamp" value="'.$this->getEncryptedTimestamp().'" style="display:none !important" tabindex="-1" autocomplete="off">'
        );
    }

    /**
     * Return an encrypted timestamp.
     *
     * @return string
     */
    protected function getEncryptedTimestamp()
    {
        return Crypt::encrypt(time());
    }

    /**
     * Decrypt an encrypted timestamp.
     *
     * @param  string  $timestamp
     * @return null|string
     */
    protected function decryptTimestamp($timestamp)
    {
        try {
            return Crypt::decrypt($timestamp);
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Validate that the honeypot is empty.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @param  array  $parameters
     * @return bool
     */
    public function validateHoneypot($value)
    {
        return $value === '';
    }

    /**
     * Validate that the honeypot timestamp was about the minimum time limit.
     *
     * @param  string  $value
     * @param  integer  $timeLimit
     * @return bool
     */
    public function validateHoneypotTimestamp($value, $timeLimit = 3)
    {
        $value = $this->decryptTimestamp($value);

        return is_numeric($value) and time() > ($value + $timeLimit);
    }
}