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

use GuzzleHttp\Client;
use Composer\Semver\Semver;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Helper\ProgressBar;

class Upgrade extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:upgrade {--auto} {--force} {--skip-backup}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check for a FusionCMS upgrade';

    /**
     * @var string
     */
    protected $latest;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if ($this->upgradeExists()) {
            if (! $this->isCompatible() and ! $this->option('force')) {
                $this->line('Unable to upgrade. There is a newer version available (' . app_version() . ' → ' . $this->latest . '), however your current theme is not compatible. Please upgrade your theme and try again.');
            } elseif ($this->option('auto')) {
                $this->startUpgrade();
            } else {
                $this->info('There is a newer version available! (' . app_version() . ' → ' . $this->latest . ')' . "\n");

                if ($this->confirm('Do you wish to upgrade now?')) {
                    $this->info('Awesome! Sit back and relax while we upgrade you to ' . $this->latest . '!' . "\n");

                    $this->startUpgrade();
                } else {
                    $this->info('No worries. Feel free to run this process again once you do wish to upgrade!' . "\n");
                }
            }
        } else {
            $this->line('You are running the latest stable version of FusionCMS. [' . app_version() . ']');
        }
    }

    /**
     * Run the upgrade path.
     *
     * @return mixed
     */
    protected function startUpgrade()
    {
        $jobs = [
            'Entering maintenance mode...'          => new \App\Jobs\EnterMaintenanceMode,
            'Preparing filesystem...'               => new \App\Jobs\Upgrader\PrepareFilesystem,
            'Backing up website...'                 => new \App\Jobs\BackupSite,
            'Downloading and extracting release...' => new \App\Jobs\Upgrader\DownloadAndExtractRelease,
            'Copying files over...'                 => new \App\Jobs\Upgrader\CopyFiles,
            'Installing Composer dependencies...'   => new \App\Jobs\Upgrader\InstallComposerDependencies,
            'Optimizing modules...'                 => new \App\Jobs\Upgrader\OptimizeModules,
            'Updating database...'                  => new \App\Jobs\Upgrader\UpdateDatabase,
            'Syncing permissions...'                => new \App\Jobs\Upgrader\SyncPermissions,
            'Syncing system settings...'            => new \App\Jobs\Upgrader\SyncSettings,
            'Syncing system notifications'          => new \App\Jobs\SyncSystemNotifications,
            'Updating installation lock...'         => new \App\Jobs\Upgrader\UpdateInstallationLock,
            'Cleaning up files...'                  => new \App\Jobs\Upgrader\CleanUpFiles,
            'Running upkeep tasks...'               => new \App\Jobs\RunUpkeep,
            'Clearing cache...'                     => new \App\Jobs\Upgrader\ClearCache,
            'Exiting maintenance mode...'           => new \App\Jobs\ExitMaintenanceMode,
        ];

        if ($this->option('skip-backup')) {
            unset($jobs['Backing up website...']);
        }

        $progressBar = new ProgressBar($this->output, count($jobs));

        $progressBar->setFormat("\n<fg=white;bg=blue> %status:-45s%</>\n%current%/%max% [%bar%] %percent:3s%%\n🏁  %estimated:-20s%  %memory:20s%\n\n");

        $progressBar->setBarCharacter('<fg=green>⚬</>');
        $progressBar->setEmptyBarCharacter('<fg=red>⚬</>');
        $progressBar->setProgressCharacter('<fg=green>➤</>');

        $progressBar->setMessage('Starting upgrade process...', 'status');
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

        return $this->info("\nUpgrade complete.");
    }

    /**
     * Checks if a new version of the CMS exists.
     *
     * @return bool
     */
    private function upgradeExists()
    {
        if (empty(setting('system.license_key'))) {
            $this->line('Please register a valid license key.');

            exit;
        }

        $client     = new Client;
        $formParams = [
            'token' => setting('system.license_key'),
        ];

        if (app()->isLocal()) {
            $formParams['local'] = true;
        }

        $response = $client->post(setting('system.launchpad_api') . '/release/latest/', [
            'form_params' => $formParams,
        ]);

        $body = json_decode((string) $response->getBody());

        if (! isset($body->data)) {
            $this->line('There was an error fetching the latest release information. Please try again later.');

            exit;
        }

        $current = app_version();
        $latest  = $body->data->name;

        $exists = version_compare($current, $latest, '<');

        if ($exists === true) {
            $this->latest = $latest;
        }

        return $exists;
    }

    /**
     * Verify that the current public theme is compatible with the next available
     * version of the CMS.
     *
     * @return bool
     */
    private function isCompatible()
    {
        $dependencies = \Theme::where('slug', setting('theme.theme_public'))->first()->get('dependencies');
        $constraint   = (isset($dependencies['cms']) ? $dependencies['cms'] : null);

        if (is_null($constraint)) {
            return false;
        }

        if ($constraint === '*') {
            $this->error('Your theme has no CMS constraint.');
        }

        return Semver::satisfies($this->latest, $constraint);
    }
}
