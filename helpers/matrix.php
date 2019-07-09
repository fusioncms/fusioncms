<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * retrieve an instance of the matrix model builder.
 *
 * @param  string  $matrix
 * @return \App\Services\Builders\Matrix
 */
function matrix_page($matrix)
{
    return new \App\Services\Builders\Page($matrix);
}
