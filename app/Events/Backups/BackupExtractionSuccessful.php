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