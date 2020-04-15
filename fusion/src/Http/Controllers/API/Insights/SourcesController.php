<?php

namespace Fusion\Http\Controllers\API\Insights;

use Analytics;
use Spatie\Analytics\Period;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\InsightResource;

class SourcesController extends Controller
{
    public function index()
    {
        $response = Analytics::performQuery(
            Period::days(30),
            'ga:sessions',
            ['dimensions' => 'ga:source', 'sort' => '-ga:sessions']
        );

        $data = collect($response['rows'] ?? [])->map(function (array $row) {
            return [
                'source'   => $row[0],
                'sessions' => $row[1],
            ];
        });

        return InsightResource::collection($data);
    }
}
