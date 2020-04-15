<?php

namespace Fusion\Http\Controllers\API;

use ParseError;
use Fusion\Models\Matrix;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\EntryResource;
use Fusion\Services\Builders\Collection;
use Fusion\Http\Requests\CollectionRequest;

class CollectionController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  string  $matrix
     * @return JsonResponse
     */
    public function index($matrix)
    {
        $matrix  = Matrix::where('slug', $matrix)->firstOrFail();
        $model   = (new Collection($matrix->handle))->make();
        $entries = $model->get()->paginate(25);

        return EntryResource::collection($entries);
    }

    /**
     * Display the specified resource.
     *
     * @param  \Fusion\Models\Matrix  $matrix
     * @return \Illuminate\Http\Response
     */
    public function show($matrix, $id)
    {
        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $model  = (new Collection($matrix->handle))->make();
        $entry  = $model->findOrFail($id);

        return new EntryResource($entry);
    }

    /**
     * Store newly created record in storage.
     *
     * @param  \Fusion\Http\Requests\CollectionRequest $request
     * @param  string $matrixSlug
     * @return \Fusion\Http\Resources\EntryResource
     */
    public function store(CollectionRequest $request, $matrixSlug)
    {
        $entry  = $request->model->create($request->validated());
        $matrix = $request->matrix;

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($entry, $relationship);
        }

        // Autogenerate name/slug
        if (! $matrix->show_name_field) {
            $entry->name = $this->compileBladeString($matrix->name_format, $entry);
            $entry->slug = Str::slug($entry->name);

            $entry->save();
        }

        return new EntryResource($entry);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Fusion\Http\Requests\CollectionRequest $request
     * @param  string  $matrix
     * @param  integer $id
     * @return \Fusion\Http\Resources\EntryResource
     */
    public function update(CollectionRequest $request, $matrixSlug, $id)
    {
        $matrix = $request->matrix;
        $entry  = $request->model->findOrFail($id);
        $entry->update($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($entry, $relationship);
        }

        if (! $matrix->show_name_field) {
            $entry->name = $this->compileBladeString($matrix->name_format, $entry);
            $entry->slug = Str::slug($entry->name);

            $entry->save();
        }

        return new EntryResource($entry);
    }

    /**
     * Destroy resource from storage.
     *
     * @param  Request  $request
     * @param  string   $matrixSlug
     * @param  integer  $id
     * @return void
     */
    public function destroy(Request $request, $matrixSlug, $id)
    {
        $this->authorize('entry.destroy');

        $matrix = Matrix::where('slug', $matrixSlug)->firstOrFail();
        $model  = (new Collection($matrix->handle))->make();
        $entry  = $model->findOrFail($id);

        if(isset($matrix->fieldset)) {
            foreach ($matrix->fieldset->relationships() as $relationship) {
                fieldtypes()->get($relationship->type)->destroyRelationship($entry, $relationship);
            }
        }

        $entry->delete();
    }

    /**
     * Compile a blade string in a safe and controlled manner.
     *
     * @param  string  $string
     * @param  Entry  $entry
     * @return string
     */
    protected function compileBladeString($string, $entry)
    {
        preg_match_all('/\{(.*?)\}/', $string, $matches);

        foreach ($matches[1] as $index => $match) {
            try {
                $reference = explode('->', $match)[0];

                if (in_array($reference, $entry->getReferences())) {
                    ob_start();

                    eval('echo $entry->'.$match.';');

                    $replace[$index] = ob_get_clean();
                } else {
                    $replace[$index] = $matches[0][$index];
                }
            } catch (ParseError $e) {
                ob_get_clean();

                $replace[$index] = $match;
            }
        }

        $compiled = str_replace($matches[0], $replace, $string);

        return $compiled;
    }
}
