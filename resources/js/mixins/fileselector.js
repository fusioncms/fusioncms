import DragSelect from 'DragSelect'
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			selector: null
		}
	},

	watch: {
        loading: function(value) {
        	this.selector.addSelectables(document.getElementsByClassName('selectable'))
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
        }
    },

	mounted() {
		const container   = document.querySelector('.selectables')
    	const selectables = document.getElementsByClassName('selectable')

		this.selector = new DragSelect({
			selectables: selectables,
			area: container,
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

	destroyed() {
		this.selector.stop()
	}
}