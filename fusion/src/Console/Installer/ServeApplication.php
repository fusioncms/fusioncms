<?php

namespace Fusion\Console\Installer;

use Artisan;

class ServeApplication
{
    /**
     * @var bool
     */
    protected $serve;

    /**
     * @var int
     */
    protected $port;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct($serve, $port)
    {
        $this->serve = $serve;
        $this->port  = $port;
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->serve) {
            return Artisan::call('serve', ['--port' => $this->port]);
        }
    }
}
