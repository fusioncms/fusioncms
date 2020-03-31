<?php

namespace App\Concerns;

use Illuminate\Support\Facades\Schema;

trait IsSearchable
{
    public static function scopeSearch($query, $keyword, $matchAllFields = false)
    {
        return static::where(function($query) use ($keyword, $matchAllFields) {
            foreach (static::getSearchFields() as $field) {
                if ($matchAllFields) {
                    $query->where($field, 'LIKE', "%$keyword%");
                } else {
                    $query->orWhere($field, 'LIKE', "%$keyword%");
                }
            }
        });
    }

    public static function getSearchFields()
    {
        $model = new static;

        $fields = $model->search;

        if (empty($fields)) {
            $fields = Schema::getColumnListing($model->getTable());

            $others[] = $model->primaryKey;

            $others[] = $model->getCreatedAtColumn() ?: 'created_at';
            $others[] = $model->getUpdatedAtColumn() ?: 'updated_at';

            $others[] = method_exists($model, 'getDeletedAtColumn')
                ? $model->getDeletedAtColumn()
                : 'deleted_at';

            $fields = array_diff($fields, $model->getHidden(), $others);
        }

        return $fields;
    }
}