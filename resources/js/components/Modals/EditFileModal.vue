<template>
    <p-modal v-model="open" class="file-edit" name="file-edit" title="Edit File" no-footer>
        <form @submit.prevent="updateAsset" v-if="asset">
            <div class="p-4 bg-grey-darker text-center mb-4">
                <img :src="asset.url" alt class="edit-image border" v-if="isImage(asset)">
                <div v-else class="py-8">
                    <fa-icon icon="file" size="6x"></fa-icon>
                </div>
            </div>

            <p-input label="Name" v-model="form.data.name"></p-input>
            <p-textarea label="Description" v-model="form.data.description"></p-textarea>

            <div class="flex">
                <p-button @click="deleteAsset(asset)" type="button">Delete</p-button>
                <div class="flex-grow"></div>
                <p-button theme="primary" type="submit">Submit</p-button>
            </div>
        </form>
    </p-modal>
</template>

<script>
import Form from '../../forms/Form'

export default {
    mixins: [require('../../mixins/assets').default],

    data() {
        return {
            open: false,
            asset: null,
            onChange: null,
            form: new Form({
                name: null,
                description: null,
            })
        }
    },

    mounted() {
        this.$bus.$on('openEditFileModal', ({asset, onChange}) => {
            this.open = true
            this.asset = asset
            this.onChange = onChange

            this.form.data.name = asset.name
            this.form.data.description = asset.description
        })
    },

    methods: {
        updateAsset() {
            axios.patch(`/api/assets/${this.asset.id}`, this.form.data).then(() => {
                if (this.onChange) {
                    this.onChange()
                }

                toast('Asset updated')
            })
        },

        deleteAsset() {
            axios.delete(`/api/assets/${this.asset.id}`).then(() => {
                if (this.onChange) {
                    this.onChange()
                }

                this.close()
            })
        },

        close() {
            this.open = false
            this.asset = null
            this.onChange = null
            this.form.reset()
        }
    }
}
</script>

<style scoped>

</style>
