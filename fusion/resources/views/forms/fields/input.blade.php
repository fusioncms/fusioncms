<div class="form__field form__input">
    <label class="form__label" for="{{ $field->handle }}">
        {{ $field->name }}
    </label>

    <input type="{{ $field->settings['type'] }}" name="{{ $field->handle }}" id="{{ $field->handle }}" class="form__control" placeholder="{{ $field->settings['placeholder'] ?? '' }}">

    @if($field->help)
      @include('forms.components.help', ['field' => $field])
    @endif
</div>