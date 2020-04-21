<?php

namespace Fusion\Tests\Concerns;

use Fusion\Models\User;
use Illuminate\Support\Facades\File;
use Caffeinated\Themes\Facades\Theme;
use Illuminate\Support\Facades\Artisan;
use Caffeinated\Shinobi\Facades\Shinobi;
use Fusion\Console\Installer\CreatePermissions;
use Fusion\Console\Installer\PublishModuleAssets;
use Fusion\Console\Installer\CreateDatabaseTables;
use Fusion\Console\Installer\CreateDefaultUserRoles;
use Fusion\Console\Installer\PublishFusionResources;

trait InstallsFusion
{
    /**
     * @var string
     */
    protected $name = 'Jane Doe';

    /**
     * @var string
     */
    protected $email = 'admin@example.com';

    /**
     * @var string
     */
    protected $password = 'secret';

    /**
     * Install FusionCMS.
     *
     * @return void
     */
    protected function install()
    {
        Theme::set('hello');

        dispatch_now(new CreateDatabaseTables);
        dispatch_now(new PublishModuleAssets);
        dispatch_now(new CreatePermissions);
        dispatch_now(new CreateDefaultUserRoles([
            'user_name'     => $this->name,
            'user_email'    => $this->email,
            'user_password' => $this->password,
        ]));

        Artisan::call('fusion:sync');
        Artisan::call('fusion:flush');

        activity()->enableLogging();
    }

    /**
     * Uninstall FusionCMS.
     *
     * @return void
     */
    protected function uninstall()
    {
        File::deleteDirectory(storage_path('backups'));
        File::deleteDirectory(storage_path('uploads'));

        File::delete(storage_path('app/modules.json'));
    }

    /**
     * Create a new user account.
     *
     * @param  String  $name
     * @param  String  $email
     * @param  String  $password
     * @param  String|Null  $role
     * @param  Array  $overrides
     *
     * @return Fusion\Models\User
     */
    protected function createUser($name, $email, $password, $role = null, $overrides = [])
    {
        $attributes = [
            'name'     => $name,
            'email'    => $email,
            'password' => bcrypt($password),
        ] + $overrides;

        $user = factory(User::class)->create($attributes);

        if (! is_null($role)) {
            Shinobi::assign($role)->to($user);
        }

        return $user;
    }

    /**
     * Create a new guest account.
     *
     * @return Fusion\Models\User
     */
    protected function createGuest()
    {
        return app()->make(User::class);
    }
}