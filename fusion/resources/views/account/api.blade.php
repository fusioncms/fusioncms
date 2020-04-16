@extends('layouts.default')

@section('content')
	<div class="row">
		<div class="col w-full">
			<h1 class="text-3xl font-bold m-0">API Settings</h1>
		</div>
	</div>

	<div class="row">
		<div class="col w-1/5">
			@include('account.sidebar')
		</div>

		<div class="col w-3/5">
			<personal-token></personal-token>
        </div>
	</div>

	@include('account.footer')
@endsection