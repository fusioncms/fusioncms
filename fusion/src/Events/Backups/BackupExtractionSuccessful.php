<?php

namespace Fusion\Events\Backups;

class BackupExtractionSuccessful
{
    /**
     * @var string
     */
    public $extractionPath;

    public function __construct(string $extractionPath)
    {
        $this->extractionPath = $extractionPath;
    }
}