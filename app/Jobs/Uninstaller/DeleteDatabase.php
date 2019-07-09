<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Jobs\Uninstaller;

use PDO;
use Artisan;
use PDOException;

class DeleteDatabase
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        Artisan::call('config:clear');

        try {
            $pdo = new PDO('mysql:host=' . config('database.connections.mysql.host'), config('database.connections.mysql.username'), config('database.connections.mysql.password'));
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $database = app()->environment('testing')
                ? 'fusioncms_testing'
                : config('database.connections.mysql.database');

            $pdo->query('DROP DATABASE IF EXISTS ' . $database);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}
