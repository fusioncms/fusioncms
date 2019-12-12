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

class VisitorsController extends Controller
{
    public function index()
    {
        $data = Analytics::fetchTotalVisitorsAndPageViews(Period::days(30));

        return new InsightResource($data);
    }
}
