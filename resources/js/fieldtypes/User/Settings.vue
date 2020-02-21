<template>
    <div class="row">
    	<div class="col w-1/2">
			<p-number name="settings.limit"
				label="Limit"
				help="Limit the number of assets selected; leave blank if no limit is desired."
				placeholder=""
				v-model="value.limit">
			</p-number>
		</div>

    	<div class="col w-1/2">
			
	    </div>
    </div>
</template>

<script>
    export default {
        name: 'user-fieldtype-settings',

        mixins: [
        	require ('../../mixins/fieldtype').default
        ],
    }
</script>

