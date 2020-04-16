@php
  use App\Fieldtypes\USStateFieldtype;
  $fieldtype = new USStateFieldtype;
  $states = $fieldtype->data;
@endphp

<div class="form__field form__state">
  <label class="form__label" for="{{ $field->handle }}">
      {{ $field->name }}
  </label>

  <div class="form__select-group">
    <select name="{{ $field->name }}" id="{{ $field->handle }}" {{ $field->settings['multiple'] ? 'multiple' : null }} class="form__control">
      @foreach($states as $state)
        <option value="{{$state}}">{{$state}}</option>
      @endforeach
    </select>
  </div>

  @if($field->help)
    @include('forms.components.help', ['field' => $field])
  @endif
</div>