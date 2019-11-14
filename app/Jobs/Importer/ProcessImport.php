<?php

namespace App\Jobs\Importer;

use App\Models\Import;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Excel;
use Illuminate\Bus\Queueable;
// use App\Jobs\Importer\AftrImport;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Jobs\Importer\NotifyUserOfImportComplete;

class ProcessImport
{
    use Dispatchable, Queueable;

    /**
     * @var App\Models\Import
     */
    protected $import;

    /**
     * Create a new job instance.
     *
     * @param  App\Models\Import
     * @param  array
     * @return void
     */
    public function __construct(Import $import)
    {
        $this->import = $import;
    }
    
    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $name   = Str::singular($this->import->module);
        $name   = ucwords($name);
        $module = "App\\Services\\Imports\\{$name}Import";

        (new $module($this->import))
            ->queue("imports/{$this->import->handle}.csv", null, Excel::CSV)
            ->onQueue('imports')
            ->chain([
                // new AfterImport($this->import, $this->settings),
                new NotifyUserOfImportComplete($this->import)
            ]);
    }
}
