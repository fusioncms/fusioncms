<?php


namespace Fusion\Http\Controllers;

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

        if ($request->has('search')) {
            $builder = $builder->search($request->search);
        }

        try {
            return $builder
                ->orderBy($request->orderBy, $request->orderDirection)
                ->paginate(50);
        } catch (QueryException $e) {
            return [];
        }
    }
}
