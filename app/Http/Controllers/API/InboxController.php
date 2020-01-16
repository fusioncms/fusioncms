<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers\API;

use App\Models\Form;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\InboxResource;

class InboxController extends Controller
{
    public function index($filter = 'all', $slug = null)
    {
        $responses = collect();
        
        switch($filter) {
            case 'starred':
                break;
            case 'closed':
                break;
            case 'trash':
                break;
            case 'archived':
                break;
            case 'form':
                $form      = Form::where('slug', $slug)->firstOrFail();
                $responses = $form->responses;
                break;
            default:
                $forms     = Form::get();

                foreach ($forms as $form) {
                    $responses = $responses->merge($form->responses);
                }
        }

        return InboxResource::collection($responses);
    }
}
