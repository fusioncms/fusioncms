@extends('layouts.default')

@section('content')
	<div class="row">
		<div class="col w-full">
			<h1 class="text-3xl font-bold m-0">Account Settings</h1>
		</div>
	</div>

	<div class="row">
		<div class="col w-1/5">
			@include('account.sidebar')
		</div>

		<div class="col w-2/5">
			<form method="POST">
				@csrf

				<div class="mb-6">
					<label for="name" class="block text-xs font-bold uppercase mb-1">Name</label>
					<input type="text" name="name" class="form-input w-full" value="{{ auth()->user()->name }}">
				</div>

				<div class="mb-6">
					<label for="email" class="block text-xs font-bold uppercase mb-1">Email</label>
					<input type="email" name="email" class="form-input w-full" value="{{ auth()->user()->email }}">
				</div>

				<div>
					<button type="submit" class="button">Update Account</button>
				</div>
			</form>
        </div>
	</div>

	@include('account.footer')
@endsection