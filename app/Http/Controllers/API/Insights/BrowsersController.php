<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API\Insights;

use Analytics;
use Spatie\Analytics\Period;
use App\Http\Controllers\Controller;
use App\Http\Resources\InsightResource;

class BrowsersController extends Controller
{
    public function index()
    {
        $response = Analytics::performQuery(
            Period::days(30),
            'ga:sessions',
            ['dimensions' => 'ga:browser', 'sort' => '-ga:sessions']
        );

        $data = collect($response['rows'] ?? [])->map(function (array $row) {
            return [
                'browser'  => $row[0],
                'sessions' => $row[1],
            ];
        });

        return InsightResource::collection($data);
    }
}
