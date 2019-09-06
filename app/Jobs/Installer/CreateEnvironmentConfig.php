<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Installer;

use File;
use Config;
use Artisan;
use App\Services\Haiku;
use Illuminate\Support\Str;

class CreateEnvironmentConfig
{
    /**
     * @var array
     */
    protected $container;

    /**
     * @var \App\Services\Haiku
     */
    protected $haiku;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(array $container)
    {
        $this->haiku     = new Haiku;
        $this->container = $container;
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        if (! app()->environment('testing')) {
            $this->createConfigFile();
        }

        Artisan::call('cache:clear');
        Artisan::call('config:cache');
    }

    /**
     * Creates and populates the database config file.
     *
     * @return null
     */
    protected function createConfigFile()
    {
        if ($this->container['dev']) {
            $env = 'env.dev.stub';
        } else {
            $env = 'env.stub';
        }

        $contents = $this->findAndReplace($env, [
            '##APP_KEY##'      => Str::random(32),
            '##APP_CODENAME##' => $this->haiku->make(),
            '##APP_URL##'      => $this->container['app_url'],
            '##DB_DRIVER##'    => 'mysql',
            '##DB_HOST##'      => $this->container['db_host'],
            '##DB_NAME##'      => $this->container['db_name'],
            '##DB_USERNAME##'  => $this->container['db_username'],
            '##DB_PASSWORD##'  => $this->container['db_password'],
            '##DB_CHARSET##'   => $this->container['db_charset'],
            '##DB_COLLATION##' => $this->container['db_collation'],
        ]);

        File::put(base_path('.env'), $contents);
    }

    /**
     * Find and replace placeholders in file.
     *
     * @param  string  $file
     * @param  array   $data
     * @return mixed
     */
    protected function findAndReplace($file, $data)
    {
        return strtr(File::get(resource_path('stubs/' . $file)), $data);
    }
}
