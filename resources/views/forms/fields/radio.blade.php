<div class="form__field form__radio {{$field->help != '' ? 'form__radio--help' : ''}}">
  <label class="form__label" for="{{ $field->handle }}">
      {{ $field->name }}
  </label>

  @if($field->help)
    @include('forms.components.help', ['field' => $field, 'class' => 'mb-2'])
  @endif

  <div class="form__radio-group form__radio-group--{{ $field->settings['display'] ?? 'column' }}">
    @foreach($field->settings['options'] as $option)
      @php
        $id = $field->handle . '_' . $field->id . '_' . $loop->iteration
      @endphp

      <div class="form__radio-option form__radio-option--{{ $field->settings['display'] ?? 'column'}}">
        <input type="radio"
          name="{{ $field->handle }}"
          id="{{ $id }}"
          value="{{ $option['value']}}"
          class="form__radio-box"
          {{ ((isset($option['checked']) and $option['checked']) ? 'checked' : '') }}>
        <label for="{{ $id }}" class="form__radio-label">{{ $option['label'] }}</label>
      </div>
    @endforeach
  </div>
</div>