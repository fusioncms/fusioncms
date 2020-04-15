<?php

function human_filesize($bytes, $decimals = 2)
{
    $size   = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    $factor = floor((strlen($bytes) - 1) / 3);

    return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . ' ' . @$size[$factor];
}

function byte_converter($bytes, $from, $to)
{
	$size = ['B', 'KB', 'MB', 'GB'];

	$from_index = array_search(strtoupper($from), $size);
	$to_index   = array_search(strtoupper($to), $size);

	return $bytes * pow(1024, ($from_index - $to_index));
}