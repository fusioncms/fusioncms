<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App;

use Illuminate\Foundation\Application as LaravelApplication;

class Application extends LaravelApplication
{
    /**
     * Determine if the CMS is currently suspended.
     *
     * @return bool
     */
    public function isSuspended()
    {
        return file_exists($this->storagePath() . '/framework/suspended');
    }
}
