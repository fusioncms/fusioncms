@if (Session::has('caffeinated.flash.message'))
	<div class="alert alert--{{ Session::get('caffeinated.flash.level') }}">
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>

		{{ Session::get('caffeinated.flash.message') }}
	</div>
@endif