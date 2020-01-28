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
        	this.selector.addSelectables(document.getElementsByClassName('gallery-item'))
        }
    },

    computed: {
    	...mapGetters({
    		loading: 'filemanager/getLoading',
    	})
    },

    methods: {
    	...mapActions({
            toggleDirectorySelection: 'filemanager/toggleDirectorySelection',
            clearDirectorySelection: 'filemanager/clearDirectorySelection',
            moveFileToDirectory: 'filemanager/moveFileToDirectory',
            toggleFileSelection: 'filemanager/toggleFileSelection',
            clearFileSelection: 'filemanager/clearFileSelection',
    		setDropzoneVisible: 'filemanager/setDropzoneVisible',
    		setDropzoneEnabled: 'filemanager/setDropzoneEnabled',
        }),

        clearSelections() {
    		this.clearFileSelection()
			this.clearDirectorySelection()
			this.selected = { directories: [], files: [] }
        }
    },

    mounted() {
    	const container   = document.querySelector('.gallery-container')
    	const selectables = document.getElementsByClassName('gallery-item')

		// Drag Start
		container.addEventListener('dragstart', (ev) => {
			this.setDropzoneEnabled(false)

			// Prevent Drag Behavior when element is not selected
			if (ev.target.classList.contains('ds-selected')) {
				ev.preventDefault()
			}
		})

		// Drag Start
		container.addEventListener('dragend', (ev) => {
			this.setDropzoneVisible(false)
			this.setDropzoneEnabled(true)
			ev.preventDefault()
		})

		// Drag Watch
		container.addEventListener('drag', (ev) => {
			ev.preventDefault()

			if (ev.screenY < 200) {
				scrollBy(0, -1)
			} else if (ev.screenY > window.innerHeight - 200) {
				scrollBy(0,  1)
			}
		})

    	// Drag Enter
    	// Looking to enter a Dropzone - unhightlight
    	container.addEventListener('dragenter', (ev) => {
			if (ev.target.classList.contains('gallery--dropzone')) {
				ev.preventDefault()
				ev.target.parentNode.classList.add('dropzone-over')
			}
		})

    	// Drag Over
    	// Required for `Drop` event
		container.addEventListener('dragover', (ev) => {
			if (ev.target.classList.contains('gallery--dropzone')) {
				ev.preventDefault()
			}
		})

		// Drag Leave
    	// Leaving a Dropzone - unhightlight
		container.addEventListener('dragleave', (ev) => {
			if (ev.target.classList.contains('gallery--dropzone')) {
				ev.preventDefault()
				ev.target.parentNode.classList.remove('dropzone-over')
			}
		})

		// Drop Event
		container.addEventListener('drop', (ev) => {
			if (ev.target.classList.contains('gallery--dropzone')) {
				ev.preventDefault()

				let dropzone  = ev.target.parentNode
				let directory = parseInt(dropzone.dataset.directory)

				dropzone.classList.add('dropzone-highlight')
				dropzone.classList.remove('dropzone-over')

				setTimeout(() => {
					dropzone.classList.remove('dropzone-highlight')
				}, 1000)

				this.moveFileToDirectory({ directory: directory, moving: this.selected })
				this.clearSelections()
			}
		})

		this.selector = new DragSelect({
			selectables: selectables,
			area: container,
            callback: (elements) => {
            	this.clearSelections()

    			// Toggle files/directories
            	_.forEach(elements, (el) => {
            		if (el.dataset.file) {
						this.toggleFileSelection(parseInt(el.dataset.file))
						this.selected.files.push(parseInt(el.dataset.file))
					} else if (el.dataset.directory) {
						this.toggleDirectorySelection(parseInt(el.dataset.directory))
						this.selected.directories.push(parseInt(el.dataset.directory))
					}
            	})
            },

            // Start dragging selector..
			onDragStart: (el) => {
				// Prevent selector from selecting
				if (el.target.classList.contains('gallery-item--selected') || el.target.closest('.gallery-item--selected')) {
					this.selector.break()
				}
			},
        })
    },

    destroyed() {
    	this.selector.stop()
    }
}