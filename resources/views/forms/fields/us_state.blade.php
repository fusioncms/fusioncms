@php
  use App\Fieldtypes\USStateFieldtype;
  $st = new USStateFieldtype;
  $states = $st->data;
@endphp

<div class="mb-6">
  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="{{ $field->handle }}">
      {{ $field->name }}
  </label>
  
  <select name="{{ $field->name }}" id="{{ $field->handle }}" {{ $field->settings['multiple'] ? 'multiple' : null }} class="form__control">
    @foreach($states as $state)
      <option value="{{$state}}">{{$state}}</option>
    @endforeach
  </select>
</div>