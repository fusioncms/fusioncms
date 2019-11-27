<div class="mb-6">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="{{ $field->handle }}">
        {{ $field->name }}
    </label>
    
    <input type="{{ $field->settings['type'] }}" name="{{ $field->handle }}" id="{{ $field->handle }}" class="form__control w-full">
</div>