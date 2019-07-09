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
use App\Http\Resources\InsightResource;

class CheckConfigurationController extends Controller
{
    public function __invoke()
    {
        $message = 'Credentials seem to be valid.';
        $status  = 'OK';

        try {
            Analytics::fetchTotalVisitorsAndPageViews(Period::days(1));
        } catch (Exception $e) {
            $message = $e->getMessage();
            $status  = 'Failed';
        }

        return new InsightResource(['status' => $status, 'message' => $message]);
    }
}
