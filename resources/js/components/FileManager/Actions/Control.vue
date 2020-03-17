<template>
	<div>
		<p-dropdown v-show="hasSelection">
			<fa-icon class="fa-fw" :icon="['fas', 'bolt']"></fa-icon>
			
			<template slot="options">
				<p-dropdown-item class="w-48" @click.prevent="clearSelection"><fa-icon :icon="['fas', 'minus-square']" class="mr-2"></fa-icon> Unselect All</p-dropdown-item>
				<p-dropdown-item class="w-48" v-if="singleSelection" v-modal:rename-file><fa-icon :icon="['fas', 'tag']" class="mr-2"></fa-icon> Rename File</p-dropdown-item>
				<p-dropdown-item class="w-48" v-modal:move-file><fa-icon :icon="['fas', 'exchange-alt']" class="mr-2"></fa-icon> Move Selected</p-dropdown-item>
				<p-dropdown-item class="w-48" v-modal:delete><fa-icon :icon="['fas', 'trash']" class="mr-2"></fa-icon> Delete Selected</p-dropdown-item>
			</template>
		</p-dropdown>

		<portal to="modals">
	        <move-file-modal></move-file-modal>
	        <rename-file-modal :selection="singleSelection"></rename-file-modal>
	        <delete-selected-files-modal></delete-selected-files-modal>
	    </portal>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'file-manager-control-action',

		computed: {
			...mapGetters({
				selectedDirectories: 'filemanager/getSelectedDirectories',
				selectionCount:      'filemanager/selectionCount', 
                selectedFiles:       'filemanager/getSelectedFiles',
				hasSelection:        'filemanager/hasSelection',
				directories:         'filemanager/getDirectories',			
				files:               'filemanager/getFiles',			
			}),

			singleSelection() {
                if (this.selectedDirectories.length == 1 && this.selectedFiles.length == 0) {
                    return _.find(this.directories, ['id', this.selectedDirectories[0]])
                }
                else if (this.selectedDirectories.length == 0 && this.selectedFiles.length == 1) {
                    return _.find(this.files, ['id', this.selectedFiles[0]])
                }

                return false
            }
		},

		methods: {
			...mapActions({
				clearDirectorySelection: 'filemanager/clearDirectorySelection',
				clearFileSelection:      'filemanager/clearFileSelection',
			}),

			clearSelection() {
                this.clearFileSelection()
                this.clearDirectorySelection()
            },
		}
	}
</script>