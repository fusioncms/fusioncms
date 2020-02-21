@extends('layouts.default')

@section('content')
    <div class="text-center items-center justify-center flex flex-col flex-1">
        <h1 class="text-6xl font-bold text-gray-700 tracking-wider leading-tight">{{ theme('setting.greeting') ?? 'Welcome to FusionCMS' }}</h1>

        <p class="tracking-wide font-medium text-gray-600 mt-3">{{ theme('setting.message') ?? 'We think you\'ll enjoy your time here' }}</p>

        <div class="flex w-full max-w-xl justify-between items-center mt-10 p-6 uppercase tracking-wider">
            <a href="https://beta.getfusioncms.com/docs" target="_blank" class="text-gray-600 hover:text-black">Documentation</a>
            <a href="https://beta.getfusioncms.com/blog" target="_blank" class="text-gray-600 hover:text-black">Blog</a>
            <a href="https://github.com/fusioncms/fusioncms" target="_blank" class="text-gray-600 hover:text-black">GitHub</a>
            <a href="https://beta.getfusioncms.com/discord" target="_blank" class="text-gray-600 hover:text-black">Discord</a>
        </div>
    </div>
@endsection