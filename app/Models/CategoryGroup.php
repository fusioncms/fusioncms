<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryGroup extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public static function boot()
    {
        parent::boot();

        static::deleting(function (CategoryGroup $categoryGroup) {
            foreach ($categoryGroup->categories as $category) {
                $category->delete();
            }
        });
    }
}
