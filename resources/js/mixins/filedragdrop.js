import { mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapGetters({
			selectedDirectories: 'filemanager/getSelectedDirectories',
			selectedFiles:       'filemanager/getSelectedFiles',
		})
	},

	methods: {
    	...mapActions({
    		clearDirectorySelection: 'filemanager/clearDirectorySelection',
    		setDropzoneVisible:      'filemanager/setDropzoneVisible',
    		setDropzoneEnabled:      'filemanager/setDropzoneEnabled',
    		clearFileSelection:      'filemanager/clearFileSelection',
    	}),

    	clearSelections() {
    		this.clearFileSelection()
			this.clearDirectorySelection()
        }
    },

    mounted() {
    	const container = document.querySelector('.gallery-container')

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

			if (ev.screenY < 100) {
				scrollBy(0, -1)
			} else if (ev.screenY > window.innerHeight - 100) {
				scrollBy(0,  1)
			}
		})

		// Drag Enter
    	// Looking to enter a Dropzone - unhightlight
    	container.addEventListener('dragenter', (ev) => {
			if (ev.target.classList.contains('draggable--dropzone')) {
				ev.preventDefault()
				ev.target.parentNode.classList.add('dropzone--over')
			}
		})

		// Drag Over
    	// Required for `Drop` event
		container.addEventListener('dragover', (ev) => {
			if (ev.target.classList.contains('draggable--dropzone')) {
				ev.preventDefault()
			}
		})

		// Drag Leave
    	// Leaving a Dropzone - unhightlight
		container.addEventListener('dragleave', (ev) => {
			if (ev.target.classList.contains('draggable--dropzone')) {
				ev.preventDefault()
				ev.target.parentNode.classList.remove('dropzone--over')
			}
		})

		// Drop Event
		container.addEventListener('drop', (ev) => {
			if (ev.target.classList.contains('draggable--dropzone')) {
				ev.preventDefault()

				let element   = ev.target.parentNode
				let dropzone  = parseInt(element.dataset.dropzone)
				let selection = { directories: this.selectedDirectories, files: this.selectedFiles }

				element.classList.add('dropzone--highlight')
				element.classList.remove('dropzone--over')

				setTimeout(() => {
					element.classList.remove('dropzone--highlight')
				}, 1500)

				this.$emit('drag-n-drop', { dropzone, selection })
				this.clearSelections()
			}
		})
    }
}