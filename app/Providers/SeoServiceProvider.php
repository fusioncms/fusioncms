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

use App\Foundation\Seo\SEO;
use App\Foundation\Seo\SEOMetadata;
use Illuminate\Support\ServiceProvider;

class SeoServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->setSEO();
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);

        $this->app->singleton('seo.metadata', function ($app) {
            return new SEOMetadata();
        });

        $this->app->singleton('seo.seo', function ($app) {
            return new SEO();
        });
    }

    /**
     * Provided services by the service provider.
     *
     * @return array
     */
    public function provides()
    {
        return [
            'seo.metadata',
            'seo.seo',
        ];
    }

    /**
     * Set the defualt SEO metadata.
     */
    protected function setSEO()
    {
        if (app_installed()) {
            seo()->setFormat(setting('seo.seo_title_format'));
            seo()->setTitle(setting('system.website_title'));
            seo()->setDescription(setting('seo.seo_description'));
            seo()->setKeywords(setting('seo.seo_keywords'));
        }
    }
}
