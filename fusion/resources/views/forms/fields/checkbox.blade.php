<div class="form__field form__checkbox {{$field->help != '' ? 'form__checkbox--help' : ''}}">
  <label class="form__label" for="{{ $field->handle }}">
      {{ $field->name }}
  </label>

  @if($field->help)
    @include('forms.components.help', ['field' => $field, 'class' => 'mb-2'])
  @endif

  <div class="form__checkbox-group form__checkbox-group--{{ $field->settings['display'] ?? 'column' }}">
    @foreach($field->settings['options'] as $option)
      @php
        $id = $field->handle . '_' . $field->id . '_' . $loop->iteration
      @endphp

      <div class="form__checkbox-option form__checkbox-option--{{ $field->settings['display'] ?? 'column'}}">
        <input type="checkbox"
          name="{{ $field->handle }}[]"
          id="{{ $id }}"
          value="{{ $option['value']}}"
          class="form__checkbox-box"
          {{ ((isset($option['checked']) and $option['checked']) ? 'checked' : '') }}>
        <label for="{{ $id }}" class="form__checkbox-label">{{ $option['label'] }}</label>
      </div>
    @endforeach
  </div>
</div>