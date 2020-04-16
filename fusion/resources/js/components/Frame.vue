<template>
    <div class="frame"></div>
</template>

<script>
    import _ from 'lodash'

    export default {
        data() {
            return {
                element: null,
                loadedMessage: `IFRAME_LOADED_${this.uuid()}`,
                onReadyStateChangeMessage: `IFRAME_ON_READ_STATE_CHANGE_${this.uuid()}`,
            }
        },

        props: {
            src: {
                type: String,
                required: true,
            },

            height: {
                type: String,
                required: false,
            },

            width: {
                type: String,
                required: false,
            },

            border: {
                type: String,
                required: false,
            },

            gesture: {
                type: String,
                required: false,
            },

            allow: {
                type: String,
                required: false,
            },

            fullscreen: {
                type: String,
                required: false,
            },
        },

        watch: {
            src() {
                this.reload(this)
            },
        },

        methods: {
            load() {
                this.element = document.createElement('iframe')
                this.element.setAttribute('crossorigin', 'anonymous')
                this.element.setAttribute('target', '_parent')
                this.element.setAttribute('style', 'visibility: hidden; position: absolute; top: -99999px;')

                if (this.width) this.element.setAttribute('width', this.width)
                if (this.height) this.element.setAttribute('height', this.height)
                if (this.border) this.element.setAttribute('border', this.border)
                if (this.gesture) this.element.setAttribute('gesture', this.gesture)
                if (this.allow) this.element.setAttribute('allow', this.allow)
                if (this.fullscreen) this.element.setAttribute('allowFullscreen', this.fullscreen)

                this.$el.appendChild(this.element)

                this.setURL()
            },

            remove() {
                while (this.$el.firstChild) {
                    this.$el.removeChild(this.$el.firstChild)
                }
            },

            reload: _.debounce(function(vm) {
                vm.remove()
                vm.load()
            }, 200),

            setURL() {
                const document = this.element.contentWindow.document

                document.open().write(
                    `
                    <body onload="window.location.href='${this.src}'; parent.postMessage('${this.loadedMessage}', '*')"></body>
                    <script>
                        window.document.onreadystatechange = function () {
                        if(window.document.readyState === 'complete') {
                            parent.postMessage('${this.onReadyStateChangeMessage}', '*')
                        }
                        };
                    <\/script>
                    `
                )

                document.close()
            },

            uuid(length = 32, chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
                let string = ''

                for (let i = length; i > 0; --i) {
                    string += chars[Math.floor(Math.random() * chars.length)]
                }

                return string
            },

            listenForEvents() {
                const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent'
                const listenFor = window[eventMethod]
                const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message'

                listenFor(messageEvent, event => {
                    if (event.data === this.loadedMessage) {
                        this.$emit('iframe-load')

                        this.element.setAttribute('style', 'visibility: visible;')
                    }

                    if (event.data === this.onReadyStateChangeMessage) {
                        this.$emit('document-load')

                        this.$emit('load')
                    }
                }, false)
            }
        },

        mounted() {
            this.listenForEvents()

            this.load()
        }
    }
</script>