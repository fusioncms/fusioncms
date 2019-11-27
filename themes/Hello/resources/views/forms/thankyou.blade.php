@extends('layouts.default')

@section('content')
    <h1>Success!</h1>

    <p>{{ $form->confirmation_message ?: 'Thanks for reaching out! We\'ll get back to you as soon as we can.' }}</p>
@endsection