@extends('layouts.default')

@section('content')
    <h1 class="font-bold tracking-wide text-6xl">{{ $entry->name }}</h1>

    <div class="p-3 border-l-4 border-blue-500 my-12">
        <p class="text-3xl tracking-wide italic text-blue-500">{{ $entry->excerpt }}</p>
    </div>

    <div class="text-2xl font-light leading-loose tracking-wide" v-pre>
        {!! $entry->content !!}
    </div>
@endsection