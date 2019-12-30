@php
  use App\Fieldtypes\CountryFieldtype;
  $ct = new CountryFieldtype;
  $countries = $ct->data;
@endphp

<div class="mb-6">
  <select name="{{ $field->name }}" id="{{ $field->handle }}" {{ $field->settings['multiple'] ? 'multiple' : null }}>
    @foreach($countries as $country)
      <option value="{{$country}}">{{$country}}</option>
    @endforeach
  </select>
</div>