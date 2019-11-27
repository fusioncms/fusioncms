<h1>{{ $form->name }}</h1>

<form method="POST" role="form" class="mt-10" action="{{ $form->path() }}">
    @csrf

    @if ($form->enable_honeypot)
        @honeypot
    @endif

    @foreach ($form->fieldset->fields as $field)
        @includeIf('forms.fields.'.$field->type, compact('field'))
    @endforeach

    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
</form>