<?php

namespace Fusion\Jobs\Importer;

use Fusion\Models\Import;
use Fusion\Mail\ImportComplete;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class NotifyUserOfImportComplete implements ShouldQueue
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
        //TODO: update to address eventually..
        Mail::to('admin@example.com')
            ->send(new ImportComplete($this->import));
    }
}
