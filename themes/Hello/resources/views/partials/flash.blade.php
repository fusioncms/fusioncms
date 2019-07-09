@if (Session::has('caffeinated.flash.message'))
	<div class="alert alert--{{ Session::get('caffeinated.flash.level') }}" role="alert">
		<svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
		<span>{{ Session::get('caffeinated.flash.message') }}</span>
	</div>
@endif