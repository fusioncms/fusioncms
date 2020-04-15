<?php

namespace Fusion\Events\Backups;

use Spatie\Backup\Tasks\Backup\Manifest;

class RestoreManifestWasCreated
{
    /**
     * @var Manifest
     */
    public $manifest;

    public function __construct(Manifest $manifest)
    {
        $this->manifest = $manifest;
    }
}