import { mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapGetters({
			currentDirectory: 'filemanager/getCurrentDirectory',
			parentDirectory:  'filemanager/getParentDirectory',
			directories:      'filemanager/getDirectories',
			files:            'filemanager/getFiles',
			view:             'filemanager/getView',
		}),
	},

	filters: {
		bytes(value) {
		    let thresh = 1000

		    if (Math.abs(value) < thresh) {
		        return value + ' B'
		    }

		    let index = -1
		    let units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		    
		    do {
		        value /= thresh
		        ++index
		    } while (Math.abs(value) >= thresh && index < units.length - 1)

		    return value.toFixed(1) + ' ' + units[index]
		}
	},

	methods: {
		...mapActions({
			fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
			clearDirectorySelection:  'filemanager/clearDirectorySelection',
			clearFileSelection:       'filemanager/clearFileSelection',
			setCurrentDirectory:      'filemanager/setCurrentDirectory',
			setParentDirectory:       'filemanager/setParentDirectory',
		}),

		navigate(directory) {
			if (directory) {
				this.setCurrentDirectory(directory.id)
				this.setParentDirectory(directory.parent_id)
			} else {
				this.setCurrentDirectory(null)
				this.setParentDirectory(null)
			}

			this.clearFileSelection()
			this.clearDirectorySelection()

			this.fetchFilesAndDirectories()
		},

		preview(file) {
			this.$router.push({ path: `/files/preview/${file.uuid}` })
		},
	}
}