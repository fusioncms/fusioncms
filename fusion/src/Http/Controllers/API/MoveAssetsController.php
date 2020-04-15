<?php

namespace Fusion\Http\Controllers\Api;

use Fusion\Models\Asset;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;

class MoveAssetsController extends Controller
{
    public function move(Request $request)
    {
        Asset::whereIn('id', $request->asset_ids)->update(['directory_id' => $request->directory_id]);
    }
}
