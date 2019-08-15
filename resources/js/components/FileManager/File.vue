<template>
    <div class="gallery-wrapper flex-auto" :class="{'gallery-wrapper--small': small}">
        <div class="gallery-item" :class="{'gallery-item--selected': selected, 'gallery-item--small': small}" @click.stop="select" @dblclick="preview">
            <div v-if="isImage">
                <p-img
                    v-if="! small"
                    src="/img/image-small.svg"
                    background-color="#ffffff"
                    :lazySrc="file.url + '?w=200&h=200&fit=crop'"
                    :width="200"
                    :height="200"
                    :alt="file.description"
                    class="gallery-image">
                </p-img>

                <p-img
                    v-else
                    src="/img/image-large.svg"
                    background-color="#ffffff"
                    :lazySrc="file.url + '?w=75&h=75&fit=crop'"
                    :width="75"
                    :height="75"
                    :alt="file.description"
                    class="gallery-image">
                </p-img>
            </div>

            <div v-else>
                <p-img
                    v-if="! small"
                    :src="'/img/' + type + '-small.svg'"
                    background-color="#ffffff"
                    :width="200"
                    :height="200"
                    :alt="file.description"
                    class="gallery-image">
                </p-img>

                <p-img
                    v-else
                    :src="'/img/' + type + '-large.svg'"
                    background-color="#ffffff"
                    :width="75"
                    :height="75"
                    :alt="file.description"
                    class="gallery-image">
                </p-img>
            </div>
        </div>

        <div class="leading-tight mt-2" v-if="! small">
            <span class="block text-sm truncate" v-show="! isEditing" @dblclick="edit">{{ file.name }}</span>
            <input type="text" class="form__control form__control--sm text-center" v-model="file.name" ref="edit" v-show="isEditing" @blur="update" @keyup.enter="update" @keyup.esc="done">
            
            <div class="flex flex-col text-center text-xs font-mono text-grey-dark mt-2">
                <span>{{ bytes }}</span>
                <span>{{ file.extension }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'file-manager-file',

        data() {
            return {
                name: this.file.name,
                isEditing: false,
                selected: false,
            }
        },

        props: {
            small: {
                type: Boolean,
                required: false,
                default: false,
            },

            file: {
                type: Object,
                required: true,
            }
        },

        computed: {
            isImage() {
                return this.type === 'image'
            },

            isVideo() {
                return this.type === 'video'
            },

            isAudio() {
                return this.type === 'audio'
            },

            isDocument() {
                return this.type === 'document'
            },

            isMisc() {
                return this.type === 'misc'
            },

            type() {
                let type = (_.split(this.file.mimetype, '/', 1))[0]

                switch(type) {
                    case 'image':
                        return 'image'
                        break
                    case 'audio':
                        return 'audio'
                        break
                    case 'video':
                        return 'video'
                        break
                    case 'application':
                    case 'text':
                        return 'document'
                        break
                    default:
                        return 'misc'
                }
            },

            bytes() {
                let bytes = this.file.bytes
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
        },

        methods: {
            ...mapActions({
                toggleFileSelection: 'filemanager/toggleFileSelection',
            }),

            select() {
                this.selected = ! this.selected

                this.toggleFileSelection(this.file.id)
            },

            preview() {
                this.$router.push({ path: '/files/preview/' + this.file.uuid })
            },

            edit() {
                this.isEditing = true

                this.$nextTick(() => {
                    this.$refs.edit.focus()
                    this.$refs.edit.select()
                })
            },

            done() {
                this.isEditing = false
            },

            update() {
                if (this.isEditing) {
                    this.done()

                    if (this.file.name === '') {
                        this.file.name = this.name

                        toast('The file\'s name is required', 'warning')
                    } else {
                        let form = new FormData()

                        form.append('name', this.file.name)

                        axios.patch('/api/files/' + this.file.id, form).then((response) => {
                            this.name = this.file.name

                            toast('The file\'s name was successfully updated', 'success')
                        }).catch((error) => {
                            this.file.name = this.name

                            toast(error.message, 'danger')
                        })
                    }    
                }
            },
        }
    }
</script>
