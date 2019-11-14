<?php

namespace App\Jobs\Importer;

use App\Models\Import;
use App\Models\ImportLog;
use Illuminate\Bus\Queueable;
use App\Jobs\Importer\ProcessImport;
use App\Services\Exports\GoogleExport;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class BeforeImport implements ShouldQueue
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
        // Copy contents of Google spreadsheet locally..
        (new GoogleExport($this->import->source))->store("imports/{$this->import->handle}.csv");

        // Make backup of affect tables, if requested..
        if ($this->import->backup) {
            $this->saveBackup();
        }

        // Now, run the actual import!
        ProcessImport::dispatchNow($this->import);
    }

    /**
     * Save backup.
     * 
     * @return void
     */
    private function saveBackup()
    {

    }
}
