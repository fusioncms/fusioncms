<?php

/**
 * [HELPER] Convert fieldable to relationship name (if applicable).
 *
 * @param  Model  $model
 * @return array
 */
function getRelationshipName($model)
{
    if (is_a($model, 'Fusion\Models\Type')) {
        return [
            'handle' => $model->tableName,
            'table'  => $model->tableName,
        ];
    } elseif (is_a($model, 'Fusion\Models\Group')) {
        return [
            'handle' => $model->handle,
            'table'  => 'categories',
        ];
    } elseif (is_a($model, 'Fusion\Models\Menu')) {
        return [
            'handle' => $model->handle,
            'table'  => 'navigation_items',
        ];
    } elseif (is_a($model, 'Fusion\Models\Role')) {
        return [
            'handle' => $model->handle,
            'table'  => 'users',
        ];
    }

    return [
        'handle' => $model->getTable(),
        'table'  => $model->getTable(),
    ];
}

/**
 * [HELPER] Get relationships table name.
 *
 * @param  string $relatedName
 * @param  string $foreignName
 * @return string
 */
function getRelationshipTableName($relatedName, $foreignName)
{
    return collect([$relatedName, $foreignName])
        ->sort()
        ->prepend('relationship')
        ->implode('_');
}
