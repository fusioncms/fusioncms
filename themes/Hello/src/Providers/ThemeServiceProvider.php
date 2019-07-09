<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Themes\Hello\Providers;

use Caffeinated\Themes\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{
    public function boot()
    {
        parent::boot();

        //
    }

    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
    }
}
