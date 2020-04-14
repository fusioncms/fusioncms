<?php

namespace Fusion\Console\Installer;

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
