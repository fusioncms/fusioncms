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

use Carbon\Carbon;
use Illuminate\Console\Command;

class SuspendCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'suspend {--message= : The message for the suspended mode.}';
    // {--allow=* : IP or networks allowed to access FusionCMS while in suspended mode.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Put FusionCMS in suspended mode';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        file_put_contents(
            storage_path('framework/suspended'),
            json_encode($this->getSuspendedFilePayload(), JSON_PRETTY_PRINT)
        );

        $this->comment('The FusionCMS powered website is now in suspended mode.');
    }

    /**
     * Get the payload to be placed in the "suspended" file.
     *
     * @return array
     */
    protected function getSuspendedFilePayload()
    {
        return [
            'time'    => Carbon::now()->getTimestamp(),
            'message' => $this->option('message'),
            // 'allowed' => $this->option('allow'),
        ];
    }
}
