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

use SplFileObject;
use LimitIterator;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ImportLogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $response             = parent::toArray($request);
        $response['happened'] = Carbon::parse($response['created_at'])->diffForHumans();

        // Query Parameters..
        $from  = Arr::get($request->query(), 'from', 0);
        $limit = Arr::get($request->query(), 'limit', 25);

        // Read log file with iterator..
        $logFile      = new SplFileObject(storage_path($this->log_file));
        $fileIterator = new LimitIterator($logFile, $from, $limit);

        // Number of lines in log file
        $logFile->seek($logFile->getSize());
        $totalLines = $logFile->key();

        $response['logs'] = [
            'data'  => [],
            'from'  => $from,
            'limit' => $limit,
            'total' => $totalLines,
        ];

        foreach ($fileIterator as $line) {
            if ($line) {
                $log = json_decode($line, true);
                $log['happened'] = Carbon::parse($log['datetime'])->diffForHumans();
                
                $response['logs']['data'][] = $log;
            }
        }

        return $response;
    }
}
