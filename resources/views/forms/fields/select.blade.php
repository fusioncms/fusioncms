<div class="mb-6">
  <select name="{{ $field->name }}" id="{{ $field->handle }}" {{ $field->settings['multiple'] ? 'multiple' : null }}>
    @foreach($field->settings['options'] as $option)
      <option value="{{$option['value']}}">{{$option['label']}}</option>
    @endforeach
  </select>
</div>