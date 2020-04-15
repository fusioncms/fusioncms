<?php

namespace Fusion\Http\Controllers\API;

use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Spatie\Activitylog\Models\Activity;
use Fusion\Http\Resources\ActivityResource;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $activities = Activity::orderBy('created_at', 'desc')->paginate(10);

        return ActivityResource::collection($activities);
    }
}
