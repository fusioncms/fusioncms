<div class="form__field form__number">
    <label class="form__label" for="{{ $field->handle }}">
        {{ $field->name }}
    </label>

    <input type="number"
      name="{{ $field->handle }}"
      id="{{ $field->handle }}"
      class="form__control"
      min="{{ $field->settings['min'] }}"
      max="{{ $field->settings['max'] }}"
      step="{{ $field->settings['steps'] }}">

    @if($field->help)
      @include('forms.components.help', ['field' => $field])
    @endif
</div>