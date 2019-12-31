@php
  use App\Fieldtypes\CountryFieldtype;
  $fieldtype = new CountryFieldtype;
  $countries = $fieldtype->data;
@endphp

<div class="form__field form__country">
  <label class="form__label" for="{{ $field->handle }}">
      {{ $field->name }}
  </label>

  <div class="form__select-group">
    <select name="{{ $field->name }}" id="{{ $field->handle }}" {{ $field->settings['multiple'] ? 'multiple' : null }} class="form__control">
      @foreach($countries as $country)
        <option value="{{$country}}">{{$country}}</option>
      @endforeach
    </select>
  </div>

  @if($field->help)
    @include('forms.components.help', ['field' => $field])
  @endif
</div>