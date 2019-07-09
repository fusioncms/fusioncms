<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Installer;

class CreatePassportClients
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $command = sprintf('cd %s && php artisan passport:install',
            escapeshellarg(base_path())
        );
        exec($command);
    }
}
