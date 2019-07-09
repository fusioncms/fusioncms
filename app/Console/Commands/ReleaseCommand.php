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

class ReleaseCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'release';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Release the FusionCMS website from suspension';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        @unlink(storage_path('framework/suspended'));

        $this->info('The FusionCMS powered website is now live.');
    }
}
