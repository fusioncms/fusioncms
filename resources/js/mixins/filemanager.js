import { Droppable } from '@shopify/draggable'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			droppable: null
		}
	},

	mounted() {
		this.dragAndDrop()
	},

    computed: {
        ...mapGetters({
            currentDirectory: 'filemanager/getCurrentDirectory',
            parentDirectory:  'filemanager/getParentDirectory',
            directories:      'filemanager/getDirectories',
            files:            'filemanager/getFiles',
        })
    },

    methods: {
    	dragAndDrop() {
    		if (this.droppable) {
        		this.droppable.destroy()
        	}

            const container = document.querySelectorAll('.gallery-container')
            let dropOrigin

            this.droppable = new Droppable(container, {
                draggable: '.gallery--draggable',
                dropzone:  '.gallery--dropzone',
                mirror: {
                    constrainDimensions: true,
                }
            })

            this.droppable.on('drag:start',         (evt) => {
                dropOrigin = evt.originalSource.dataset.dropzone;
                console.log('drag:start', evt, dropOrigin)
            })
            
            this.droppable.on('droppable:dropped',  (evt) => {
                console.log('droppable:dropped', evt)
                if (dropOrigin !== evt.dropzone.dataset.dropzone) {
                    evt.cancel();
                }
            })

            // this.droppable.on('drag:over',          (evt) => console.log('drag:over', evt))
            // this.droppable.on('drag:out',           (evt) => console.log('drag:out', evt))
            // this.droppable.on('drag:stop',          (evt) => console.log('drag:stop', evt))
            // this.droppable.on('droppable:returned', (evt) => console.log('droppable:returned', evt))
        },

        lastModified(timestamp) {
            return this.$moment(timestamp).format('MMM Do, YYYY')
        },

        bytes(bytes) {
            let thresh = 1000

            if (Math.abs(bytes) < thresh) {
                return bytes + ' B'
            }

            let index = -1
            let units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
            
            do {
                bytes /= thresh
                ++index
            } while (Math.abs(bytes) >= thresh && index < units.length - 1)

            return bytes.toFixed(1) + ' ' + units[index]
        },

    }
}
