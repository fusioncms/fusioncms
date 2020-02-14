<template>
    <div class="row">
    	<div class="col w-1/2">
			<p-number name="settings.limit"
				label="Limit"
				help="Limit the number of assets selected; leave blank if no limit is desired."
				placeholder=""
				v-model="value.limit">
			</p-number>

			<p-checkbox-group label="File type restrictions" help="Restrict which file types are selectable for this field; leave blank if no retriction is desired.">
				<p-checkbox
					v-for="(filetype, index) in filetypes"
					name="filetype_restrictions"
					:id="index"
					:key="index"
					:native-value="index"
					v-model="value.filetype_restrictions">
					{{ filetype }}
				</p-checkbox>
			</p-checkbox-group>
		</div>

    	<div class="col w-1/2">
			<p-select
				name="root_directory"
				label="Root directory"
				help="Select root folder for this field; default root will be used if None selected."
				:options="directories"
				v-model="value.root_directory">
			</p-select>
	    </div>
    </div>
</template>

<script>
    export default {
        name: 'asset-fieldtype-settings',

        mixins: [
        	require ('../../mixins/fieldtype').default
        ],

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

