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

use App\Models\Matrix;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\MatrixResource;

class MatrixSectionController extends Controller
{
    public function store(Request $request, $matrix)
    {
        $matrix   = Matrix::findOrFail($matrix);
        $sections = collect($request->sections);

        $attached = $this->getAttachedSections($matrix, $sections);
        $updated  = $this->getUpdatedSections($matrix, $sections);
        $detached = $this->getDetachedSections($matrix, $sections);

        $matrix = $this->createSections($matrix, $attached);
        $matrix = $this->updateSections($matrix, $updated);
        $matrix = $this->deleteSections($matrix, $detached);

        return new MatrixResource($matrix);
    }

    protected function getAttachedSections($matrix, $sections)
    {
        return $sections->filter(function ($section) {
            return ! isset($section['id']);
        });
    }

    protected function getUpdatedSections($matrix, $sections)
    {
        return $sections->reject(function ($section) {
            return ! isset($section['id']);
        });
    }

    protected function getDetachedSections($matrix, $sections)
    {
        $existing = $matrix->sections->pluck('id');
        $saving   = $this->getUpdatedSections($matrix, $sections)->pluck('id');

        return $existing->diff($saving);
    }

    protected function createSections($resource, $sections)
    {
        if ($sections->count()) {
            $sections->each(function ($data) use ($resource) {
                $section = $resource->sections()->create([
                    'name'        => $data['name'],
                    'handle'      => $data['handle'],
                    'description' => $data['description'],
                    'placement'   => $data['placement'],
                    'order'       => $data['order'],
                ]);

                if (isset($data['fields'])) {
                    $this->createFields($section, $data['fields']);
                }
            });
        }

        return $resource;
    }

    protected function updateSections($resource, $sections)
    {
        if ($sections->count()) {
            $sections->each(function ($section) use ($resource) {
                $id     = $section['id'];
                $fields = collect($section['fields']);

                unset($section['id']);
                unset($section['fields']);

                $resource->sections()->find($id)->update($section);

                $section = $resource->sections()->findOrFail($id);

                $attached = $this->getAttachedFields($section, $fields);
                $updated  = $this->getUpdatedFields($section, $fields);
                $detached = $this->getDetachedFields($section, $fields);

                $this->createFields($section, $attached);
                $this->updateFields($section, $updated);
                $this->deleteFields($section, $detached);
            });
        }

        return $resource;
    }

    protected function deleteSections($resource, $ids)
    {
        if ($ids->count()) {
            $sections = $resource->sections()->whereIn('id', $ids)->get();

            $sections->each(function ($section) {
                $section->delete();
            });
        }

        return $resource;
    }

    protected function getAttachedFields($resource, $fields)
    {
        return $fields->filter(function ($field) {
            return ! isset($field['id']);
        });
    }

    protected function getUpdatedFields($resource, $fields)
    {
        return $fields->reject(function ($field) {
            return ! isset($field['id']);
        });
    }

    protected function getDetachedFields($resource, $fields)
    {
        if (! $resource->fields) {
            return collect();
        }

        $existing = $resource->fields->pluck('id');
        $saving   = $this->getUpdatedFields($resource, $fields)->pluck('id');

        return $existing->diff($saving);
    }

    protected function createFields($resource, $fields)
    {
        if (count($fields)) {
            foreach ($fields as $field) {
                $resource->fields()->create([
                    'name'    => $field['name'],
                    'handle'  => $field['handle'],
                    'help'    => $field['help'],
                    'options' => $field['options'],
                    'type'    => $field['type']['handle'],
                ]);
            }
        }

        return $resource;
    }

    protected function updateFields($resource, $fields)
    {
        if ($fields->count()) {
            $fields->each(function ($field) use ($resource) {
                $id            = $field['id'];
                $field['type'] = $field['type']['handle'];

                unset($field['id']);

                $resource->fields()
                    ->find($id)
                    ->update($field);
            });
        }

        return $resource;
    }

    protected function deleteFields($resource, $ids)
    {
        if ($ids->count()) {
            $fields = $resource->fields()->whereIn('id', $ids)->get();

            $fields->each(function ($field) {
                $field->delete();
            });
        }

        return $resource;
    }
}
