<div class="p-6 bg-gray-200 rounded h-full">
    <ul class="text-sm">
        <li><a href="/account/settings">Account</a></li>
        <li><a href="/account/security">Security</a></li>
        
        @if (setting('api.personal_access_tokens') === 'enabled')
        	<li><a href="/account/api">API</a></li>
        @endif
    </ul>
</div>