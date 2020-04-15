<?php

namespace Fusion\Http\Controllers\API\Insights;

use Analytics;
use Spatie\Analytics\Period;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\InsightResource;

class PopularController extends Controller
{
    public function index()
    {
        $data = Analytics::fetchMostVisitedPages(Period::days(30), 10);

        return InsightResource::collection($data);
    }
}
