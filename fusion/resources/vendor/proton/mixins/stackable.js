export default {
    data() {
        return {
            stackClass: 'unspecified',
            stackMinZIndex: 0,
        }
    },

    computed: {
        activeZIndex() {
            if (! this.isActive) {
                return this.getZIndex(this.$refs.stackable)
            }

            return this.getMaxZIndex() + 4
        },
    },

    methods: {
        getZIndex(element) {
            if (! element || element.nodeType !== Node.ELEMENT_NODE) {
                return 0
            }

            const index = window.getComputedStyle(element).getPropertyValue('z-index')

            if (isNaN(index)) {
                return this.getZIndex(element.parentNode)
            }

            return index
        },

        getMaxZIndex() {
            return this.stackMinZIndex + (this.getStack() * 2)
        },

        isActiveStack() {
            return this.getZIndex(this.$refs.stackable) >= this.getMaxZIndex()
        },

        getStack() {
            return document.getElementsByClassName(this.stackClass).length
        },

        hasStack() {
            return this.getStack() > 0
        },
    }
}