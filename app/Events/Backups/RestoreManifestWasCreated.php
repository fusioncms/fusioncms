<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Events\Backups;

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