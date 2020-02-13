import DragSelect from 'DragSelect'
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			selector: null,
		}
	},

	computed: {
		...mapGetters({
			selectedDirectories: 'filemanager/getSelectedDirectories',
			selectedFiles:       'filemanager/getSelectedFiles',
			hasSelection:        'filemanager/hasSelection',
			loading:             'filemanager/getLoading',
		})
	},

    methods: {
    	...mapActions({
            toggleDirectorySelection: 'filemanager/toggleDirectorySelection',
            clearDirectorySelection:  'filemanager/clearDirectorySelection',
            toggleFileSelection:      'filemanager/toggleFileSelection',
            clearFileSelection:       'filemanager/clearFileSelection',
        }),

        clearSelections() {
    		this.clearFileSelection()
			this.clearDirectorySelection()
        },

		loadSelector(area) {
			this.selector = new DragSelect({
				area: area,
				selectables: area.querySelectorAll('.selectable'),
				callback: (elements) => {
					this.clearSelections()

					_.forEach(elements, (el) => {
						if (el.dataset.selection) {
							this.toggleFileSelection(parseInt(el.dataset.selection))
						} else if (el.dataset.dropzone) {
							this.toggleDirectorySelection(parseInt(el.dataset.dropzone))
						}
					})
				},

				// Start dragging selector..
				onDragStart: (el) => {
					// Prevent selector from selecting
					if (el.target.classList.contains('selectable--selected') || el.target.closest('.selectable--selected')) {
						this.selector.break()
					}
				},
			})
		},

		destroySelector() {
			if (this.selector) {
				this.selector.stop()
			}
		}
    }
}