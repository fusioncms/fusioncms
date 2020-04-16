<template>
    <p-modal v-model="open" class="directory-edit" name="directory-edit" title="Edit Directory" no-footer>
        <form @submit.prevent="updateDirectory" v-if="directory">
            <div class="p-4 bg-gray-800 text-center mb-4">
                <div class="py-8">
                    <fa-icon icon="folder" size="6x"></fa-icon>
                </div>
            </div>

            <p-input label="Name" v-model="form.data.name"></p-input>

            <div class="flex">
                <p-button @click="deleteDirectory(directory)" type="button">Delete</p-button>
                <div class="flex-grow"></div>
                <p-button theme="primary" type="submit">Submit</p-button>
            </div>
        </form>
    </p-modal>
</template>

<script>
import Form from '../../forms/Form'

export default {
    data() {
        return {
            open: false,
            directory: null,
            onChange: null,
            form: new Form({
                name: null,
            })
        }
    },

    mounted() {
        this.$bus.$on('openEditDirectoryModal', ({directory, onChange}) => {
            this.open = true
            this.directory = directory
            this.onChange = onChange

            this.form.name = directory.name
        })
    },

    methods: {
        updateDirectory() {
            axios.patch(`/api/directories/${this.directory.id}`, this.form.data).then(() => {
                if (this.onChange) {
                    this.onChange()
                }

                toast('Directory updated')
            })
        },

        deleteDirectory() {
            axios.delete(`/api/directories/${this.directory.id}`).then(() => {
                if (this.onChange) {
                    this.onChange()
                }

                this.close()
            })
        },

        close() {
            this.open = false
            this.directory = null
            this.onChange = null
            this.form.reset()
        }
    }
}
</script>

<style scoped>

</style>