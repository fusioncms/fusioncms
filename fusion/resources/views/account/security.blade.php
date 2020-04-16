@extends('layouts.default')

@section('content')
	<div class="row">
		<div class="col w-full">
			<h1 class="text-3xl font-bold m-0">Security Settings</h1>
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
					<label for="password" class="block text-xs font-bold uppercase mb-1">Password</label>
					<input type="password" name="password" class="form-input w-full" autocomplete="new-password"/>
				</div>

				<div class="mb-6">
					<label for="password_confirmation" class="block text-xs font-bold uppercase mb-1">Password Confirmation</label>
					<input type="password" name="password_confirmation" class="form-input w-full" autocomplete="new-password"/>
				</div>

				<div>
					<button type="submit" class="button">Update Password</button>
				</div>
			</form>
        </div>
	</div>

	@include('account.footer')
@endsection