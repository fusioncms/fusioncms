<?php

namespace Fusion\Services\Routers;

use Fusion\Models\Matrix;
use Illuminate\Http\Request;
use Fusion\Services\Builders\Collection;
use Illuminate\Support\Facades\Gate;

class EntryRouter extends Router
{

    public function handle(Request $request)
    {
        $collections = Matrix::where('type', 'collection')
            ->where('route', '<>', '')
            ->where('template', '<>', '')
            ->get();

        foreach ($collections as $collection) {
            $found = $this->matchRoute($collection->route, $request);

            if ($found === false) {
                continue 1;
            }

            // Eager load our relatable fields
            $relationships = [];

            foreach ($collection->fieldset->fields as $field) {
                $fieldtype = fieldtypes()->get($field->type);

                if ($fieldtype->hasRelationship()) {
                    $relationships[] = $field->handle;
                }
            }

            $model  = (new Collection($collection->handle))->make();
            $entry  = $model->with($relationships)->where('slug', $found->parameter('slug'))->first();

            if (is_null($entry)) {
                continue 1;
            }

            if (!$entry->status) {
                if (Gate::denies('access.admin') || !request()->has('preview')) {
                    continue 1;
                }
            }

            $data = $this->bindRouteData($collection->route, $request, [
                'collection' => $collection,
                'entry'      => $entry,
            ]);

            return view($collection->template, $data);
        }
    }
}
