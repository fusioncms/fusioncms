<div class="p-6 bg-gray-200 rounded h-full">
    <ul class="text-sm">
        <li><a href="/settings/account">Account</a></li>
        <li><a href="/settings/security">Security</a></li>
        
        @if (setting('api.personal_access_tokens') === 'enabled')
        	<li><a href="/settings/api">API</a></li>
        @endif
    </ul>
</div>