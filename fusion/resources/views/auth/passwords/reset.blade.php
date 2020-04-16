@extends('layouts.default')

@section('content')
    <div class="w-full container max-w-xs">
        <form method="POST" action="{{ route('password.update') }}" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            @csrf

            <input type="hidden" name="token" value="{{ $token }}">

            <div class="flex flex-col items-center leading-none mb-6">
                <h2>{{ __('Reset Password') }}</h2>
            </div>

            <div class="mb-6">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
                    {{ __('E-Mail Address') }}
                </label>

                <input
                    type="text"
                    id="email"
                    name="email"
                    value="{{ $email ?? old('email') }}"
                    class="appearance-none block w-full bg-white text-grey-darker border border-grey-light rounded px-3 py-1 leading-loose focus:outline-none focus:shadow {{ $errors->has('email') ? 'border-red-500 border-2' : '' }}"
                    required
                    autofocus
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
                    class="appearance-none block w-full bg-white text-grey-darker border border-grey-light rounded px-3 py-1 leading-loose focus:outline-none focus:shadow {{ $errors->has('password') ? 'border-red-500 border-2' : '' }}"
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
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="password_confirmation">
                    {{ __('Confirm Password') }}
                </label>

                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    class="appearance-none block w-full bg-white text-grey-darker border border-grey-light rounded px-3 py-1 leading-loose focus:outline-none focus:shadow {{ $errors->has('email') ? 'border-red-500 border-2' : '' }}"
                    required
                />
            </div>

            <div class="flex items-center justify-between">
                <button
                    type="submit"
                    class="cursor-pointer inline-flex justify-center py-2 px-3 rounded shadow no-underline appearance-none leading-tight bg-black text-white border-0 hover:bg-black hover:text-white"
                >
                    {{ __('Reset Password') }}
                </button>
            </div>

        </form>
    </div>
@endsection
