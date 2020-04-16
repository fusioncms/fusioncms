@extends('layouts.default')

@section('content')
	<div class="w-full container max-w-xs">
		<form method="POST" action="{{ route('login') }}" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            @csrf

            <div class="flex flex-col items-center leading-none mb-6">
            	<h2>{{ __('Login') }}</h2>
            </div>

			<div class="mb-6">
				<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
					{{ __('E-Mail Address') }}
				</label>

				<input
					type="text"
					id="email"
					name="email"
					class="form__control  {{ $errors->has('email') ? 'border-red-500 border-2' : '' }}"
					value="{{ old('email') }}"
					required
				/>

		        @if ($errors->has('email'))
					<div class="text-sm mb-3 mt-1 flex justify-between">
						<div class="text-grey-darker italic">
							<span class="block text-red-500">{{ $errors->first('email') }}</span>
						</div>
					</div>
		        @endif
			</div>

			<div class="mb-6">
				<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="password">
					{{ __('Password') }}
				</label>

				<input
					type="password"
					id="password"
					name="password"
					class="form__control {{ $errors->has('password') ? 'border-red-500 border-2' : '' }}"
					required
				/>

				@if ($errors->has('password'))
					<div class="text-sm mb-3 mt-1 flex justify-between">
						<div class="text-grey-darker italic">
							<span class="block text-red-500">{{ $errors->first('password') }}</span>
						</div>
					</div>
		        @endif
			</div>

			<div class="mb-6">
				<input
					type="checkbox"
					id="remember"
					name="remember"
					class="mr-2 leading-tight"
					{{ old('remember') ? 'checked' : '' }}
				/>

				<label class="uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="password">
					{{ __('Remember Me') }}
				</label>
			</div>

			<div class="flex items-center justify-between">
				<button
					type="submit"
					class="cursor-pointer inline-flex justify-center py-2 px-3 rounded shadow no-underline appearance-none leading-tight bg-black text-white border-0 hover:bg-black hover:text-white"
				>
					{{ __('Login') }}
				</button>

				@if (Route::has('password.request'))
	                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="{{ route('password.request') }}">
	                    {{ __('Forgot Your Password?') }}
	                </a>
	            @endif
			</div>
		</form>
	</div>
@endsection
