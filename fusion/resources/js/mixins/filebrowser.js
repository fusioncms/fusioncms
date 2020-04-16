import { mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapGetters({
			rootDirectory:    'filemanager/getRootDirectory',
			currentDirectory: 'filemanager/getCurrentDirectory',
			parentDirectory:  'filemanager/getParentDirectory',
			breadcrumbs:      'filemanager/getBreadcrumbs',
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
		},

		size(value) {
			return _.size(value)
		}
	},

	methods: {
		...mapActions({
			fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
			setCurrentDirectory:      'filemanager/setCurrentDirectory',
			setParentDirectory:       'filemanager/setParentDirectory',
			setRootDirectory:         'filemanager/setRootDirectory',
			reset:                    'filemanager/reset',
		}),

		navigate(directory) {
			this.reset()

			if (directory) {
				this.setCurrentDirectory(directory.id)
				this.setParentDirectory(directory.parent_id)
			}

			this.fetchFilesAndDirectories()
		},

		preview(file) {
			this.$router.push({ path: `/files/${file.uuid}` })
		},
	}
}