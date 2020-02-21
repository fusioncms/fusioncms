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
use Exception;
use Spatie\Analytics\Period;
use App\Http\Controllers\Controller;

class CheckConfigurationController extends Controller
{
    public function index()
    {
        try {
            if (! empty(setting('google_analytics.analytic_view_id')) and ! empty(setting('google_analytics.analytic_credentials'))) {
                Analytics::fetchTotalVisitorsAndPageViews(Period::days(1));

                return response()->json(['status' => 'OK']);
            }
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'failed',
                'message' => $exception->getMessage(),
            ]);
        }
    }
}
