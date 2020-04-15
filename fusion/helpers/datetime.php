<?php

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
