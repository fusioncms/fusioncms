import { Droppable } from '@shopify/draggable'
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			droppable: null,
            drag: false,
            drop: false,
		}
	},

	mounted() {
	   const container = document.querySelectorAll('.gallery-container')

        this.droppable = new Droppable(container, {
            draggable: '.gallery--draggable',
            dropzone:  '.gallery--dropzone',
            mirror: {
                constrainDimensions: true,
                xAxis: (this.view == 'grid'),
            },
        })

        // Draggable events..
        this.droppable.on('drag:start', (evt) => {
            this.drag = evt.originalSource.dataset.draggable
            this.drop = false
        })
        this.droppable.on('drag:move',  (evt) => this.drop = false)
        this.droppable.on('drag:stop',  (evt) => {
            if (this.drop != false) {
                this.moveFileToDirectory({ directory: this.drop, files: [this.drag] })

                setTimeout(() => {
                    // Hack
                    // https://github.com/Shopify/draggable/issues/92
                    evt.originalSource.remove()
                }, 0)
            }
        })

        // Droppable events..
        this.droppable.on('droppable:dropped',  (evt) => {
            evt.cancel()  // don't prematurely move draggable to dropzone!!
            this.drop = evt.dropzone.dataset.dropzone
        })
	},

    destroy() {
        this.droppable.destroy()
    },

    computed: {
        ...mapGetters({
            currentDirectory: 'filemanager/getCurrentDirectory',
            parentDirectory:  'filemanager/getParentDirectory',
            directories:      'filemanager/getDirectories',
            files:            'filemanager/getFiles',
            view:             'filemanager/getView',
        })
    },

    methods: {
        ...mapActions({
            moveFileToDirectory: 'filemanager/moveFileToDirectory',
        })
    }
}
