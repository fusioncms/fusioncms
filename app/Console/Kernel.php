<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        /**
         * TODO: move this to the `fusioncms/cms` package
         *       along with `config/backup.php`
         */
        
        // if (app_installed() and setting('backups.scheduled_backups')) {
        //     $schedule->job(new \Fusion\Jobs\Backups\BackupRun)
        //         ->daily()
        //         ->timezone(setting('system.time_zone'))
        //         ->environments(['production']);
        // }
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
