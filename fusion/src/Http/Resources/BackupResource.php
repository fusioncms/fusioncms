<?php

namespace Fusion\Http\Resources;

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
        $destinations = [];

        $destinations = $statuses->map(function (BackupDestinationStatus $status) {
            $isNewest    = true;
            $destination = $status->backupDestination();
            $backups     = [];

            foreach ($destination->backups() as $backup)
            {
                $backups[] = [
                    'name'     => basename($backup->path(), '.zip'),
                    'happened' => Carbon::parse($backup->date())->diffForHumans(),
                    'size'     => human_filesize($backup->size()),
                    'isNewest' => $isNewest,
                ];

                $isNewest = false;
            }

            return [
                'name'        => $destination->backupName(),
                'disk'        => $destination->diskName(),
                'isReachable' => $destination->isReachable(),
                'isHealthy'   => $status->isHealthy(),
                'amount'      => $destination->backups()->count(),
                'newest'      => isset($backups[0]) ? $backups[0]['happened'] : 'No backups present',
                'size'        => human_filesize($destination->usedStorage(), $decimals = 2),
                'backups'     => $backups,
            ];
        });

        return $destinations;
    }
}
