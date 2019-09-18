@extends('layouts.default')

@section('content')
    <h1>Test</h1>

    <demo-button></demo-button>

     <p-dropdown right>
        Adam Wathan

        <svg class="ml-1 h-5 w-5 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/>
        </svg>

        <template slot="options">
            <p-dropdown-item href="#">Account</p-dropdown-item>
            <p-dropdown-item href="/logout">Log Out</p-dropdown-item>
        </template>
    </p-dropdown>
@endsection