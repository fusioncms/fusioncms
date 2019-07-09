<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Foundation\Support;

use Carbon\Carbon;

class Caster
{
    public static function cast($value, $to)
    {
        switch ($to) {
            case 'string':
                return (string) $value;
            case 'integer':
                return (int) $value;
            case 'float':
                return (float) $value;
            case 'boolean':
                return filter_var($value, FILTER_VALIDATE_BOOLEAN);
            case 'carbon':
                // cheap way to check if it's a date rather than datetime
                if (strlen($value) == 10) {
                    return Carbon::createFromFormat('Y-m-d', $value);
                }

                return Carbon::createFromFormat('Y-m-d H:i:s', $value);
            case 'collection':
                return collect($value);
        }
    }
}
