<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\Api;

use App\Models\Asset;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MoveAssetsController extends Controller
{
    public function move(Request $request)
    {
        Asset::whereIn('id', $request->asset_ids)->update(['directory_id' => $request->directory_id]);
    }
}
