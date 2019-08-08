<template>
    <div class="gallery-wrapper flex-auto">
        <div class="gallery-item" :class="{'gallery-item--selected': selected}" @click.stop="select" @dblclick="preview">
            <p-img
                src="/img/file-placeholder.svg"
                background-color="#ffffff"
                :lazySrc="file.url + '?w=200&h=200&fit=crop'"
                :width="200"
                :height="200"
                :alt="file.description"
                class="gallery-image">
            </p-img>
        </div>

        <p class="leading-tight mt-2">
            <span class="block text-sm truncate" v-show="! isEditing" @dblclick="edit">{{ file.name }}</span>
            <input type="text" class="form__control form__control--sm text-center" :value="file.name" ref="edit" v-show="isEditing" @blur="update" @keyup.enter="update" @keyup.esc="done">
            <span class="text-xs font-mono text-grey-dark">{{ file.extension }}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'file-manager-file',

        data() {
            return {
                isEditing: false,
                selected: false,
            }
        },

        props: {
            file: {
                type: Object,
                required: true,
            }
        },

        methods: {
            select() {
                this.selected = ! this.selected
            },

            preview() {
                console.log('Preview ' + this.file.uuid)
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
    
                    toast('File name updated (not yet implemented)', 'success')
                }
            }
        }
    }
</script>
