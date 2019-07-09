<template>
    <div class="asset-manager">
        <input type="file" multiple class="hidden" ref="fileInput" @change="uploadAssets($event.target.files)">

        <div class="flex py-2 mb-4">
            <p-button theme="primary" class="mr-4" @click="$refs.fileInput.click()">Upload</p-button>
            <p-button class="mr-4" @click="createDirectoryModal = true">Create Directory</p-button>
            <p-button class="mr-4" @click="toggleSelectAll">Select all</p-button>
            <p-button class="mr-4" @click="deleteSelected">Delete Selected</p-button>

            <p-button v-if="view === 'grid'" @click="view = 'list'">Grid view</p-button>
            <p-button v-if="view === 'list'" @click="view = 'grid'">List view</p-button>

            <div class="flex-grow"></div>

            <p-button @click="$bus.$emit('closeAssetManager')" v-if="modal">Close</p-button>
        </div>

        <div class="py-12 mb-4 text-center border-2 border-dashed cursor-pointer" ref="dropArea" @drop="uploadAssets($event.dataTransfer.files)" @click="$refs.fileInput.click()">
            <h3 class="mb-0 cursor-pointer"><fa-icon icon="image"></fa-icon> Drag & Drop</h3>
        </div>

        <table class="mb-4" v-if="view === 'list'">
            <tr class="hover:bg-grey-lighter cursor-pointer" v-if="activeDirectory" @click="goUpDirectory">
                <td colspan="4" class="text-center">
                    Go up directory
                </td>
            </tr>

            <tr v-if="assets.data && (assets.data.length + directories.length === 0)">
                <td colspan="4" class="text-center">
                    No assets
                </td>
            </tr>

            <tr class="flex hover:bg-grey-lighter cursor-pointer" v-for="directory in directories" @click="$bus.$emit('openEditDirectoryModal', {directory, onChange: getDirectories})" @dblclick="goToDirectory(directory)">
                <td class="flex-shrink">
                    <input type="checkbox" :checked="selectedDirectories.includes(directory.id)" @click.stop="toggleSelectDirectory(directory)">
                </td>
                <td class="flex-shrink">
                    <div class="font-awesome-icon-container text-center">
                        <fa-icon :icon="['fas', 'folder']" size="lg"></fa-icon>
                    </div>
                </td>
                <td class="flex-grow">{{ directory.name }}</td>
            </tr>

            <tr v-for="asset in assets.data" class="flex hover:bg-grey-lighter cursor-pointer" @click="editFile(asset)">
                <td class="flex-shrink">
                    <input type="checkbox" :checked="selectedAssets.includes(asset.id)" @click.stop="toggleSelectAsset(asset)">
                </td>
                <td class="flex-shrink">
                    <div v-if="isImage(asset)" class="thumbnail border" :style="{backgroundImage: `url(${asset.url})`}"></div>
                    <div v-else class="font-awesome-icon-container text-center">
                        <fa-icon :icon="['fas', 'file']" size="lg"></fa-icon>
                    </div>
                </td>
                <td class="flex-grow">{{ asset.name }}</td>
            </tr>
        </table>

        <div v-else class="flex flex-wrap -mx-2">
            <div v-for="directory in directories" class="md:w-1/2 lg:w-1/4 xl:w-1/5 mb-4">
                <div class="bg-white shadow border mx-2 h-full">
                    <div class="bg-center bg-cover h-32 cursor-pointer relative flex items-center justify-center" style="background-color: #cccccc" @click="toggleSelectDirectory(directory)" @dblclick="goToDirectory(directory)">
                        <div class="bg-white px-2 inline-block border-r border-b rounded-br absolute pin-t pin-l">
                            <input type="checkbox" :checked="selectedDirectories.includes(directory.id)" @click.stop="toggleSelectDirectory(directory)">
                        </div>

                        <fa-icon :icon="['fas', 'folder']" size="4x"></fa-icon>
                    </div>

                    <div class="p-2">
                        <div class="truncate">{{ directory.name }}</div>
                    </div>
                </div>
            </div>

            <div v-for="asset in assets.data" class="md:w-1/2 lg:w-1/4 xl:w-1/5 mb-4">
                <div class="bg-white shadow border mx-2 h-full">
                    <div class="bg-center bg-cover h-32 cursor-pointer relative flex items-center justify-center" :style="gridPreviewStyle(asset)" @click="toggleSelectAsset(asset)">
                        <div class="bg-white px-2 inline-block border-r border-b rounded-br absolute pin-t pin-l">
                            <input type="checkbox" :checked="selectedAssets.includes(asset.id)" @click.stop="toggleSelectAsset(asset)">
                        </div>

                        <fa-icon v-if="!isImage(asset)" :icon="['fas', 'file']" size="4x"></fa-icon>
                    </div>

                    <div class="p-2">
                        <div class="truncate">{{ asset.name }}</div>

                        <p-button @click="editFile(asset)">Edit</p-button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="assets.meta" class="text-center">
            <p-pagination
                    :total="assets.meta.last_page"
                    v-model="assets.meta.current_page"
                    @input="changePage($event)"
            ></p-pagination>
        </div>

        <p-modal v-model="createDirectoryModal" class="create-directory" name="create-directory" title="Create Directory" no-footer no-outside-close>
            <form @submit.prevent="createDirectory">
                <p-input label="Label" v-model="newDirectoryName"></p-input>

                <div class="text-right">
                    <p-button theme="primary" type="submit">Create</p-button>
                </div>
            </form>
        </p-modal>
    </div>
