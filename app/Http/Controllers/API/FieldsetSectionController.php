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

use App\Models\Fieldset;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FieldsetResource;

class FieldsetSectionController extends Controller
{
    public function store(Request $request, $fieldset)
    {
        $fieldset = Fieldset::findOrFail($fieldset);
        $sections = collect($request->sections);

        $attached = $this->getAttachedSections($fieldset, $sections);
        $updated  = $this->getUpdatedSections($fieldset, $sections);
        $detached = $this->getDetachedSections($fieldset, $sections);

        $fieldset = $this->createSections($fieldset, $attached);
        $fieldset = $this->updateSections($fieldset, $updated);
        $fieldset = $this->deleteSections($fieldset, $detached);

        return new FieldsetResource($fieldset);
    }

    protected function getAttachedSections($fieldset, $sections)
    {
        return $sections->filter(function ($section) {
            return ! isset($section['id']);
        });
    }

    protected function getUpdatedSections($fieldset, $sections)
    {
        return $sections->reject(function ($section) {
            return ! isset($section['id']);
        });
    }

    protected function getDetachedSections($fieldset, $sections)
    {
        $existing = $fieldset->sections->pluck('id');
        $saving   = $this->getUpdatedSections($fieldset, $sections)->pluck('id');

        return $existing->diff($saving);
    }

    protected function createSections($fieldset, $sections)
    {
        if ($sections->count()) {
            $sections->each(function ($data) use ($fieldset) {
                $section = $fieldset->sections()->create([
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

        return $fieldset;
    }

    protected function updateSections($fieldset, $sections)
    {
        if ($sections->count()) {
            $sections->each(function ($section) use ($fieldset) {
                $id     = $section['id'];
                $fields = collect($section['fields']);

                unset($section['id']);
                unset($section['fields']);

                $fieldset->sections()->find($id)->update($section);

                $section = $fieldset->sections()->findOrFail($id);

                $attached = $this->getAttachedFields($section, $fields);
                $updated  = $this->getUpdatedFields($section, $fields);
                $detached = $this->getDetachedFields($section, $fields);

                $this->createFields($section, $attached);
                $this->updateFields($section, $updated);
                $this->deleteFields($section, $detached);
            });
        }

        return $fieldset;
    }

    protected function deleteSections($fieldset, $ids)
    {
        if ($ids->count()) {
            $sections = $fieldset->sections()->whereIn('id', $ids)->get();

            $sections->each(function ($section) {
                $section->delete();
            });
        }

        return $fieldset;
    }

    protected function getAttachedFields($fieldset, $fields)
    {
        return $fields->filter(function ($field) {
            return ! isset($field['id']);
        });
    }

    protected function getUpdatedFields($fieldset, $fields)
    {
        return $fields->reject(function ($field) {
            return ! isset($field['id']);
        });
    }

    protected function getDetachedFields($fieldset, $fields)
    {
        if (! $fieldset->fields) {
            return collect();
        }

        $existing = $fieldset->fields->pluck('id');
        $saving   = $this->getUpdatedFields($fieldset, $fields)->pluck('id');

        return $existing->diff($saving);
    }

    protected function createFields($fieldset, $fields)
    {
        if (count($fields)) {
            foreach ($fields as $field) {
                $fieldset->fields()->create([
                    'name'    => $field['name'],
                    'handle'  => $field['handle'],
                    'help'    => $field['help'],
                    'options' => $field['options'],
                    'type'    => $field['type']['handle'],
                ]);
            }
        }

        return $fieldset;
    }

    protected function updateFields($fieldset, $fields)
    {
        if ($fields->count()) {
            $fields->each(function ($field) use ($fieldset) {
                $id            = $field['id'];
                $field['type'] = $field['type']['handle'];

                unset($field['id']);

                $fieldset->fields()
                    ->find($id)
                    ->update($field);
            });
        }

        return $fieldset;
    }

    protected function deleteFields($fieldset, $ids)
    {
        if ($ids->count()) {
            $fields = $fieldset->fields()->whereIn('id', $ids)->get();

            $fields->each(function ($field) {
                $field->delete();
            });
        }

        return $fieldset;
    }
}
