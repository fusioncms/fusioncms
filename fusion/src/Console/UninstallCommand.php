<?php

namespace Fusion\Console;

use File;
use Artisan;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Helper\ProgressBar;

class UninstallCommand extends Command
{
    use DispatchesJobs;

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'fusion:uninstall';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Uninstalls FusionCMS';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if (! app_installed()) {
            return $this->error('FusionCMS is not installed, so there\'s nothing to do here!');
        }

        if (! $this->option('force')) {
            $this->error('Warning! Uninstalling FusionCMS will delete all stored data.');
            $this->error('This is unreversable unless you have manually backed up your installation.');

            if ($this->confirm('Are you sure you wish to uninstall FusionCMS?')) {
                $this->info('Uninstalling FusionCMS...');

                return $this->uninstall();
            }

            $this->info('Aborting uninstallation request. No changes have been made.');

            return true;
        }

        return $this->uninstall();
    }

    /**
     * Uninstall FusionCMS.
     *
     * @return null
     */
    protected function uninstall()
    {
        $jobs = [
            'Entering maintenance mode...'   => new \Fusion\Console\Actions\EnterMaintenanceMode,
            'Deleting Fusion resources...'   => new \Fusion\Console\Uninstaller\DeleteFusionResources,
            'Deleting module assets...'      => new \Fusion\Console\Uninstaller\DeleteModuleAssets,
            'Deleting asset files...'        => new \Fusion\Console\Uninstaller\DeleteUserFiles,
            'Deleting model files...'        => new \Fusion\Console\Uninstaller\DeleteModelFiles,
            'Deleting log files...'          => new \Fusion\Console\Uninstaller\DeleteLogFiles,
            'Deleting module cache...'       => new \Fusion\Console\Uninstaller\DeleteModuleCache,
            'Deleting composer lock...'      => new \Fusion\Console\Uninstaller\DeleteComposerLock,
            'Deleting environment config...' => new \Fusion\Console\Uninstaller\DeleteEnvironmentConfig,
            'Deleting database...'           => new \Fusion\Console\Uninstaller\DeleteDatabase,
            'Exiting maintenance mode...'    => new \Fusion\Console\Actions\ExitMaintenanceMode,
        ];

        $progressBar = new ProgressBar($this->output, count($jobs));

        $progressBar->setFormat("\n%status:-45s%\n%current%/%max% [%bar%] %percent:3s%%\n🏁  %estimated:-20s%  %memory:20s%\n\n");

        $progressBar->setBarCharacter('<fg=green>⚬</>');
        $progressBar->setEmptyBarCharacter('<fg=red>⚬</>');
        $progressBar->setProgressCharacter('<fg=green>➤</>');

        $progressBar->setMessage('Starting uninstall process...', 'status');
        $progressBar->start();

        foreach ($jobs as $message => $instance) {
            $progressBar->setMessage($message, 'status');
            $progressBar->advance();

            try {
                dispatch($instance);
            } catch (\Exception $exception) {
                Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);

                $this->comment("\n\n" . 'Uh oh! The following error was encountered during the upgrade process:' . "\n");
                $this->error($exception->getMessage());
                $this->comment("\n" . 'Please check the error logs for more information.');

                exit;
            }
        }

        $progressBar->setMessage('Complete', 'status');
        $progressBar->finish();

        Artisan::call('config:clear');

        $this->info("\nUninstallation complete.");
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [
            ['force', 'f', InputOption::VALUE_NONE, 'Force FusionCMS to be uninstalled'],
        ];
    }
}
