@extends('layouts.default')

@section('content')
    <div class="items-center justify-center flex flex-col flex-1">
        <form method="POST" action="{{ route('password.email') }}" class="p-6 w-full md:max-w-lg">
            @csrf

            <h2 class="m-0 mb-10 text-center text-4xl font-bold tracking-wider leading-tight">Reset Password</h2>

            @if (session('status'))
                <div class="text-sm mb-3 mt-1 flex justify-between">
                    <div class="text-grey-darker italic">
                        <span class="block text-red-500">{{ session('status') }}</span>
                    </div>
                </div>
            @endif

            <div class="mb-6">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
                    E-Mail Address
                </label>

                <input
                    type="text"
                    id="email"
                    name="email"
                    value="{{ $email ?? old('email') }}"
                    class="form__control w-full {{ $errors->has('email') ? 'border-red-500 border-2' : '' }}"
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

            <div class="flex items-center justify-between">
                <button
                    type="submit"
                    class="button w-full block mb-6"
                >
                    Send Password Reset Link
                </button>
            </div>
        </form>
    </div>
@endsection