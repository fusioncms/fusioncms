<template>
    <div>
        <portal to="title">Files</portal>

        <div class="bg-white p-4">
            <div class="row">
                <div class="col md:w-1/2 lg:w-1/4 xl:w-1/5">
                    <div class="mb-4">
                        <p-button @click="goToRoot">Root</p-button>
                    </div>

                    <p-treeview
                        v-model="activeDirectory"
                        :items="sidebarDirectories"
                        @input="$refs.fileManager.goToDirectory(activeDirectory)"
                    ></p-treeview>
                </div>
                <div class="col md:w-1/2 lg:w-3/4 xl:w-4/5">
                    <file-manager ref="fileManager"></file-manager>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FileManager from '../../components/FileManager'

export default {
    components: {
        FileManager
    },

    data() {
        return {
            activeDirectory: null,
            sidebarDirectories: [],

            createDirectoryModal: false,
            newDirectoryName: null,
        }
    },

    mounted() {
        this.getSidebarDirectories()
        this.$refs.fileManager.getData()

        this.$bus.$on('refreshSidebarDirectories', this.getSidebarDirectories)
    },

    methods: {
        getSidebarDirectories() {
            axios.get('/api/directories?recursive=true').then(({data}) => {
                this.sidebarDirectories = data.data
            })
        },

        goToRoot() {
            this.activeDirectory = null

            this.$refs.fileManager.goToRootDirectory()
        },
    },
}
</script>

<style scoped>
.thumbnail {
    width: 30px;
    height: 30px;
    background-position: center center;
    background-size: cover;
}

.font-awesome-icon-container {
    width: 30px;
    height: 30px;
}
</style>
