@extends('layouts.default')

@section('content')
    <h1>Test</h1>

    {{ dd($entry->test->first()) }}
@endsection