<template>
    <p-modal v-model="open" title="Move to directory" name="select directory" no-footer>
        <p-treeview
                v-model="selectedDirectory"
                :items="directories"
        ></p-treeview>

        <div class="text-right">
            <p-button @click="close">Cancel</p-button>
            <p-button @click="select" theme="primary">Move</p-button>
        </div>
    </p-modal>
</template>

<script>
export default {
    data() {
        return {
            open: false,
            callback: null,
            selectedDirectory: null,
            directories: [],
        }
    },

    mounted() {
        this.$bus.$on('openSelectDirectoryModal', (callback) => {
            this.open = true
            this.callback = callback

            axios.get('/api/directories?recursive=true').then(({data}) => {
                this.directories = data.data
            })
        })
    },

    methods: {
        select() {
            this.callback(this.selectedDirectory)

            this.close()
        },

        close() {
            this.open = false
            this.callback = null
            this.selectedDirectory = null
        },
    },
}
</script>

<style scoped>

</style>
