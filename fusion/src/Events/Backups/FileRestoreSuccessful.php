<?php

namespace Fusion\Events\Backups;

class FileRestoreSuccessful
{
    /**
     * @var array
     */
    public $filesToCopy;

    public function __construct(array $filesToCopy)
    {
        $this->filesToCopy = $filesToCopy;
    }
}