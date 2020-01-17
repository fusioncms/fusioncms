import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			currentDirectory: 'filemanager/getCurrentDirectory',
			parentDirectory:  'filemanager/getParentDirectory',
			directories:      'filemanager/getDirectories',
			files:            'filemanager/getFiles',
			view:             'filemanager/getView',
		})
	}
}