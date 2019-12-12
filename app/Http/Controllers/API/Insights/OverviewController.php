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
use Carbon\Carbon;
use Spatie\Analytics\Period;
use App\Http\Controllers\Controller;
use App\Http\Resources\InsightResource;

class OverviewController extends Controller
{
    public function index()
    {
        // $daily = Analytics::fetchTotalVisitorsAndPageViews(Period::days(30));

        $stats         = Analytics::performQuery(Period::days(30), 'ga:users,ga:pageviews,ga:avgSessionDuration,ga:bounceRate');
        $dailyResponse = Analytics::performQuery(Period::days(30), 'ga:users,ga:pageviews,ga:bouncerate', ['dimensions' => 'ga:date']);
        $daily         = collect($dailyResponse['rows'] ?? [])->map(function (array $row) {
            return [
                'date' => Carbon::createFromFormat('Ymd', $row[0]),
                'visitors'   => (int) $row[1],
                'pageViews'  => (int) $row[2],
                'bounceRate' => (int) $row[3],
            ];
        });

        $overview = collect($stats['rows'] ?? [])->map(function (array $row) use ($daily) {
            return [
                'totalVisitors'          => $row[0],
                'totalPageViews'         => $row[1],
                'averageSessionDuration' => $row[2],
                'bounceRate'             => $row[3],
                'daily'                  => $daily,
            ];
        })->first();

        return new InsightResource($overview);
    }
}
