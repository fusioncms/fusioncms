<template>
	<div class="gallery-container selectables">
		<div class="gallery border-b border-gray-200 pb-2">
			<directory
				v-for="directory in directories"
				:key="directory.id"
				:directory="directory"
				:isDropzone="true"
				@dblclick="navigate(directory)">
			</directory>
		</div>

		<div class="gallery">
			<file
				v-for="file in files"
				:key="file.id"
				:file="file"
				@dblclick="preview(file)">
			</file>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	import Directory from './Browse/Directory.vue'
	import File      from './Browse/File.vue'
	
	export default {
		name: 'file-manager-browser',

		mixins: [
			require('../../mixins/fileselector').default,
			require('../../mixins/filedragdrop').default,
            require('../../mixins/filebrowser').default,
        ],

		components: {
			'directory': Directory,
			'file':      File,
		},

		methods: {
			...mapActions({
				moveFileToDirectory: 'filemanager/moveFileToDirectory',
			})
		},

		created() {
			this.$on('drag-n-drop', ({ dropzone, selection }) => {
				this.moveFileToDirectory({ directory: dropzone, moving: selection })
			})
		}
	}
</script>