<?php


namespace Fusion\Console\Commands;

use Illuminate\Console\Command;

class DumpAutoload extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dump-autoload';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Regenerate framework autoload files';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        system('composer dump-autoload');
    }
}
