<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;
use Illuminate\Support\Str;

abstract class Fieldtype
{
    /**
     * @var array
     */
    public $exclude = [];

    /**
     * @var array
     */
    public $settings = [];

    /**
     * @var array
     */
    public $data = [];

    /**
     * How the fieldtype should be cast as a native type.
     *
     * @var string
     */
    public $cast = '';

    /**
     * @var null
     */
    public $column = null;

    /**
     * @var array
     */
    public $rules = [];

    /**
     * @var array
     */
    public $messages = [];

    /**
     * @var array
     */
    public $attributes = [];

    /**
     * @var mixed
     */
    protected $default = null;

    /**
     * @var bool
     */
    protected $eagerLoad = false;

    /**
     * @var mixed
     */
    public $relationship = null;

    /**
     * @var Field
     */
    public $field;

    /**
     * Get the fieldtype name property.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Get the fieldtype handle based off the name property.
     *
     * @return string
     */
    public function getHandle()
    {
        return str_handle($this->getName());
    }

    /**
     * Get the fieldtype ID based off the name property.
     *
     * @return string
     */
    public function getID()
    {
        return Str::slug($this->getName(), '-');
    }

    /**
     * Get the fieldtype description property.
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the fieldtype field.
     *
     * @param  object  $field
     * @return self
     */
    public function setField($field)
    {
        $this->field = $field;

        return $this;
    }

    /**
     * Get the fieldtype column property.
     *
     * @return string
     */
    public function getColumn($key = null)
    {
        if (is_null($key)) {
            return $this->column;
        }

        return (isset($this->column[$key])) ? $this->column[$key] : null;
    }

    /**
     * Get the fieldtype exclude property.
     *
     * @return string
     */
    public function getExclude()
    {
        return $this->exclude;
    }

    /**
     * Get the fieldtype settings property.
     *
     * @return string
     */
    public function getSettings()
    {
        return $this->settings;
    }

    /**
     * Get either all or a specific value from the data property.
     *
     * @param  string|null  $handle
     * @return mixed|null
     */
    public function getData($handle = null)
    {
        if (is_null($handle)) {
            return $this->data;
        }

        if (isset($this->data[$handle])) {
            return $this->data[$handle];
        }

        return null;
    }

    public function getDefault()
    {
        return $this->default;
    }

    /**
     * Determine if the fieldtype has any registered settings.
     *
     * @return bool
     */
    public function hasSettings()
    {
        return count($this->settings) > 0;
    }

    /**
     * Determine if the fieldtype has a relationship.
     *
     * @return bool
     */
    public function hasRelationship()
    {
        return ! is_null($this->relationship);
    }

    /**
     * Set custom rules for form request validator.
     *
     * @param  mixed  $value
     * @param  $field
     * @return array
     */
    public function rules($value = null, $field = null)
    {
        if (is_null($field)) {
            return [];
        }

        $validation = $field->validation;
        $validation = validationRules($validation);
        $validation = implode('|', $validation);

        return [$field->handle => $validation];
    }

    /**
     * Set custom attributes for validator errors.
     *
     * @param  mixed  $value
     * @param  $field
     *
     * @return array
     */
    public function attributes($value = null, $field = null)
    {
        return [];
    }

    /**
     * Perform an action before the given fieldtype has saved data.
     *
     * @param  mixed  $value
     * @param  Field  $field
     * @return mixed
     */
    public function onBeforeSave($value, Field $field)
    {
        return $value;
    }

    /**
     * Perform an action after the given fieldtype has saved data.
     *
     * @param  mixed  $value
     * @param  Field  $field
     * @return mixed
     */
    public function onAfterSave($value, Field $field)
    {
        return $value;
    }

    /**
     * Cast the variable to the appropriate data type.
     *
     * @param  mixed  $value
     * @param  Field  $field
     * @return mixed
     */
    public function cast($value, Field $field)
    {
        return $this->castAttribute($value, $field);
    }

    /**
     * Get the type of cast for the fieldtype.
     *
     * @return string
     */
    public function getCast($field)
    {
        return $this->cast;
    }

    /**
     * Get the relationship type for the fieldtype.
     *
     * @return string
     */
    public function getRelationship()
    {
        if (! $this->relationship) {
            return null;
        }

        return $this->relationship;
    }

    /**
     * Returns if the fieldtype be eagerloaded.
     *
     * @return bool
     */
    public function shouldEagerLoad()
    {
        return $this->eagerLoad;
    }

    /**
     * Returns value of field.
     *
     * @return mixed
     */
    public function getValue($model, Field $field)
    {
        return $model->{$field->handle};
    }

    /**
     * Returns resource object of field.
     *
     * @return JsonResource
     */
    public function getResource($model, Field $field)
    {
        return $this->getValue($model, $field);
    }

    /**
     * Destroy relationship data in storage.
     *
     * @param  Illuminate\Eloquent\Model  $model
     * @param  Fusion\Models\Field           $field
     * @return void
     */
    public function destroyRelationship($model, Field $field)
    {
        $model->{$field->handle}()->detach();
    }
}
