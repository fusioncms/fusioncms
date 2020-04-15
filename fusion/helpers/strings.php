<?php

use Illuminate\Support\Str;
use Fusion\Services\Parsers\ParsedownExtra;

function render_markdown($content)
{
    $parsedown = new ParsedownExtra();

    return $parsedown->text($content);
}

function str_handle($string)
{
    return Str::slug($string, '_');
}
