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
				name="directory_restrictions"
				label="Directory restrictions"
				help="Restrict which folders are accessible for this field."
				:options="directoryOptions"
				v-model="value.directory_restrictions">
			</p-select>
	    </div>
    </div>
</template>

<script>
	import { mapGetters } from 'vuex'

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
	        	}
	        }
        },

        computed: {
        	...mapGetters({
        		directories: 'filemanager/getDirectories'
        	}),

        	directoryOptions() {
        		return _.map(this.directories, (directory) => {
        			return { 'label': directory.name, 'value': directory.id }
        		})
        	}
        }
    }
</script>

