<template>
    <div class="row">
    	<div class="col w-1/2">
			<p-number name="settings.limit"
				label="Limit"
				help="Limit the number of assets selected; leave blank if no limit is desired."
				placeholder=""
				v-model="value.limit">
			</p-number>
			
			<p-checkbox-group label="Directory restrictions" help="Restrict which folders are accessible for this selection.">
				<p-checkbox
					v-for="(directory, index) in directories"
					name="directory_restrictions"
					:id="directory.slug"
					:key="directory.slug"
					:native-value="directory.slug"
					v-model="value.directory_restrictions">{{ directory.name }}</p-checkbox>
			</p-checkbox-group>
		</div>

    	<div class="col w-1/2">
			<p-select
				name="default_upload_location"
				label="Default upload location"
				:options="defaultUploadOptions"
				v-model="value.default_upload_location">
			</p-select>

			<p-checkbox-group label="File type restrictions" help="Restrict which folders are accessible for this selection.">
			    <p-checkbox
			    	v-for="(filetype, index) in filetypes"
			    	name="filetype_restrictions"
			    	:id="index"
			    	:key="index"
			    	:native-value="index"
			    	v-model="value.filetype_restrictions">{{ filetype }}</p-checkbox>
			</p-checkbox-group>
	    </div>
    </div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'asset-fieldtype-settings',

        mixins: [fieldtype],

        data() {
        	return {
        		filetypes: {
	        		everything: 'Everything',
	                images:     'Images',
	                videos:     'Videos',
	                audio:      'Audio',
	                documents:  'Documents',
	        	},
	        	defaultUploadOptions: []
	        }
        },

        computed: {
            ...mapGetters({
                directories: 'filemanager/getDirectories',
            })
        },

        watch: {
        	directories(values) {
        		this.defaultUploadOptions = _.map(values, function(value) {
					return { 'label': value.name, 'value': value.id }
				})

				this.defaultUploadOptions.unshift({ 'label': 'root', 'value' : null })
        	}
        },

        methods: {
            ...mapActions({
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
            })
        },

        mounted() {
        	this.fetchFilesAndDirectories()
        }
    }
</script>

