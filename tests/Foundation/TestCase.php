<?php


namespace Tests\Foundation;

use File;
use Caffeinated\Themes\Facades\Theme;
use Caffeinated\Modules\Facades\Module;
use Artisan;
use Caffeinated\Shinobi\Facades\Shinobi;
use Exception;
use Illuminate\Database\Eloquent\Factory;
use Fusion\Models\User;
use Fusion\Models\Asset;
use Illuminate\Http\UploadedFile;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use Traits\CreatesApplication, Traits\DatabaseAssertions, Traits\SignsIn, WithFaker;

    /**
     * User with admin privileges.
     *
     * @var User
     */
    protected $admin;

    /**
     * Regular user.
     *
     * @var User
     */
    protected $user;

    protected $guest;

    /**
     * Called before each test is run...
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->registerEloquentFactoriesFrom(__DIR__.'/../../fusion/database/definitions');

        activity()->disableLogging();

        Theme::setCurrent('hello');

        // ----------------------------
        // FusionCMS - MiniInstall!
        // ----------------------------

        $container = [
            'user_name'       => 'Jane Doe',
            'user_email'      => 'admin@example.com',
            'user_password'   => 'secret',
        ];

        // 1) Migrate & seed..
        dispatch_now(new \Fusion\Console\Installer\CreateDatabaseTables);

        // 2) Publish module assets..
        dispatch_now(new \Fusion\Console\Installer\PublishModuleAssets);

        // 3) Create default permissions..
        dispatch_now(new \Fusion\Console\Installer\CreatePermissions);

        // 4) Create default roles..
        dispatch_now(new \Fusion\Console\Installer\CreateDefaultUserRoles($container));

        // 5) Create default users
        $this->admin = factory('Fusion\Models\User')->create([
            'name'       => 'Jane Doe',
            'email'      => 'admin@example.com',
            'password'   => bcrypt('secret'),
        ]);

        $this->user = factory('Fusion\Models\User')->create([
            'name'              => 'Ducky Consumer',
            'email'             => 'guest@example.com',
            'password'          => bcrypt('secret'),
            'email_verified_at' => null
        ]);

        $this->guest = app()->make(\Fusion\Models\User::class);

        Shinobi::assign('admin')->to($this->admin);
        // Shinobi::assign('user')->to($this->user);

        // 6) Import settings..
        // Artisan::call('fusion:settings');

        // 7) Empty cache..
        Artisan::call('cache:clear');
        Artisan::call('config:clear');
        // Artisan::call('module:optimize');

        activity()->enableLogging();
    }

    /**
     * Called after each test is run...
     *
     * @return void
     */
    public function tearDown(): void
    {
        // ----------------------------
        // FusionCMS - MiniUninstall!
        // ----------------------------

        // 1) Clean up storage..
        File::deleteDirectory(storage_path('backups'));
        File::deleteDirectory(storage_path('uploads'));

        // 2) Clean up module data..
        File::deleteDirectory(public_path('assets/modules'));
        File::delete(storage_path('app/modules.json'));

        parent::tearDown();
    }

    /**
     * Disable exception handling for the test.
     *
     * @param  array  $except
     * @return $this
     */

    /**
     * @param string $password
     * @param string $hash
     * @param string $message
     * @return \Tests\Foundation\TestCase
     * @throws \Exception
     */
    protected function assertPasswordsMatch($password, $hash, $message = null)
    {
        $this->assertTrue(password_verify($password, $hash), $message ?: 'Passwords do not match');

        return $this;
    }

    /**
     * @param $name
     * @return Asset
     */
    protected function uploadAsset($name)
    {
        $this->actingAs($this->admin)->post('cp/assets/store', [
            'asset' => UploadedFile::fake()->image($name),
        ]);

        return Asset::first();
    }

    protected function registerEloquentFactoriesFrom($path) {
        // dd(get_class_methods(Factory::class), $path);
        app()->make(Factory::class)->load($path);

    }
}
