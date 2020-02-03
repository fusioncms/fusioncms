@extends('layouts.default')

@section('content')
	<div class="items-center justify-center flex flex-col flex-1">
		<form method="POST" action="{{ route('password.confirm') }}" class="p-6 w-full md:max-w-lg">
			@csrf

            <h2 class="m-0 mb-10 text-center text-4xl font-bold tracking-wider leading-tight">{{ __('Confirm Password') }}</h2>

            <div class="text-center text-sm">
            {{ __('Please confirm your password before continuing.') }}
            {{ __('We won\'t ask for your password again for a few hours.') }}
        	</div>

			<div class="mb-6">
				<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="password">
					{{ __('Password') }}
				</label>

				<input type="password" id="password" name="password" class="form__control w-full {{ $errors->has('password') ? 'border-red-500 border-2' : '' }}" required>

				@if ($errors->has('password'))
					<div class="text-sm mb-3 mt-1 flex justify-between">
						<div class="text-grey-darker italic">
							<span class="block text-red-500">{{ $errors->first('password') }}</span>
						</div>
					</div>
		        @endif
			</div>

            <button type="submit" class="button w-full block mb-6">{{ __('Confirm Password') }}</button>

            @if (Route::has('password.request'))
            <div class="text-center text-sm">
                <a href="{{ route('password.request') }}">
                    Forgot Your Password?
                </a>
            </div>
            @endif

		</form>
	</div>
@endsection
