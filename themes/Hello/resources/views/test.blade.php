@extends('layouts.default')

@php
    $test = 'lorem ipsum';
@endphp

@section('content')
    <h1>Test</h1>

    @form('contact_us', null, compact('test'))
@endsection