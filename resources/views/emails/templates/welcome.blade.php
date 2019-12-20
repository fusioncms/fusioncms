# Welcome, {{ $user->fullName }}!

Thank you for becoming a member.

@component('mail::button', ['url' => config('app.url')])
Please visit us again :)
@endcomponent

Thanks,<br>
{{ config('app.name') }}
