<h2>{{ $form->name }}</h2>

<form method="POST" role="form">
    @if ($form->enable_honeypot)
        @honeypot
    @endif

    @if ($form->collect_email_addresses)
        <input type="email" name="email" class="form__control">
    @endif

    {{-- @dd($form->fieldset) --}}

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam libero consequatur voluptatum, architecto amet voluptates ea earum in, aliquid tenetur repellat minus! Inventore veniam dignissimos ipsam officia facilis eligendi aut.</p>
</form>