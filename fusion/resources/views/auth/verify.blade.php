@extends('layouts.default')

@section('content')
    <div class="w-full container max-w-xs">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div class="flex flex-col items-center leading-none mb-6">
                <h2>{{ __('Verify Your Email Address') }}</h2>
            </div>

            <div class="mb-6">
                @if (session('resent'))
                    <div class="text-sm mb-3 mt-1 flex justify-between">
                        <div class="text-grey-darker italic">
                            <span class="block text-green-500">
                                {{ __('A fresh verification link has been sent to your email address.') }}
                            </span>
                        </div>
                    </div>
                @endif

                {{ __('Before proceeding, please check your email for a verification link.') }}
                {{ __('If you did not receive the email') }},

                <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                    @csrf

                    <button type="submit" class="btn btn-link p-0 m-0 align-baseline">
                        {{ __('click here to request another') }}
                    </button>.
                </form>
            </div>

        </div>
    </div>
@endsection