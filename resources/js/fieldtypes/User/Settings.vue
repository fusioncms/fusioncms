<template>
    <div class="row">
    	<div class="col w-1/2">
			<p-number name="settings.limit"
				label="Limit"
				help="Limit the number of assets selected; leave blank if no limit is desired."
				placeholder=""
				v-model="settings.limit"
                :has-error="errors.has('settings.limit')"
                :error-message="errors.get('settings.limit')">
			</p-number>
		</div>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'user-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>

