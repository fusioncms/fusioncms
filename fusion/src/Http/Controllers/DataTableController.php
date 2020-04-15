<?php

namespace Fusion\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\Builder;
use Spatie\QueryBuilder\{AllowedFilter,QueryBuilder};

abstract class DataTableController extends Controller
{
    /**
     * Default pagination items/page.
     *
     * @var string
     */
    protected const PER_PAGE = 50;

    /**
     * Default pagination page number.
     *
     * @var string
     */
    protected const PAGE_NUM = 1;

    /**
     * Return an instance of the query builder for the resource.
     */
    abstract public function builder();

    /**
     * Constructor.
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
    protected function getDisplayableColumns()
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
    protected function getCustomColumnNames()
    {
        return [];
    }

    /**
     * Get the filterable columns.
     *
     * @return array
     */
    protected function getFilterable()
    {
        return [];
    }

    /**
     * Get the relationship includes.
     *
     * @return array
     */
    protected function getRelationships()
    {
        return [];
    }

    /**
     * Get the filterable columns.
     *
     * @return array
     */
    protected function getAllowedFilters()
    {
        return AllowedFilter::callback('search', function (Builder $query, $value) {
            return $query->where(function(Builder $query) use ($value) {
                foreach ($this->getFilterable() as $field) {
                    $query->orWhere($field, 'LIKE', "%$value%");
                }
            });
        });


    }

    /**
     * Get the sortable columns.
     *
     * @return array
     */
    protected function getSortable()
    {
        return $this->getDisplayableColumns();
    }

    /**
     * Get the default sortable column.
     *
     * @return string
     */
    protected function getDefaultSort()
    {
        return current($this->getSortable());
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
        try {
            /**
             * Using Spatie's `laravel-query-builder` package.
             * https://docs.spatie.be/laravel-query-builder/v2/introduction/
             */
            return QueryBuilder::for($this->builder)

                // Allowed selectable fields   (e.g. fields['name']=John)
                ->allowedFields($this->getDisplayableColumns())

                // Allowed filterable columns  (e.g. filter['search']=foo)
                ->allowedFilters($this->getAllowedFilters())

                // Allowed relationship includes (e.g. include=posts)
                ->allowedIncludes($this->getRelationships())

                // Allowed sortable columns    (e.g. sort=name)
                ->allowedSorts($this->getSortable())

                // Default sortable column
                ->defaultSort($this->getDefaultSort())

                // Pagination
                // - perPage (defaults to `PER_PAGE`)
                // - page    (defaults to `PAGE_NUM`)
                ->paginate(
                    $request->query('perPage', self::PER_PAGE),
                    self::getDisplayableColumns(),
                    get_class($this),
                    $request->query('page', self::PAGE_NUM)
                );
        } catch (QueryException $exception) {
            Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);

            return [];
        }
    }
}
