<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Resources;

use Illuminate\Support\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Spatie\Backup\Tasks\Monitor\BackupDestinationStatus;
use Spatie\Backup\Tasks\Monitor\BackupDestinationStatusFactory;

class BackupResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $backupConfig = config('backup.monitor_backups');
        $statuses     = BackupDestinationStatusFactory::createForMonitorConfig($backupConfig);
        
        $rows = $statuses->map(function (BackupDestinationStatus $status) {
            $destination  = $status->backupDestination();
            $newestBackup = $destination->newestBackup();

            return [
                'name'        => $destination->backupName(),
                'disk'        => $destination->diskName(),
                'isReachable' => $destination->isReachable(),
                'isHealthy'   => $status->isHealthy(),
                'amount'      => $destination->backups()->count(),
                'newest'      => $newestBackup ? \Illuminate\Support\Carbon::parse($newestBackup->date())->diffForHumans() : 'No backups present',
                'usedStorage' => human_filesize($destination->usedStorage(), $decimals = 2)
            ];
        });

        return $rows;
    }
}
