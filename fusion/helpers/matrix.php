<?php

/**
 * retrieve an instance of the matrix model builder.
 *
 * @param  string  $matrix
 * @return \Fusion\Services\Builders\Matrix
 */
function matrix_page($matrix)
{
    return new \Fusion\Services\Builders\Page($matrix);
}


function matrix_entries($matrix)
{
    return (new \Fusion\Services\Builders\Collection($matrix))->make();
}