</template>

<script>
export default {
    props: ['modal'],

    data() {
        return {
            view: 'list',
            activeDirectory: null,

            assets: {},
            directories: [],

            selectedAssets: [],
            selectedDirectories: [],

            params: this.originalQueryParams(),

            createDirectoryModal: false,
            newDirectoryName: null,

            editModal: false,
            editingAsset: null,
        }
    },

    mounted() {
        let dragEvents = ['dragenter', 'dragover', 'dragleave', 'drop']

        dragEvents.forEach((eventName) => {
            this.$refs.dropArea.addEventListener(eventName, (e) => {
                e.preventDefault()
                e.stopPropagation()
            }, false)
        })
    },

    methods: {
        getData() {
            this.clearSelected()

            return Promise.all([
                this.getAssets(),
                this.getDirectories(),
            ])
        },

        originalQueryParams() {
            return {
                page: 1,
                directory_id: null,
            }
        },

        reset() {
            this.assets = {}
            this.directories = []
            this.selectedAssets = []
            this.selectedDirectories = []
            this.params = this.originalQueryParams()
        },

        getAssets() {
            return axios.get('/api/assets', {params: this.params}).then(({data}) => {
                this.assets = data
            })
        },

        getDirectories() {
            return axios.get('/api/directories', {params: this.params}).then(({data}) => {
                this.directories = data.data
            })
        },

        goToRootDirectory() {
            this.params.directory_id = null

            this.getData()
        },

        goToDirectory(directory) {
            this.params.directory_id = directory.id

            this.getData().then(() => {
                this.activeDirectory = directory
            })
        },

        goUpDirectory() {
            this.params.directory_id = this.activeDirectory.parent_id

            // get parent directory
            if (this.activeDirectory.parent_id) {
                axios.get(`/api/directories/${this.activeDirectory.parent_id}`).then(({data}) => {
                    this.activeDirectory = data.data
                })
            } else {
                this.activeDirectory = null
            }

            this.getData()
        },

        createDirectory() {
            let data = {
                name: this.newDirectoryName,
                parent_id: this.params.directory_id,
            }

            axios.post('/api/directories', data).then(() => {
                this.getData()
                this.$bus.$emit('refreshSidebarDirectories')

                this.createDirectoryModal = false
                this.newDirectoryName = null
            })
        },

        toggleSelectDirectory(directory) {
            if (this.selectedDirectories.includes(directory.id)) {
                this.selectedDirectories = this.selectedDirectories.filter(item => item !== directory.id)
            } else {
                this.selectedDirectories.push(directory.id)
            }
        },

        toggleSelectAsset(asset) {
            if (this.selectedAssets.includes(asset.id)) {
                this.selectedAssets = this.selectedAssets.filter(item => item !== asset.id)
            } else {
                this.selectedAssets.push(asset.id)
            }
        },

        toggleSelectAll() {
            if ((this.selectedAssets.length + this.selectedDirectories.length) === (this.assets.data.length + this.directories.length)) {
                this.clearSelected()
            } else {
                this.selectedAssets = this.assets.data.map(asset => asset.id)
                this.selectedDirectories = this.directories.map(directory => directory.id)
            }
        },

        clearSelected() {
            this.selectedAssets = []
            this.selectedDirectories = []
        },

        uploadAssets(files) {
            if (files.length === 0) {
                return
            }

            let formData = new FormData()

            if (this.params.directory_id) {
                formData.append('directory_id', this.params.directory_id)
            }

            for (let i = 0; i < files.length; i++) {
                formData.append('files[]', files[i])
            }

            axios.post('/api/assets', formData).then(() => {
                this.getData()
            })
        },

        deleteSelected() {
            let promises = []

            this.selectedAssets.forEach((assetId) => {
                promises.push(axios.delete(`/api/assets/${assetId}`))
            })

            this.selectedDirectories.forEach((directoryId) => {
                promises.push(axios.delete(`/api/directories/${directoryId}`))
            })

            Promise.all(promises).then(() => {
                toast('Files deleted.')

                this.getData()
                this.$bus.$emit('refreshSidebarDirectories')
            })
        },

        deleteAsset(asset) {
            axios.delete(`/api/assets/${asset.id}`).then(() => {
                toast('File deleted.')

                this.selectedAssets = []
                this.getData()
                this.closeEditFileModal()
            })
        },

        changePage(page) {
            this.params.page = page
            this.getData()
        },

        isImage(asset) {
            return asset.mimetype.startsWith('image/')
        },

        gridPreviewStyle(asset) {
            if (this.isImage(asset)) {
                return {
                    backgroundImage: `url(${asset.url})`
                }
            }

            return {
                backgroundColor: '#ccc'
            }
        },

        editFile(asset) {
            this.$bus.$emit('openEditFileModal', {asset, onChange: this.getData})
        },

        closeEditFileModal() {
            this.editingAsset = null
            this.editModal = false
        },
    },
}
</script>

<style lang="scss">
.asset-manager {
    .modal__header,
    .modal__body,
    .modal__footer {
        padding: .5rem 1rem;
    }

    table {
        tr {
            margin-bottom: 0;
        }

        td {
            padding: .5rem 1rem;
        }
    }

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

    .edit-image {
        //
    }
}
</style>
