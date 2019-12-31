<div class="mb-6">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="{{ $field->handle }}">
        {{ $field->name }}
    </label>
    
    <textarea name="{{ $field->handle }}" id="{{ $field->handle }}" class="form__control w-full" rows="3" placeholder="{{ $field->settings['placeholder'] }}"></textarea>

    @if($field->help)
      @include('forms.components.help', ['field' => $field])
    @endif
</div>