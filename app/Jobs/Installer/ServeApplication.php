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
