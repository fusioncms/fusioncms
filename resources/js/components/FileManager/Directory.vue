<template>
    <div class="gallery-wrapper flex-auto" :class="{'gallery-wrapper--small': small}">
        <div
            class="gallery-item"
            :class="{'gallery-item--selected': isSelected, 'gallery-item--small': small}"
            @dblclick="open"
            :data-directory="directory.id"
            :draggable="true">
            <p-img
                src="/img/folder.svg"
                :width="200"
                :height="200"
                aspect-ratio
                :alt="name"
                background-color="#ffffff"
                class="gallery-image gallery--dropzone"
                :draggable="false">
            </p-img>
        </div>

        <div class="leading-tight mt-2" v-if="! small">
            <span class="block text-sm truncate" v-show="! isEditing" @dblclick="edit">{{ name }}</span>
            <input type="text" class="form__control form__control--sm text-center" v-model="directory.name" ref="edit" v-show="isEditing" @blur="update" @keyup.enter="update" @keyup.esc="done">

            <div class="flex flex-col text-center text-xs text-gray-600 mt-2 font-mono">
                <span v-html="subtitle"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'file-manager-directory',

        data() {
            return {
                name: this.directory.name,
                isEditing: false,
            }
        },

        props: {
            small: {
                type: Boolean,
                required: false,
                default: false,
            },

            directory: {
                type: Object,
                required: true,
            },

            unselectable: {
                type: Boolean,
                required: false,
                default: false,
            },

            subtitle: {
                type: String,
                required: false,
                default: '--'
            },
        },

        computed: {
            ...mapGetters({
                selected: 'filemanager/getSelectedDirectories'
            }),

            isSelected() {
                return _.includes(this.selected, this.directory.id)
            },
        },

        methods: {
            ...mapActions({
                setCurrentDirectory: 'filemanager/setCurrentDirectory',
                setParentDirectory: 'filemanager/setParentDirectory',
                clearFileSelection: 'filemanager/clearFileSelection',
                clearDirectorySelection: 'filemanager/clearDirectorySelection',
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
            }),

            open() {
                this.setCurrentDirectory(this.directory.id)
                this.setParentDirectory(this.directory.parent ? this.directory.parent.id : null)
                
                this.clearFileSelection()
                this.clearDirectorySelection()

                this.fetchFilesAndDirectories()
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

                    if (this.directory.name === '') {
                        this.directory.name = this.name
                        
                        toast('The directory\'s name is required', 'warning')
                    } else {
                        axios.patch('/api/directories/' + this.directory.id, {
                            name: this.directory.name
                        }).then((response) => {
                            this.name = this.directory.name

                            toast('The directory\'s name was successfully updated', 'success')
                        }).catch((error) => {
                            this.directory.name = this.name

                            toast(error.message, 'danger')
                        })
                    }
                }
            }
        }
    }
</script>
