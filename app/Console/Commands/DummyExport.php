<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\Exports\DummyExport as Export;

class DummyExport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'export:dummy';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Export some dummy data to an XLSX.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        (new Export)->store($filename = 'exports/dummyusers.csv');

        $this->info("File has been downloaded to: `storage/app/public/{$filename}");
    }
}
