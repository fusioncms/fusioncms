<?php

namespace App\Jobs\Importer;

use App\Models\Import;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Excel;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Jobs\Importer\NotifyUserOfImportComplete;

class RunImport implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var Import
     */
    protected $import;

    /**
     * Create a new job instance.
     *
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
                new NotifyUserOfImportComplete($this->import)
            ]);;
    }
}
