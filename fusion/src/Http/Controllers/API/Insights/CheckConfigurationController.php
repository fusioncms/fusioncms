<?php

namespace Fusion\Http\Controllers\API\Insights;

use Analytics;
use Exception;
use Spatie\Analytics\Period;
use Fusion\Http\Controllers\Controller;

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
