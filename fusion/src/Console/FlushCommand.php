<?php

namespace Fusion\Console;

use Illuminate\Console\Command;

class FlushCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:flush';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Flush the various FusionCMS cache';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('cache:clear');
        $this->call('view:clear');
        $this->call('route:clear');
        $this->call('module:optimize');
    }
}