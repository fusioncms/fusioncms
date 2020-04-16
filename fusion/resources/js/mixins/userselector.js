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
			selectedUsers: 'usermanager/getSelected',
		})
	},

    methods: {
    	...mapActions({
            toggleSelection: 'usermanager/toggleSelection',
            clearSelection:  'usermanager/clearSelection',
        }),

		loadSelector(area) {
			this.selector = new DragSelect({
				area: area,
				selectables: area.querySelectorAll('.selectable'),
				callback: (elements) => {
					this.clearSelection()

					_.forEach(elements, (el) => this.toggleSelection(parseInt(el.dataset.selection)))
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