<template>
    <div class="gallery-wrapper flex-auto" :class="{'gallery-wrapper--small': small}">
        <div
            class="gallery-item"
            :class="{'gallery-item--selected': isSelected, 'gallery-item--small': small}"
            @dblclick="preview"
            :draggable="true"
            :data-file="file.id"
        >
            <div v-if="isImage">
                <p-img
                    v-if="! small"
                    src="/img/image-small.svg"
                    background-color="#ffffff"
                    :lazySrc="largeFileSrc"
                    :width="200"
                    :height="200"
                    :alt="file.description"
                    :draggable="false"
                    class="gallery-image">
                </p-img>

                <p-img
                    v-else
                    src="/img/image-large.svg"
                    background-color="#ffffff"
                    :lazySrc="smallFileSrc"
                    :width="75"
                    :height="75"
                    :alt="file.description"
                    :draggable="false"
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
                    :draggable="false"
                    class="gallery-image">
                </p-img>

                <p-img
                    v-else
                    :src="'/img/' + type + '-large.svg'"
                    background-color="#ffffff"
                    :width="75"
                    :height="75"
                    :alt="file.description"
                    :draggable="false"
                    class="gallery-image">
                </p-img>
            </div>
        </div>

        <div class="leading-tight mt-2" v-if="! small">
            <span class="block text-sm truncate" v-show="! isEditing" @dblclick="edit">{{ file.name }}</span>
            <input type="text" class="form__control form__control--sm text-center" v-model="file.name" ref="edit" v-show="isEditing" @blur="update" @keyup.enter="update" @keyup.esc="done">
            
            <div class="flex flex-col text-center text-xs text-gray-600 mt-2 font-mono">
                <span>{{ bytes }}</span>
                <span>{{ file.extension }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'file-manager-file',

        data() {
            return {
                name: this.file.name,
                isEditing: false,
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
            ...mapGetters({
                selected: 'filemanager/getSelectedFiles'
            }),

            largeFileSrc(file) {
                return this.file.url + '?w=200&h=200&fit=crop&t=' + this.$moment.utc(this.file.updated_at)
            },

            smallFileSrc(file) {
                return this.file.url + '?w=75&h=75&fit=crop&t=' + this.$moment.utc(this.file.updated_at)
            },

            isSelected() {
                return _.includes(this.selected, this.file.id)
            },

            isImage() {
                return this.type === 'image'
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
                        axios.patch('/api/files/' + this.file.id, {
                            name: this.file.name
                        }).then((response) => {
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
