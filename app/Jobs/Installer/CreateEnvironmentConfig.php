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
            '##APP_KEY##'      => str_random(32),
            '##APP_CODENAME##' => $this->generateCodeName(),
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

    /**
     * Generate a random code name.
     *
     * @return string
     */
    private function generateCodeName()
    {
        $adjectives = $this->getCSV('adjectives.csv');
        $vocabulary = $this->getCSV('astronomy.csv');

        $adj = $adjectives[mt_rand(0, count($adjectives) - 1)];
        $adj = strtolower($adj);
        $adj = str_replace(' ', '-', $adj);

        $voc = $vocabulary[mt_rand(0, count($vocabulary) - 1)];
        $voc = strtolower($voc);
        $voc = str_replace(' ', '-', $voc);

        return $adj . '-' . $voc;
    }

    /**
     * Load the specified CSV file contents.
     *
     * @param  string  $file
     * @return array
     */
    private function getCSV($file)
    {
        $results = [];

        if (($handle = fopen(resource_path('datasets/' . $file), 'r')) !== false) {
            while (($data = fgetcsv($handle, 1000, ',')) !== false) {
                $results[] = $data[0];
            }

            fclose($handle);
        }

        return $results;
    }
}
