@extends('layouts.default')

@section('content')
    <h1>{{ $entry->name }}</h1>

    {!! $entry->content !!}
@endsection