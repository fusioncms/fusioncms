<?php

namespace Fusion\Console\Installer;

use File;
use Config;
use Artisan;
use Illuminate\Support\Str;

class CreateEnvironmentConfig
{
    /**
     * @var array
     */
    protected $container;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(array $container)
    {
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
        return strtr(File::get(fusion_path('/stubs/' . $file)), $data);
    }
}
