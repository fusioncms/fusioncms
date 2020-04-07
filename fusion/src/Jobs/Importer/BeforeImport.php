<?php

namespace Fusion\Jobs\Importer;

use Exception;
use Fusion\Models\Import;
use Fusion\Models\ImportLog;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Excel;
use Illuminate\Bus\Queueable;
use Fusion\Services\Exports\GoogleExport;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Fusion\Jobs\Importer\NotifyUserOfImportComplete;

class BeforeImport implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var Import
     */
    protected $import;

    /**
     * @var ImportLog
     */
    protected $log;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Import $import)
    {
        $this->import = $import;
        $this->log    = ImportLog::create([
            'import_id' => $import->id,
            'status'    => 'setup'
        ]);
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // Copy contents of Google spreadsheet locally..
        (new GoogleExport($this->import->source))->store("imports/{$this->import->handle}.csv");

        // Make backup of affect tables, if requested..
        if ($this->import->backup) {
            $this->saveBackup();
        }

        // Now, run the actual import!
        $this->runImport();
    }

    /**
     * Save backup.
     *
     * @return void
     */
    private function saveBackup()
    {
        //TODO: record log information (via HasCustomLogger trait)
        // $this->info("Starting database backup.");
        // $this->info("Finished database backup successfully.");
    }

    /**
     * Run the actual import!
     *
     * @return void
     */
    private function runImport()
    {
        $name   = Str::singular($this->import->module);
        $name   = ucwords($name);
        $module = "Fusion\\Services\\Imports\\{$name}Import";

        (new $module($this->import, $this->log))
            ->queue("imports/{$this->import->handle}.csv", null, Excel::CSV)
            ->onQueue('imports')
            ->chain([
                new NotifyUserOfImportComplete($this->import)
            ]);
    }
}
