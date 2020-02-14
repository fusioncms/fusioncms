@extends('layouts.default')

@section('content')
    @if (theme('setting.say_hello'))
        <div class="text-center items-center justify-center flex flex-col flex-1">
            <h1 class="text-6xl font-bold text-gray-700 tracking-wider leading-tight">{{ theme('setting.greeting') ?? 'Welcome to FusionCMS' }}</h1>

            <p class="tracking-wide font-medium text-gray-600 mt-3">{{ theme('setting.message') ?? 'We think you\'ll enjoy your time here' }}</p>

            <div class="flex w-full max-w-xl justify-between items-center mt-10 p-6 uppercase tracking-wider">
                <a href="https://beta.getfusioncms.com/docs" target="_blank" class="text-gray-600 hover:text-black">Documentation</a>
                <a href="https://beta.getfusioncms.com/blog" target="_blank" class="text-gray-600 hover:text-black">Blog</a>
                <a href="https://github.com/fusioncms/fusioncms" target="_blank" class="text-gray-600 hover:text-black">GitHub</a>
                <a href="https://beta.getfusioncms.com/discord" target="_blank" class="text-gray-600 hover:text-black">Discord</a>
            </div>

            <div class="flex w-full max-w-xl justify-center items-center mt-10 p-6 uppercase tracking-wider">
                <ul>
                    @foreach (menu('header')->roots() as $node)
                        @isset ($node->attributes['target'])
                            <li><a href="{{ $node->url() }}" target="{{ $node->attributes['target'] }}">{{ $node->title }}</a> <fa-icon :icon="['fas', 'external-link-alt']" class="text-gray-500 text-xs fa-fw"></fa-icon></li>
                        @else
                            <li><a href="{{ $node->url() }}">{{ $node->title }}</a></li>
                        @endisset
                    @endforeach
                </ul>
            </div>
        </div>
    @endif
@endsection