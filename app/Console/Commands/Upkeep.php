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

use Illuminate\Console\Command;

class Upkeep extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'upkeep';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run all upkeep tasks';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $count = upkeep()->count();

        $this->comment('Running (' . $count . ') registered upkeep tasks.');

        upkeep()->each(function ($task) {
            $this->info('Running upkeep task: ' . $task->getName());

            $task->handle();
        });
    }
}
