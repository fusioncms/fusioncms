<template>
	<div class="gallery-wrapper">
		<div
			class="gallery-item"
			:class="{ 'gallery-item--selected selectable--selected': isSelected, 'selectable': isSelectable }"
			:data-dropzone="directory.id"
			:draggable="isDraggable"
			@dblclick="$emit('dblclick')">

			<p-img
				src="/vendor/fusion/img/folder.svg"
				background-color="white"
				class="gallery-image"
				:class="{ 'draggable--dropzone': isDropzone }"
				:width="150"
				:height="150"
				:alt="directory.name"
				:draggable="false"
				aspect-ratio>
			</p-img>
		</div>

		<quick-edit
			:file="directory"
			:endpoint="'/api/directories/' + directory.id">
		</quick-edit>

		<div class="gallery-subtitle">
			<span v-text="fileCount"></span>
		</div>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'file-manager-directory',

		components: {
			'quick-edit': require('../Actions/QuickEdit.vue').default
		},

        props: {
            directory: {
                type: Object,
                required: true,
            },

            isDropzone: {
            	type: Boolean,
            	default: false
            },

            isDraggable: {
            	type: Boolean,
            	default: true
            },

            isSelectable: {
            	type: Boolean,
            	default: true
            }
        },

        computed: {
			...mapGetters({
				selected: 'filemanager/getSelectedDirectories',
			}),

			fileCount() {
				return this.directory.files_count + ' files'
			},

			isSelected() {
                return _.includes(this.selected, this.directory.id)
            }
		}
	}

</script>