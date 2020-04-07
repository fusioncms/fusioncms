<?php


namespace Fusion\Console\Commands;

use Illuminate\Console\Command;

class Flush extends Command
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
    protected $description = 'FusionCMS Flush (cache/view clear and optimize)';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('cache:clear');
        $this->call('view:clear');
        $this->call('module:optimize');
    }
}
