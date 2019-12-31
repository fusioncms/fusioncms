<div class="mb-6">
  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold {{$field->help != '' ? 'mb-1' : 'mb-2'}}" for="{{ $field->handle }}">
      {{ $field->name }}
  </label>

  @if($field->help)
    @include('forms.components.help', ['field' => $field, 'class' => 'mb-2'])
  @endif

  <div class="flex flex-{{ $field->settings['display'] == 'row' ? 'row' : 'col' }}">
    @foreach($field->settings['options'] as $option)
      @php
        $id = $field->handle . '_' . $field->id . '_' . $loop->iteration
      @endphp

      <div class="{{ $field->settings['display'] == 'row' ? 'mr-3' : null}}">
        <input type="radio"
          name="{{ $field->handle }}"
          id="{{ $id }}"
          value="{{ $option['value']}}"
          class="mr-1"
          {{ ((isset($option['checked']) and $option['checked']) ? 'checked' : '') }}>
        <label for="{{ $id }}">{{ $option['label'] }}</label>
      </div>
    @endforeach
  </div>
</div>