@extends('layouts.admin')

@section('content')
	@auth
		<app :user="{{ auth()->user() }}" />
	@else
		<app />
	@endauth
@endsection