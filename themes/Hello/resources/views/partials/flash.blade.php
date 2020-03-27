@if ($errors->any())
	<div class="alert alert--error" role="alert">
		<ul class="list-disc list-inside">
			@foreach ($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	</div>
@endif

@if ($message = Session::get('success'))
	<div class="alert alert--success alert-block">
		<strong>{{ $message }}</strong>
	</div>
@endif