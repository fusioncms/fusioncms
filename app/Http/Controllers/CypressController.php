<?php

namespace App\Http\Controllers;

use Fusion\Models\User;
use Fusion\Facades\Addon;
use Fusion\Facades\Theme;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class CypressController extends Controller
{
    public function __construct()
    {
        $this->registerFactories();
    }

    public function install(Request $request)
    {
        dispatch_now(new \Fusion\Console\Installer\CreateDefaultPermissions());
        dispatch_now(new \Fusion\Console\Installer\CreateDefaultRoles());
        dispatch_now(new \Fusion\Console\Installer\CreateDefaultDisks());

        // Theme::activate('Hello');
        // Addon::discover();
        // Addon::register();
        // Addon::install('Foobar');
        
        Artisan::call('fusion:flush');
        Artisan::call('fusion:sync');

        // Usual suspects...
        $this->createUser(['name' => 'Jane Doe',       'email' => 'admin@example.com'],      'owner');
        $this->createUser(['name' => 'Anthony Admin',  'email' => 'admin-user@example.com'], 'admin');
        $this->createUser(['name' => 'Ducky Consumer', 'email' => 'guest@example.com'],      'user');
        $this->createUser(['name' => 'Unverified',     'email' => 'unverified@example.com'], 'user', false);
    }

    public function uninstall(Request $request)
    {
        // dispatch_now(new \Fusion\Console\Uninstaller\DeleteAddonCache());
        dispatch_now(new \Fusion\Console\Uninstaller\DeleteModelFiles());
    }

    /**
     * Create new user.
     * 
     * @param  \Illuminate\Http\Request $request
     * @return \Fusion\Models\User
     */
    public function newUser(Request $request)
    {
        return $this->createUser($request->input('attributes'));
    }

    public function routes()
    {
        $routes = Route::getRoutes()->getRoutes();

        return collect($routes)
            ->map(function (\Illuminate\Routing\Route $route) {
                return [
                    'name' => $route->getName(),
                    'domain' => $route->getDomain(),
                    'action' => $route->getActionName(),
                    'uri' => $route->uri(),
                    'method' => $route->methods(),
                ];
            })
            ->keyBy('name');
    }

    public function login(Request $request)
    {
        if ($attributes = $request->input('attributes')) {
            $this->registerFactories();

            $query = app($this->userClassName())->query();

            foreach ($attributes as $name => $value) {
                $query->where($name, $value);
            }

            $user = $query->first();
        }

        if (!isset($user)) {
            $user = User::factory()->create(
                $request->input('attributes', [])
            );
        }

        auth()->login($user);

        return $user->setHidden([]);
    }

    public function logout()
    {
        auth()->logout();
    }

    /**
     * Use Model Factory to generate data.
     * 
     * @param  Request $request
     * @return Collection|mixed
     */
    public function factory(Request $request)
    {
        $model      = $request->input('model');
        $times      = intval($request->input('times', 1));
        $attributes = $request->input('attributes', []);

        $collection = app($model)
            ->factory()
            ->times($times)
            ->create($attributes)
            ->each(function ($model) {
                $model->setHidden([]);
            });

        return $collection->count() === 1 ? $collection->first() : $collection;
    }

    /**
     * Run Artisan command.
     * 
     * @param  Request $request
     * @return void
     */
    public function artisan(Request $request)
    {
        Artisan::call(
            $request->input('command'),
            $request->input('parameters', [])
        );
    }

    /**
     * Retrieve csrf_token.
     * 
     * @param  Request $request
     * @return void
     */
    public function csrfToken()
    {
        return response()->json(csrf_token());
    }

    /**
     * Run raw PHP.
     * Note: Use caution!!
     * 
     * @param  Request $request
     * @return JsonResponse
     */
    public function runPhp(Request $request)
    {
        $code = $request->input('command');

        if ($code[-1] !== ';') {
            $code .= ';';
        }

        if (!Str::contains($code, 'return')) {
            $code = 'return ' . $code;
        }

        return response()->json([
            'result' => eval($code),
        ]);
    }

    protected function userClassName()
    {
        return config('auth.providers.users.model');
    }

    /**
     * Register Eloquent Factories
     * [Helper]
     * 
     * @return void
     */
    private function registerFactories()
    {
        Factory::guessFactoryNamesUsing(function (string $modelName) {
            return 'Database\Factories\\'.class_basename($modelName).'Factory';
        });
    }

    /**
     * Generate new user.
     * [Helper]
     * 
     * @return Fusion\Models\User
     */
    private function createUser($attributes = [], $role = null, $verified = true)
    {
        if (isset($attributes['password'])) {
            $attributes['password'] = bcrypt($attributes['password']);
        } else {
            $attributes['password'] = bcrypt('secret');
        }

        $attributes['email_verified_at'] = $verified ? now() : null;

        $role = $role ?: setting('users.default_user_role', 'user');

        return User::factory()
            ->create($attributes)
            ->assignRole($role);
    }
}
