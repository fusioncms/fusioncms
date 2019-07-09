<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

if (! function_exists('upkeep')) {
    /**
     * Returns the upkeep registry instance from the container.
     *
     * @return \App\Foundation\Upkeep\UpkeepRegistry
     */
    function upkeep()
    {
        return app()->make(\App\Foundation\Upkeep\UpkeepRegistry::class);
    }
}
