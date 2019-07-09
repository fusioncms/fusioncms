<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Upgrader;

use Log;
use File;
use Artisan;
use ZipArchive;
use GuzzleHttp\Client;

class DownloadAndExtractRelease
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $this->download();

        $this->extract();
    }

    private function download()
    {
        if (! File::isDirectory(storage_path('temp/upgrade'))) {
            File::makeDirectory(storage_path('temp/upgrade'), 0775, true);
        }

        try {
            $client = new Client;

            $response = $client->post(setting('system.launchpad_api') . '/release/download', [
                'sink'        => storage_path('temp/upgrade/latest.zip'),
                'form_params' => [
                    'token' => setting('system.license_key'),
                ],
            ]);

            return true;
        } catch (Exception $e) {
            Log::error('There was an error trying to download the latest version of FusionCMS: ' . $e->getMessage());

            Artisan::call('up');

            return false;
        }
    }

    protected function extract()
    {
        $zip = new ZipArchive;

        if ($zip->open(storage_path('temp/upgrade/latest.zip'))) {
            $zip->extractTo(storage_path('temp/upgrade/'));
            $zip->close();

            File::delete(storage_path('temp/upgrade/latest.zip'));
        }
    }
}
