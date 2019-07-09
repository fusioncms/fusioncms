<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\Builder;

abstract class DataTableController extends Controller
{
    /**
     * @var \Illuminate\Database\Eloquent\Builder
     */
    protected $builder;

    /**
     * Return an instance of the query builder for the resource.
     */
    abstract public function builder();

    /**
     * Create a new DataTableController instance.
     */
    public function __construct()
    {
        $builder = $this->builder();

        if (! $builder instanceof Builder) {
            throw new Exception('Entity builder not instance of Builder');
        }

        $this->builder = $builder;
    }

    /**
     * Return the necessary data points for datatables.
     */
    public function index(Request $request)
    {
        return response()->json([
            'displayable'  => array_values($this->getDisplayableColumns()),
            'sortable'     => array_values($this->getSortable()),
            'filterable'   => array_values($this->getFilterable()),
            'column_names' => $this->getCustomColumnNames(),
            'records'      => $this->getRecords($request),
        ]);
    }

    /**
     * Destroy the given resource.
     *
     * @param  int  $id
     * @param  \Illuminate\Http\Request  $request
     */
    public function destroy($id, Request $request)
    {
        $this->builder->find($id)->delete();
    }

    /**
     * Get the displayable columns.
     *
     * @return array
     */
    public function getDisplayableColumns()
    {
        return array_diff(
            $this->getDatabaseColumnNames(),
            $this->builder->getModel()->getHidden()
        );
    }

    /**
     * Get the mapped custom column names.
     *
     * @return array
     */
    public function getCustomColumnNames()
    {
        return [];
    }

    /**
     * Get the sortable columns.
     *
     * @return array
     */
    public function getSortable()
    {
        return $this->getDisplayableColumns();
    }

    /**
     * Get the filterable columns.
     *
     * @return array
     */
    public function getFilterable()
    {
        return $this->getDisplayableColumns();
    }

    /**
     * Get the base column names.
     *
     * @return array
     */
    protected function getDatabaseColumnNames()
    {
        return Schema::getColumnListing($this->builder->getModel()->getTable());
    }

    /**
     * Perform the necessary queries to fetch our records.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    protected function getRecords(Request $request)
    {
        $builder = $this->builder;

        if ($this->hasFilterQuery($request)) {
            $builder = $this->buildFilter($builder, $request);
        }

        try {
            return $this->builder
                ->orderBy($request->orderBy, $request->orderDirection)
                ->paginate($request->limit);
        } catch (QueryException $e) {
            return [];
        }
    }

    /**
     * Determine if the request contains a filter query.
     *
     * @param  \Illuminate\Http\Request
     * @return bool
     */
    protected function hasFilterQuery(Request $request)
    {
        return count(array_filter($request->only(['column', 'operator', 'value']))) === 3;
    }

    /**
     * Build and return our filter query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function buildFilter(Builder $builder, Request $request)
    {
        $queryParts = $this->resolveQueryParts($request->operator, $request->value);

        return $builder->where($request->column, $queryParts['operator'], $queryParts['value']);
    }

    /**
     * Resolve our query operator for filtering.
     *
     * @param  string  $operator
     * @param  string  $value
     * @return array
     */
    protected function resolveQueryParts($operator, $value)
    {
        return array_get([
            'equals' => [
                'operator' => '=',
                'value'    => $value,
            ],
            'contains' => [
                'operator' => 'LIKE',
                'value'    => "%{$value}%",
            ],
            'starts_with' => [
                'operator' => 'LIKE',
                'value'    => "{$value}%",
            ],
            'ends_with' => [
                'operator' => 'LIKE',
                'value'    => "%{$value}",
            ],
            'greater_than' => [
                'operator' => '>',
                'value'    => $value,
            ],
            'lesser_than' => [
                'operator' => '<',
                'value'    => $value,
            ],
        ], $operator);
    }
}
