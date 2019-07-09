<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * [HELPER] Convert fieldable to relationship name (if applicable).
 *
 * @param  Model  $model
 * @return array
 */
function getRelationshipName($model)
{
    if (is_a($model, 'App\Models\Type')) {
        return [
            'handle' => $model->tableName,
            'table'  => $model->tableName,
        ];
    } elseif (is_a($model, 'App\Models\Group')) {
        return [
            'handle' => $model->handle,
            'table'  => 'categories',
        ];
    } elseif (is_a($model, 'App\Models\Menu')) {
        return [
            'handle' => $model->handle,
            'table'  => 'navigation_items',
        ];
    } elseif (is_a($model, 'App\Models\Role')) {
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
