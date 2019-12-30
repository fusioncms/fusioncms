<div class="mb-6">
  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="{{ $field->handle }}">
      {{ $field->name }}
  </label>
  
  <select name="{{ $field->name }}" id="{{ $field->handle }}" {{ $field->settings['multiple'] ? 'multiple' : null }} class="form__control">
    @foreach($field->settings['options'] as $option)
      <option value="{{$option['value']}}">{{$option['label']}}</option>
    @endforeach
  </select>
</div>