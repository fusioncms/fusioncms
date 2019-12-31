<div class="mb-6">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="{{ $field->handle }}">
        {{ $field->name }}
    </label>
    
    <input type="number" 
      name="{{ $field->handle }}" 
      id="{{ $field->handle }}" 
      class="form__control w-full"
      min="{{ $field->settings['min'] }}"
      max="{{ $field->settings['max'] }}"
      step="{{ $field->settings['steps'] }}">

    @if($field->help)
      @include('forms.components.help', ['field' => $field])
    @endif
</div>