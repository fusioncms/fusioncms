<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class CypressServiceProvider extends ServiceProvider
{
	public function boot()
	{
		if ($this->app->environment('testing')) {
			$this->routes(function () {
				Route::middleware('web')
					->namespace('App\\Http\\Controllers')
					->group(base_path('routes/cypress.php'));
				});
		}
	}
}