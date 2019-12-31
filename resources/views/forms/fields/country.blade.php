@php
  use App\Fieldtypes\CountryFieldtype;
  $ct = new CountryFieldtype;
  $countries = $ct->data;
@endphp

<div class="mb-6">
  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="{{ $field->handle }}">
      {{ $field->name }}
  </label>

  <div class="relative">
    <select name="{{ $field->name }}" id="{{ $field->handle }}" {{ $field->settings['multiple'] ? 'multiple' : null }} class="form__control">
      @foreach($countries as $country)
        <option value="{{$country}}">{{$country}}</option>
      @endforeach
    </select>
    
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
      </svg>
    </div>
  </div>
</div>