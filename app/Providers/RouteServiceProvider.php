<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Providers;

use Storage;
use Illuminate\Support\Facades\Route;
use Spatie\Backup\BackupDestination\Backup;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        Route::pattern('slug', '[a-z0-9-]+');
        Route::pattern('handle', '[a-z0-9_]+');

        parent::boot();

        // Note: route binding for backup removal
        // TODO: point to correct disk if it changes from local storage
        Route::bind('backup', function ($filename) {
            return new Backup(Storage::disk('public'), "backups/{$filename}.zip");
        });
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        // Map "databtable" routes
        Route::group([
            'middleware' => 'api',
            'namespace'  => $this->namespace . '\DataTable',
            'prefix'     => 'datatable',
        ], function ($router) {
            require base_path('routes/datatable.php');
        });

        // Map "web" route files
        $this->mapWebRoutes(base_path('routes/web/web.php'));
        $this->mapWebRoutes(base_path('routes/web/files.php'));
        $this->mapWebRoutes(base_path('routes/web/users.php'));

        // Map "api" route files
        $this->mapAPIRoutes(base_path('routes/api/api.php'));
        $this->mapAPIRoutes(base_path('routes/api/activity.php'));
        $this->mapAPIRoutes(base_path('routes/api/backups.php'));
        $this->mapAPIRoutes(base_path('routes/api/fieldsets.php'));
        $this->mapAPIRoutes(base_path('routes/api/filemanager.php'));
        $this->mapAPIRoutes(base_path('routes/api/forms.php'));
        $this->mapAPIRoutes(base_path('routes/api/importer.php'));
        $this->mapAPIRoutes(base_path('routes/api/insights.php'));
        $this->mapAPIRoutes(base_path('routes/api/matrix.php'));
        $this->mapAPIRoutes(base_path('routes/api/settings.php'));
        $this->mapAPIRoutes(base_path('routes/api/taxonomy.php'));
        $this->mapAPIRoutes(base_path('routes/api/themes.php'));
        $this->mapAPIRoutes(base_path('routes/api/users.php'));
    }

    /**
     * Map "web" routes.
     *
     * @param  string  $path
     * @return void
     */
    private function mapWebRoutes($path)
    {
        Route::group([
            'middleware' => 'web',
            'namespace'  => $this->namespace . '\Web',
        ], function ($router) use ($path) {
            require $path;
        });
    }

    /**
     * Map "api" routes.
     *
     * @param  string  $path
     * @return void
     */
    private function mapAPIRoutes($path)
    {
        Route::group([
            'middleware' => ['api', 'auth:api'],
            'namespace'  => $this->namespace . '\API',
            'prefix'     => 'api',
        ], function ($router) use ($path) {
            require $path;
        });
    }
}
