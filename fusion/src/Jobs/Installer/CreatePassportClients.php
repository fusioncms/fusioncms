<?php


namespace Fusion\Jobs\Installer;

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
