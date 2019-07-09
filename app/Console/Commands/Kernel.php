<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Console\Commands;

use App\Console\Kernel as AppKernel;
use Illuminate\Console\Scheduling\Schedule;

class Kernel extends AppKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        parent::schedule($schedule);

        if (app_installed()) {
            if (setting('system.auto_update') === 'enabled') {
                $schedule->command('fusion:upgrade --auto --quiet')
                    ->everyThirtyMinutes()
                    ->timezone(setting('system.time_zone'))
                    ->when(function () {
                        if (setting('system.auto_update') === 'enabled') {
                            return ! app()->environment('local', 'staging');
                        }

                        return false;
                    });
            }
        }
    }
}
