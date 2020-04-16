<div class="form__field form__textarea">
    <label class="form__label" for="{{ $field->handle }}">
        {{ $field->name }}
    </label>

    <textarea name="{{ $field->handle }}" id="{{ $field->handle }}" class="form__control" placeholder="{{ $field->settings['placeholder'] }}"></textarea>

    @if($field->help)
      @include('forms.components.help', ['field' => $field])
    @endif
</div>