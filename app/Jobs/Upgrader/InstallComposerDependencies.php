<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Upgrader;

use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

class InstallComposerDependencies
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $command = sprintf('cd %s && composer update --prefer-dist --optimize-autoloader',
            escapeshellarg(base_path())
        );

        $process = new Process($command);

        $process->setTimeout(null);
        $process->run();

        if (! $process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        return true;
    }
}
