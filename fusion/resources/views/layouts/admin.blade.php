<!DOCTYPE html>
<html lang="en" class="h-full bg-grey-lighter">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>FusionCMS</title>

        {{-- Styles --}}
        <link rel="stylesheet" href="{{ mix('css/gravity.css', 'vendor/fusion') }}">

        @yield('styles')
    </head>

    <body class="h-full font-sans tracking-wide leading-loose bg-grey-lighter">
        <div id="gravity" v-cloak class="h-full">
            @yield('content')
        </div>

        {{-- FusionCMS Config --}}
        <script>window.environment = '{{ app()->environment() }}'</script>
        <script>window.config = @json(config('fusion'))</script>

        {{-- Scripts --}}
        <script src="{{ mix('js/gravity.js', 'vendor/fusion') }}"></script>

        @bonsai('js')
    </body>
</html>