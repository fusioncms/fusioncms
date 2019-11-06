<?php

namespace App\Mail;

use App\Models\Import;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ImportComplete extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Import record.
     * 
     * @var App\Models\Import
     */
    protected $import;

    /**
     * Create a new message instance.
     *
     * @param  Import $import
     * @return void
     */
    public function __construct(Import $import)
    {
        $this->import = $import;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.imports.complete');
    }
}
