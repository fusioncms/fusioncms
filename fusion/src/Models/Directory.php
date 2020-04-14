<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

class Directory extends Model
{
    use LogsActivity;

    /**
     * Fillable fields for Directory model.
     * @var
     */
    protected $fillable = ['parent_id', 'name', 'slug'];

    /**
     * @var bool
     */
    protected $searchable = false;

    protected $with = ['parent'];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            foreach ($model->files as $file) {
                $file->delete();
            }

            foreach ($model->children as $child) {
                $child->delete();
            }
        });
    }

    /**
     * A directory has many files.
     *
     * @return Builder
     */
    public function files()
    {
        return $this->hasMany(File::class);
    }

    /**
     * Relationship to parent Directory.
     *
     * @return Builder
     */
    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    /**
     * Relationship to child Directories.
     *
     * @return Builder
     */
    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    /**
     * Scope a query to only include users of a given type.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $type
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeHierarchy($query, $parentId = 0)
    {
        return $query
            ->withCount('files')
            ->where('parent_id', $parentId)
            ->with('children.children');
    }

    /**
     * Tap into activity before persisting to database.
     *
     * @param  \Spatie\Activitylog\Models\Activity $activity
     * @param  string   $eventName
     * @return void
     */
    public function tapActivity(Activity $activity, string $eventName)
    {
        $subject = $activity->subject;
        $action  = ucfirst($eventName);

        $activity->description = "{$action} folder ({$subject->name})";
        $activity->properties  = ['icon' => 'folder'];
    }
}
