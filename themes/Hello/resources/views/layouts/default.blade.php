<!DOCTYPE html>
<html lang="en" class="h-full">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <meta name="description" content="Hello World!">
        <meta name="author" content="efelle creative">

        <title>Hello, FusionCMS</title>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
        <link rel="stylesheet" href="{{ theme_mix('css/theme.css') }}" media="screen">
    </head>

    <body class="bg-white font-sans leading-normal tracking-normal h-full">
        <div id="app" class="h-full flex flex-col" v-cloak>
            @include('partials.header')

            <main class="container w-full flex flex-1 mx-auto" style="margin-top: 93px;">
                <div class="w-full flex flex-col flex-1 mx-6 md:mt-8 mb-16 text-gray-800 leading-normal">
                    @include('partials.flash')

                    @yield('content')
                </div>
            </main>
        </div>

        <script src="{{ theme_mix('js/theme.js') }}"></script>
        @yield('javascript')
    </body>
</html>