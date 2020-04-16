<?php

namespace Fusion\Console;

use Artisan;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Helper\ProgressBar;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:install {--homestead} {--valet} {--force} {--url=http://localhost} {--host=localhost} {--database=} {--username=} {--password=} {--charset=utf8} {--collation=utf8_unicode_ci}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install and publish all of FusionCMS\' resources';

    /**
     * Array to store the configuration details.
     *
     * @var array
     */
    protected $container;

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $name = $this->generateName();

        if ($this->option('homestead')) {
            $dev      = true;
            $database = $this->option('database') ?? 'fusioncms';
            $username = $this->option('username') ?? 'homestead';
            $password = $this->option('password') ?? 'secret';
        } elseif ($this->option('valet')) {
            $dev      = true;
            $database = $this->option('database') ?? 'fusioncms';
            $username = $this->option('username') ?? 'root';
            $password = $this->option('password') ?? '';
        } else {
            $dev      = false;
            $database = $this->option('database');
            $username = $this->option('username');
            $password = $this->option('password');
        }

        $this->container = [
            'app_url'         => $this->option('url'),
            'db_host'         => $this->option('host'),
            'db_name'         => $database,
            'db_username'     => $username,
            'db_password'     => $password,
            'db_charset'      => $this->option('charset'),
            'db_collation'    => $this->option('collation'),
            'user_email'      => 'admin@example.com',
            'user_password'   => 'secret',
            'user_name'       => $name,
            'dev'             => $dev,
        ];

        if (app_installed() and ! $this->option('force')) {
            return $this->error('FusionCMS is already installed.');
        }

        if ($dev) {
            $this->comment('Relax while FusionCMS proceeds with the installation process.');

            return $this->install();
        }
    }

    /**
     * Install FusionCMS.
     *
     * @return void
     */
    private function install()
    {
        $jobs = [
            'Entering maintenance mode...'      => new \Fusion\Console\Actions\EnterMaintenanceMode,

            'Deleting asset files...'           => new \Fusion\Console\Uninstaller\DeleteUserFiles,
            'Deleting model files...'           => new \Fusion\Console\Uninstaller\DeleteModelFiles,
            'Deleting module assets...'         => new \Fusion\Console\Uninstaller\DeleteModuleAssets,
            'Deleting module cache...'          => new \Fusion\Console\Uninstaller\DeleteModuleCache,
            'Deleting log files...'             => new \Fusion\Console\Uninstaller\DeleteLogFiles,
            'Deleting environment config...'    => new \Fusion\Console\Uninstaller\DeleteEnvironmentConfig,
            'Deleting database...'              => new \Fusion\Console\Uninstaller\DeleteDatabase,

            'Creating database...'              => new \Fusion\Console\Installer\CreateDatabase($this->container),
            'Creating environment config...'    => new \Fusion\Console\Installer\CreateEnvironmentConfig($this->container),
            'Generating encryption key...'      => new \Fusion\Console\Installer\GenerateEncryptionKey,
            'Creating database tables...'       => new \Fusion\Console\Installer\CreateDatabaseTables,
            'Publishing module assets...'       => new \Fusion\Console\Installer\PublishModuleAssets,
            'Publishing Fusion resources...'    => new \Fusion\Console\Installer\PublishFusionResources,
            'Creating storage link...'          => new \Fusion\Console\Installer\CreateStorageLink,
            'Creating user permissions...'      => new \Fusion\Console\Installer\CreatePermissions,
            'Creating default user roles...'    => new \Fusion\Console\Installer\CreateDefaultUserRoles($this->container),
            'Creating default user account...'  => new \Fusion\Console\Installer\CreateDefaultUser($this->container),
            'Creating OAuth keys...'            => new \Fusion\Console\Installer\CreateOAuthKeys,
            'Creating Passport clients...'      => new \Fusion\Console\Installer\CreatePassportClients,

            'Exiting maintenance mode...'       => new \Fusion\Console\Actions\ExitMaintenanceMode,
        ];

        $progressBar = new ProgressBar($this->output, count($jobs));

        $progressBar->setFormat("\n%status:-45s%\n%current%/%max% [%bar%] %percent:3s%%\n🏁  %estimated:-20s%  %memory:20s%\n\n");

        event('fusioncms.installing');

        $progressBar->setBarCharacter('<fg=green>⚬</>');
        $progressBar->setEmptyBarCharacter('<fg=red>⚬</>');
        $progressBar->setProgressCharacter('<fg=green>➤</>');

        $progressBar->setMessage('Starting installation process...', 'status');
        $progressBar->start();

        foreach ($jobs as $message => $instance) {
            $progressBar->setMessage($message, 'status');
            $progressBar->advance();

            try {
                dispatch($instance);
            } catch (\Exception $exception) {
                Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);

                $this->comment("\n\n" . 'Uh oh! The following error was encountered during the installation process:' . "\n");
                $this->error($exception->getMessage());
                $this->comment("\n" . 'Please check the error logs for more information.');

                exit;
            }
        }

        Artisan::call('fusion:sync');
        Artisan::call('config:clear');
        Artisan::call('module:optimize');

        event('fusioncms.installed');

        $progressBar->setMessage('Complete', 'status');
        $progressBar->finish();

        return $this->info("\nInstallation complete.");
    }

    /**
     * Generate a random name.
     *
     * @return array
     */
    private function generateName()
    {
        $people = [
            'Marie Curie',        // Marie Skłodowska-Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity.
            'Ada Lovelace',       // Ada Lovelace, was an English mathematician and writer chiefly known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine.
            'Rosalind Franklin',  // Rosalind Elsie Franklin was an English chemist and X-ray crystallographer who made critical contributions to the understanding of the fine molecular structures of DNA, RNA, viruses, coal, and graphite.
            'Lise Meitner',       // Lise Meitner was an Austrian physicist who worked on radioactivity and nuclear physics.
            'Dorothy Hodgkin',    // Dorothy Mary Hodgkin, OM, FRS, known professionally as Dorothy Crowfoot Hodgkin or simply Dorothy Hodgkin, was a British biochemist who developed protein crystallography, for which she won the Nobel Prize in Chemistry in 1964.
            'Mileva Marić',       // Mileva Marić was a Serbian physicist. She was the only woman among Albert Einstein's fellow students at the Zurich Polytechnic.
            'Grace Hopper',       // Grace Murray Hopper was an American professor of mathematics, computer scientist and United States Navy rear admiral.
            'Alan Turing',        // Alan Mathison Turing, OBE, FRS was a British pioneering computer scientist, mathematician, logician, cryptanalyst, philosopher, mathematical biologist, and marathon and ultra distance runner.
            'Niels Bohr',         // Niels Henrik David Bohr was a Danish physicist who made foundational contributions to understanding atomic structure and quantum theory, for which he received the Nobel Prize in Physics in 1922.
            'Charles Darwin',     // Charles Robert Darwin, FRS was an English naturalist and geologist, best known for his contributions to evolutionary theory.
            'Nikola Tesla',       // Nikola Tesla was a Serbian American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current electricity supply system.
            'Albert Einstein',    // Albert Einstein was a German-born theoretical physicist. Einstein's work is also known for its influence on the philosophy of science. He developed the general theory of relativity, one of the two pillars of modern physics.
            'Carl Sagan',         // Carl Edward Sagan was an American astronomer, cosmologist, astrophysicist, astrobiologist, author, science popularizer, and science communicator in astronomy and other natural sciences.
            'Edwin Hubble',       // Edwin Powell Hubble was an American astronomer who played a crucial role in establishing the field of extragalactic astronomy and is generally regarded as one of the most important observational cosmologists of the 20th century.
            'John Glenn',         // John Herschel Glenn Jr. was an American aviator, engineer, astronaut, and United States Senator from Ohio. In 1962 he became the first American to orbit the Earth, circling three times.
            'Ursula Franklin',    // Ursula Martius Franklin, CC OOnt FRSC, was a German-Canadian metallurgist, research physicist, author, and educator who taught at the University of Toronto for more than 40 years.
        ];

        return $people[array_rand($people)];
    }
}