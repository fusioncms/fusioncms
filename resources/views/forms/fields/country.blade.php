@php
  use App\Fieldtypes\CountryFieldtype;
  $ct = new CountryFieldtype;
  $countries = $ct->data;
@endphp

<div class="mb-6">
  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="{{ $field->handle }}">
      {{ $field->name }}
  </label>
  <select name="{{ $field->name }}" id="{{ $field->handle }}" {{ $field->settings['multiple'] ? 'multiple' : null }} class="form__control">
    @foreach($countries as $country)
      <option value="{{$country}}">{{$country}}</option>
    @endforeach
  </select>
</div>