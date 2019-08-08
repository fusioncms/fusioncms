<template>
    <div class="gallery-wrapper">
        <div class="gallery-item" @dblclick="preview">
            <p-img lazySrc="/img/folder.svg" :width="200" :height="200" aspect-ratio :alt="name" background-color="#ffffff" class="gallery-image"></p-img>
        </div>

        <p class="leading-tight mt-2">
            <span class="block text-sm truncate" v-show="! isEditing" @dblclick="edit">{{ name }}</span>
            <input type="text" class="form__control form__control--sm text-center" :value="name" ref="edit" v-show="isEditing" @blur="update" @keyup.enter="update" @keyup.esc="done">
            <span class="text-xs font-mono text-grey-dark">-- items</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'file-manager-directory',

        data() {
            return {
                isEditing: false,
            }
        },

        props: {
            name: {
                type: String,
                required: true,
            }
        },

        methods: {
            preview() {

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
    
                    toast('Directory name updated (not yet implemented)', 'success')
                }
            }
        }
    }
</script>
