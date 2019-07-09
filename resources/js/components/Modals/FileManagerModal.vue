<template>
    <div>
        <p-modal v-model="open" class="asset-manager-modal" name="asset-manager" title="Asset Manager" extra-large no-outside-close no-header no-footer>
            <file-manager ref="fileManager" :modal="true"></file-manager>
        </p-modal>
    </div>
</template>

<script>
import FileManager from '../FileManager'

export default {
    components: {
        FileManager
    },

    data() {
        return {
            open: false,
        }
    },

    mounted() {
        this.$bus.$on('openAssetManager', () => {
            this.open = true
            this.$refs.fileManager.getData()
        })

        this.$bus.$on('closeAssetManager', () => {
            this.open = false
            this.$refs.fileManager.reset()
        })
    },

    methods: {
        close() {
            this.open = false
            this.$refs.fileManager.reset()
        },
    }
}
</script>

<style lang="scss">
.asset-manager-modal {
    .modal__header,
    .modal__body,
    .modal__footer {
        padding: .5rem 1rem;
    }
}
</style>
