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

use PDO;

class CreateDatabase
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
        try {
            $pdo = new PDO("mysql:host={$this->container['db_host']}", $this->container['db_username'], $this->container['db_password']);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $pdo->query("CREATE DATABASE IF NOT EXISTS {$this->container['db_name']}");
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}
