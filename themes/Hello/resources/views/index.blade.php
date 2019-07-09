@extends('layouts.default')

@section('content')
    <div class="text-center items-center justify-center flex flex-col flex-1">
        <h1 class="text-6xl font-thin tracking-wider leading-tight">{{ $page->heading ?? 'Welcome to FusionCMS' }}</h1>

        @can('non.existant.permission')
            <p class="tracking-wide">{{ $page->subheading ?? 'We think you\'ll enjoy your time here ✌️' }}</p>
        @endcan
    </div>
@endsection