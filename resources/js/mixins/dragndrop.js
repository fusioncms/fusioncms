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
	   const container = document.querySelector('.gallery-container')

        this.droppable = new Droppable(container, {
            draggable: '.gallery--draggable',
            dropzone:  '.gallery--dropzone',
            delay: 250,
            mirror: {
                constrainDimensions: true,
                xAxis: (this.view == 'grid'),
                cursorOffsetX: 50,
                cursorOffsetY: 57,
            },
        })

        // Draggable events..
        this.droppable.on('drag:start', (evt) => {
            this.drag = evt.originalSource.dataset.draggable
            this.drop = false
        })
        this.droppable.on('drag:move', (evt) => {
            if (this.drop != false) {
                this.drop.querySelector('.gallery-item').classList.remove('dropzone-over')
                this.drop = false
            }
        })
        this.droppable.on('drag:stop',  (evt) => {
            if (this.drop != false) {
                this.moveFileToDirectory({ directory: this.drop.dataset.dropzone, files: [this.drag] })
                
                // Confirmation display
                this.drop.querySelector('.gallery-item').classList.add('dropzone-highlight')
                this.drop.querySelector('.gallery-item').classList.remove('dropzone-over')
                setTimeout(() => {
                    this.drop.querySelector('.gallery-item').classList.remove('dropzone-highlight')
                }, 1000);
            }
        })

        // Mirror events..
        this.droppable.on('mirror:created', (evt) => {
            console.log(evt)
            evt.mirror.setAttribute('style', `width: ${evt.originalSource.offsetWidth}px;`)
        })

        // Droppable events..
        this.droppable.on('droppable:dropped',  (evt) => {
            evt.cancel()  // don't prematurely move draggable to dropzone!!
            this.drop = evt.dropzone
            this.drop.querySelector('.gallery-item').classList.add('dropzone-over')
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
