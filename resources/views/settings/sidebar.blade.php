<div class="p-6 bg-gray-200 rounded h-full">
    <ul>
        <li><a href="/settings/account">Account</a></li>
        <li><a href="/settings/security">Security</a></li>
        
        @if (setting('api.personal_access_tokens') === 'enabled')
        	<li><a href="/settings/personal-token">Personal Token</a></li>
        @endif

    </ul>
</div>