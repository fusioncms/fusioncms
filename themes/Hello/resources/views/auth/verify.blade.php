@extends('layouts.default')

@section('content')
    <div class="items-center justify-center flex flex-col flex-1">
        <form method="POST" action="{{ route('verification.resend') }}" class="p-6 w-full md:max-w-lg">
            @csrf

            <h2 class="m-0 mb-10 text-center text-4xl font-bold tracking-wider leading-tight">
                {{ __('Verify Your Email Address') }}
            </h2>

            @if (session('resent'))
                <div class="text-sm mb-3 mt-1 flex justify-between">
                    <div class="text-grey-darker italic">
                        <span class="block text-green-500">
                            {{ __('A fresh verification link has been sent to your email address.') }}
                        </span>
                    </div>
                </div>
            @endif

            <div class="mb-6">
                {{ __('Before proceeding, please check your email for a verification link.') }}
                {{ __('If you did not receive the email') }},
            </div>

            <div class="mb-6">
                <button type="submit" class="button w-full block mb-6">
                    {{ __('click here to request another') }}
                </button>
            </div>
        </form>
    </div>
@endsection