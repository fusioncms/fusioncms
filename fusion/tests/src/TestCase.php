<?php

namespace Fusion\Tests;

use Illuminate\Support\Facades\Hash;
use Spatie\Backup\BackupServiceProvider;
use Fusion\Tests\Concerns\InstallsFusion;
use Fusion\Providers\FusionServiceProvider;
use Caffeinated\Flash\FlashServiceProvider;
use Caffeinated\Menus\MenusServiceProvider;
use Caffeinated\Bonsai\BonsaiServiceProvider;
use Caffeinated\Themes\ThemesServiceProvider;
use Caffeinated\Modules\ModulesServiceProvider;
use Fusion\Tests\Concerns\MakesDatabaseAssertions;
use Spatie\Activitylog\ActivitylogServiceProvider;

abstract class TestCase extends \Orchestra\Testbench\TestCase
{
    use InstallsFusion, MakesDatabaseAssertions;

    /**
     * @var \Fusion\Models\User
     */
    protected $admin;

    /**
     * @var \Fusion\Models\User
     */
    protected $user;

    /**
     * @var \Fusion\Models\User
     */
    protected $guest;

    /**
     * Set up the test environment.
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        Hash::driver('bcrypt')->setRounds(4);

        $this->withFactories(fusion_path('/database/definitions'));

        $this->install();

        $this->admin = $this->createUser('Jane Doe', 'admin@example.com', 'secret', 'admin');
        $this->user  = $this->createUser('Ducky Consumer', 'guest@example.com', 'secret');
        $this->guest = $this->createGuest();
    }

    /**
     * Get base path.
     *
     * @return string
     */
    protected function getBasePath()
    {
        return fusion_path('/tests/stubs/laravel');
    }

    /**
     * Define environment setup.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return void
     */
    protected function getEnvironmentSetUp($app)
    {
        $app->loadEnvironmentFrom('.env.testing');

        $app['config']->set('database.default', 'sqlite');

        $app['config']->set('database.connections.sqlite', [
            'driver'   => 'sqlite',
            'database' => ':memory:',
            'prefix'   => '',
        ]);
    }

    /**
     * Tear down the test environment.
     *
     * @return void
     */
    public function tearDown(): void
    {
        $this->uninstall();

        parent::tearDown();
    }

    /**
     * Load the bundled FusionCMS service providers.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return array
     */
    protected function getPackageProviders($app)
    {
        return [
            FusionServiceProvider::class,

            FlashServiceProvider::class,
            MenusServiceProvider::class,
            BackupServiceProvider::class,
            BonsaiServiceProvider::class,
            ThemesServiceProvider::class,
            ModulesServiceProvider::class,
            ActivitylogServiceProvider::class,
        ];
    }

    /**
     * Load the bundled FusionCMS aliases.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return array
     */
    protected function getPackageAliases($app)
    {
        return [
            'Theme'  => 'Caffeinated\Themes\Facades\Theme',
            'Module' => 'Caffeinated\Modules\Facades\Module',
        ];
    }
}