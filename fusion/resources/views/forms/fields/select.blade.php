<div class="form__field form__select">
  <label class="form__label" for="{{ $field->handle }}">
      {{ $field->name }}
  </label>

  <div class="form__select-group">
    <select name="{{ $field->name }}" id="{{ $field->handle }}" {{ $field->settings['multiple'] ? 'multiple' : null }} class="form__control">


      @foreach($field->settings['options'] as $option)
        <option value="{{$option['value']}}" {{ ((isset($option['checked']) and $option['checked']) ? 'selected' : '') }}>{{$option['label']}}</option>
      @endforeach
    </select>
  </div>

  @if($field->help)
    @include('forms.components.help', ['field' => $field])
  @endif
</div>