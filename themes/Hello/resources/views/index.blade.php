@extends('layouts.default')

@section('content')
    @if (theme('setting.say_hello'))
        <div class="text-center items-center justify-center flex flex-col flex-1">
            <h1 class="text-6xl font-thin tracking-wider leading-tight">{{ theme('setting.greeting') ?? 'Welcome to FusionCMS' }}</h1>

            <p class="tracking-wide">{{ theme('setting.message') ?? 'We think you\'ll enjoy your time here' }}</p>
        </div>
    @endif
@endsection