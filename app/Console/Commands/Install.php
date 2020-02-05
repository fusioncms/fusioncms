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

use File;
use Artisan;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Console\Helper\ProgressBar;

class Install extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = 'fusion:install {--homestead} {--valet} {--force} {--url=http://localhost} {--host=localhost} {--database=} {--username=} {--password=} {--charset=utf8} {--collation=utf8_unicode_ci}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Runs all the required migrations to get up and running with FusionCMS';

    /**
     * Array to store the configuration details.
     *
     * @var array
     */
    protected $container;

    /**
     * Server requirements.
     *
     * @var array
     */
    protected $requirements = [
        'php'        => '7.1.3',
        'extensions' => [
            'openssl',
            'pdo',
            'mbstring',
            'tokenizer',
        ],
    ];

    /**
     * Execute the console command.
     *
     * @return mixed
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

        $this->checkServerRequirements();

        if ($dev) {
            $this->comment('Relax while FusionCMS proceeds with the installation process.');

            return $this->install();
        }

        $this->displayHeader('introduction.stub');

        return $this->stepOne();
    }

    /**
     * Step #1: Configure Website URL.
     *
     * @return mixed
     */
    protected function stepOne()
    {
        $this->displayHeader('step_1.stub');

        $this->container['app_url'] = $this->ask('Please enter the Website URL (your testing domain or production domain):', $this->container['app_url']);

        $this->comment('You have provided the following configuration:');
        $this->comment('Website URL: ' . $this->container['app_url']);

        if ($this->confirm('Do you wish to continue?')) {
            return $this->stepTwo();
        }

        return $this->stepOne();
    }

    /**
     * Step #2: Configure Database.
     *
     * @return mixed
     */
    protected function stepTwo()
    {
        $this->displayHeader('step_2.stub');

        $this->container['db_host']      = $this->ask('Please enter the database host:', $this->container['db_host']);
        $this->container['db_name']      = $this->ask('Please enter the database name:', $this->container['db_name']);
        $this->container['db_username']  = $this->ask('Please enter the database username:', $this->container['db_username']);
        $this->container['db_password']  = $this->secret('Please enter the database password:', $this->container['db_password']);
        $this->container['db_charset']   = $this->ask('Please enter the database charset:', $this->container['db_charset']);
        $this->container['db_collation'] = $this->ask('Please enter the database collation:', $this->container['db_collation']);

        $this->comment('You have provided the following configuration:');
        $this->comment('Database Host:      ' . $this->container['db_host']);
        $this->comment('Database Name:      ' . $this->container['db_name']);
        $this->comment('Database Username:  ' . $this->container['db_username']);
        $this->comment('Database Password: ******');
        $this->comment('Database Charset:   ' . $this->container['db_charset']);
        $this->comment('Database Collation: ' . $this->container['db_collation']);

        if ($this->confirm('Do you wish to continue?')) {
            return $this->stepThree();
        }

        return $this->stepTwo();
    }

    /**
     * Step #3: Configure Default User.
     *
     * @return mixed
     */
    protected function stepThree()
    {
        $this->displayHeader('step_3.stub');

        $this->container['user_email']    = $this->ask('Please enter the user\'s email:', 'admin@example.com');
        $this->container['user_password'] = $this->askForUserPassword();

        if ($this->confirm('Do you wish to configure the user\'s name? [' . $this->container['user_name'] . ']')) {
            $this->container['user_name'] = $this->ask('Please enter the default user\'s name:');
        }

        $this->comment('You have provided the following user details:');
        $this->comment('Name: ' . $this->container['user_name']);
        $this->comment('E-Mail:    ' . $this->container['user_email']);
        $this->comment('Password: ******');

        if ($this->confirm('Do you wish to continue?')) {
            $this->comment('Thanks! That\'s all we need.');
            $this->comment('Now relax while FusionCMS proceeds with the installation process.');

            return $this->install();
        }

        return $this->stepThree();
    }

    /**
     * Install FusionCMS.
     *
     * @return void
     */
    protected function install()
    {
        $jobs = [
            'Entering maintenance mode...'      => new \App\Jobs\EnterMaintenanceMode,
            'Deleting database...'              => new \App\Jobs\Uninstaller\DeleteDatabase,
            'Creating database...'              => new \App\Jobs\Installer\CreateDatabase($this->container),
            'Deleting environment config...'    => new \App\Jobs\Uninstaller\DeleteEnvironmentConfig,
            'Deleting module assets...'         => new \App\Jobs\Uninstaller\DeleteModuleAssets,
            'Deleting module cache...'          => new \App\Jobs\Uninstaller\DeleteModuleCache,
            'Creating environment config...'    => new \App\Jobs\Installer\CreateEnvironmentConfig($this->container),
            'Creating database tables...'       => new \App\Jobs\Installer\CreateDatabaseTables,
            'Publishing module assets...'       => new \App\Jobs\Installer\PublishModuleAssets,
            'Creating storage link...'          => new \App\Jobs\Installer\CreateStorageLink,
            'Creating user permissions...'      => new \App\Jobs\Installer\CreatePermissions,
            'Creating default user roles...'    => new \App\Jobs\Installer\CreateDefaultUserRoles($this->container),
            'Creating default user account...'  => new \App\Jobs\Installer\CreateDefaultUser($this->container),
            'Creating OAuth keys...'            => new \App\Jobs\Installer\CreateOAuthKeys,
            'Creating Passport clients...'      => new \App\Jobs\Installer\CreatePassportClients,
            'Exiting maintenance mode...'       => new \App\Jobs\ExitMaintenanceMode,
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

        Artisan::call('fusion:settings');
        Artisan::call('config:clear');
        Artisan::call('module:optimize');

        event('fusioncms.installed');

        $progressBar->setMessage('Complete', 'status');
        $progressBar->finish();

        return $this->info("\nInstallation complete.");
    }

    /**
     * Responsible for asking for and verifying the user's password.
     *
     * @return mixed
     */
    protected function askForUserPassword()
    {
        $password     = $this->secret('Please enter the user\'s password:', 'secret');
        $confirmation = $this->secret('Please confirm the user\'s password:', 'secret');

        if ($password !== $confirmation) {
            $this->error('Sorry, your password and password confirmation do not match. Please try again.');

            return $this->askForUserPassword();
        }

        return $password;
    }

    /**
     * Pull the given stub file contents and display them on screen.
     *
     * @param  string  $file
     * @param  string  $level
     * @return mixed
     */
    protected function displayHeader($file = '', $level = 'info')
    {
        $stub = File::get(resource_path('stubs/console/' . $file));

        return $this->$level($stub);
    }

    /**
     * Generate a random name.
     *
     * @return array
     */
    protected function generateName()
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

    /**
     * Check server requirements.
     *
     * @return null
     */
    protected function checkServerRequirements()
    {
        $serverPassed = dispatch(new \App\Jobs\Installer\CheckServerRequirements($this->requirements));

        if (! $serverPassed) {
            $this->error('Your server does not meet FusionCMS\'s requirements.');
            $this->comment('PHP: >=' . $this->requirements['php']);
            $this->comment('Extensions:');

            foreach ($this->requirements['extensions'] as $extension) {
                $this->comment('- ' . $extension);
            }

            die();
        }
    }
}
