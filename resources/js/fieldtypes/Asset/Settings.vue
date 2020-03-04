<template>
    <div class="row">
    	<div class="col w-1/2">
			<p-number
				name="settings.limit"
				label="Limit"
				help="Limit the number of assets selected; leave blank if no limit is desired."
				placeholder=""
				v-model="settings.limit"
				:has-error="errors.has('settings.limit')"
           		:error-message="errors.get('settings.limit')">
			</p-number>

			<p-checkbox-group
				label="File type restrictions"
				help="Restrict which file types are selectable for this field; leave blank if no retriction is desired."
				:has-error="errors.has('settings.filetype_restrictions')"
       			:error-message="errors.get('settings.filetype_restrictions')">
				<p-checkbox
					v-for="(filetype, index) in filetypes"
					name="settings.filetype_restrictions"
					:id="index"
					:key="index"
					:native-value="index"
					v-model="settings.filetype_restrictions">
					{{ filetype }}
				</p-checkbox>
			</p-checkbox-group>
		</div>

    	<div class="col w-1/2">
			<p-select
				name="settings.root_directory"
				label="Root directory"
				help="Select root folder for this field; default root will be used if None selected."
				:options="directories"
				v-model="settings.root_directory"
				:has-error="errors.has('settings.root_directory')"
           		:error-message="errors.get('settings.root_directory')">
			</p-select>
	    </div>
    </div>
</template>

<script>
	import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'asset-fieldtype-settings',

        mixins: [fieldtype],

        data() {
        	return {
        		filetypes: {
	                image:    'Images',
	                video:    'Videos',
	                audio:    'Audio',
	                document: 'Documents',
	        	},
	        	directories: []
	        }
        },

        created() {
        	axios.get('/api/directories').then(response => {
				this.directories = _.map(response.data.data, (directory) => {
					return { 'label': directory.name, 'value': directory.id }
				})

				this.directories.unshift({ 'label': 'None', 'value': null })
        	})
        }
    }
</script>

