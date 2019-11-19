<h1>{{ $form->name }}</h1>

<form method="POST" role="form" class="mt-10">
    @if ($form->enable_honeypot)
        @honeypot
    @endif

    @foreach ($form->fieldset->fields as $field)
        <div class="mb-6">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="{{ $field->handle }}">
                {{ $field->name }}
            </label>
            
            @includeIf('forms.fields.'.$field->type, compact('field'))
        </div>
    @endforeach

    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
</form>