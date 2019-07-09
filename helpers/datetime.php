<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

function carbon_date($carbon)
{
    if ((is_string($carbon)) or (is_int($carbon))) {
        $carbon = carbon($carbon);
    }

    return $carbon->setTimezone(setting('time_zone'))->format(setting('date_format'));
}

function carbon_time($carbon)
{
    return $carbon->setTimezone(setting('time_zone'))->format(setting('time_format'));
}

function carbon($datetime)
{
    return \Carbon\Carbon::now()->setTimestamp($datetime);
}
