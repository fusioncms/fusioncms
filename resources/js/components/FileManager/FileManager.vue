<template>
    <div class="file-manager__wrap" @dragenter="showDZ()">
        <div class="file-manager__dropzone" :class="[dzVisible ? 'file-manager__dropzone--visible' : '']">
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" @vdropzone-drag-leave="hideDZ()" @vdropzone-complete="hideDZ()"></vue-dropzone>
        </div>
        
        <portal to="actions" v-if="! inline">

            <div class="inline-block mr-4" v-show="hasSelection">
                <div class="inline-block mr-4">
                    <p-button v-modal:delete theme="danger">Delete</p-button>
                </div>
                
                <p-button @click.prevent="clearSelection">Uncheck All</p-button>
                <p-button>Move</p-button>
            </div>

            <div class="inline-block mr-4">
                <p-button @click.prevent="toggleView"> {{ (view === 'list' ? 'View Grid' : 'View List') }}</p-button>
            </div>
            
            <p-button v-modal:new-folder>New Folder</p-button>
            <p-button theme="primary" v-modal:upload>Upload</p-button>
        </portal>

        <div class="row">
            <div class="side-container">
                <p-card>
                    <p-input name="search" placeholder="Search" v-model="search"></p-input>

                    <div class="list">
                        <span class="list--separator">Display</span>
                        
                        <a href="#" @click.prevent="filterBy('everything')" class="list--item leading-loose" :class="{'router-link-active': isFilteringBy('everything')}"><fa-icon class="fa-fw mr-2" :icon="['fas', 'asterisk']"></fa-icon> Everything</a>
                        <a href="#" @click.prevent="filterBy('images')" class="list--item leading-loose" :class="{'router-link-active': isFilteringBy('images')}"><fa-icon class="fa-fw mr-2" :icon="['fas', 'images']"></fa-icon> Images</a>
                        <a href="#" @click.prevent="filterBy('videos')" class="list--item leading-loose" :class="{'router-link-active': isFilteringBy('videos')}"><fa-icon class="fa-fw mr-2" :icon="['fas', 'video']"></fa-icon> Videos</a>
                        <a href="#" @click.prevent="filterBy('audio')" class="list--item leading-loose" :class="{'router-link-active': isFilteringBy('audio')}"><fa-icon class="fa-fw mr-2" :icon="['fas', 'volume-up']"></fa-icon> Audio</a>
                        <a href="#" @click.prevent="filterBy('documents')" class="list--item leading-loose" :class="{'router-link-active': isFilteringBy('documents')}"><fa-icon class="fa-fw mr-2" :icon="['fas', 'file-alt']"></fa-icon> Documents</a>

                        <span class="list--separator">Sort</span>
                        
                        <a href="#" @click.prevent="sortBy('name')" class="list--item leading-loose" :class="{'router-link-active': isSortingBy('name')}"><fa-icon class="fa-fw mr-2" :icon="['fas', sortingIcon('name')]"></fa-icon> Name</a>
                        <a href="#" @click.prevent="sortBy('bytes')" class="list--item leading-loose" :class="{'router-link-active': isSortingBy('bytes')}"><fa-icon class="fa-fw mr-2" :icon="['fas', sortingIcon('bytes')]"></fa-icon> Filesize</a>
                        <a href="#" @click.prevent="sortBy('updated_at')" class="list--item leading-loose" :class="{'router-link-active': isSortingBy('updated_at')}"><fa-icon class="fa-fw mr-2" :icon="['fas', sortingIcon('updated_at')]"></fa-icon> Last Modified</a>

                        <!-- File Tree Explorer -->

                        <!-- <div v-if="directories.length">
                            <span class="list--separator">Locations</span>

                            <div class="list--item">
                                <p-treeview :items="directories" v-model="selected">
                                    <template slot="prepend" slot-scope="{ node, open }">
                                        <fa-icon v-if="open && ! node.file" :icon="node.icon || ['fas', 'folder-open']" class="fa-fw mr-2"></fa-icon>
                                        <fa-icon v-if="! open && ! node.file" :icon="node.icon || ['fas', 'folder']" class="fa-fw mr-2"></fa-icon>
                                    </template>
                                </p-treeview>
                            </div>
                        </div> -->
                    </div>
                </p-card>
            </div>

            <div class="content-container">
                <div class="card">
                    <div class="border-b border-gray-200 px-8 py-2 text-gray-800 flex items-center">
                        <span class="mr-2">
                            <fa-icon :icon="['fas', 'server']" class="fa-fw"></fa-icon> Local
                        </span>

                        <!-- Folder Root Navigation -->

                        <!-- <span class="mr-2">
                            <fa-icon :icon="['fas', 'chevron-right']" class="mr-1"></fa-icon> Folder
                        </span> -->
                    </div>

                    <table class="table text-sm" v-show="view == 'list'">
                        <thead>
                            <tr>
                                <th class="text-center w-100px"></th>
                                <th>Name</th>
                                <th class="text-right">File size</th>
                                <th class="text-right">Mimetype</th>
                                <th class="text-right">Last modified</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="file in files" :key="file.uuid">
                                <td class="text-center w-100px"><file-manager-file small :file="file"></file-manager-file></td>
                                <td>{{ file.name }}</td>
                                <td class="text-right">{{ bytes(file.bytes) }}</td>
                                <td class="text-right">{{ file.mimetype }}</td>
                                <td class="text-right">{{ lastModified(file.updated_at) }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="card__body" v-show="view == 'grid'">
                        <div class="gallery mb-12" v-if="search === ''">
                            <file-manager-directory
                                v-if="currentDirectory"
                                :key="'directory-' + currentDirectory"
                                :directory="{id: parentDirectory, name: 'Go up'}"
                                subtitle=".."
                                unselectable>
                            </file-manager-directory>

                            <file-manager-directory
                                v-if="! currentDirectory"
                                :key="'directory-' + currentDirectory"
                                :directory="{id: null, name: ''}"
                                subtitle="."
                                unselectable>
                            </file-manager-directory>

                            <file-manager-directory
                                v-for="directory in directories"
                                :key="directory.id"
                                :directory="directory"
                                :subtitle="directory.files_count + ' items'">
                            </file-manager-directory>
                        </div>

                        <div class="gallery" v-if="files.length">
                            <file-manager-file
                                v-for="file in files"
                                :key="file.uuid"
                                :file="file">
                            </file-manager-file>
                        </div>
                    </div>

                    <div class="card__body text-right" v-if="totalPages > 1">
                        <p-pagination
                            @input="setCurrentPage($event)"
                            :total="totalPages"
                            :value="currentPage"
                            :max-visible-pages="3"
                            >
                        </p-pagination>
                    </div>
                </div>
            </div>
        </div>

        <portal to="modals">
            <p-modal name="upload" title="Upload Files" no-footer large>
                <p-upload name="files" multiple v-model="filesToUpload" @input="upload"></p-upload>
            </p-modal>

            <new-folder-modal></new-folder-modal>

            <delete-selected-files-modal></delete-selected-files-modal>
        </portal>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import moment from 'moment-timezone'
    import _ from 'lodash'
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: 'file-manager',

        components: {
            vueDropzone: vue2Dropzone
        },
        
        data() {
            return {
                filesToUpload: [],
                dzVisible: false,
                dropzoneOptions: {
                  url: '/api/files',
                  thumbnailWidth: 150,
                  maxFilesize: 0.5,
                  headers: { "My-Awesome-Header": "header value" }
              }
            }
        },

        props: {
            inline: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            ...mapGetters({
                currentDirectory: 'filemanager/getCurrentDirectory',
                parentDirectory: 'filemanager/getParentDirectory',
                currentPage: 'filemanager/getCurrentPage',
                directories: 'filemanager/getDirectories',
                hasSelection: 'filemanager/hasSelection',
                totalPages: 'filemanager/getTotalPages',
                direction: 'filemanager/getDirection',
                display: 'filemanager/getDisplay',
                loading: 'filemanager/getLoading',
                files: 'filemanager/getFiles',
                sort: 'filemanager/getSort',
                view: 'filemanager/getView',
            }),

            search: {
                get() {
                    return this.$store.state.filemanager.search
                },

                set(value) {
                    this.$store.commit('filemanager/setSearch', value)
                }
            }
        },

        watch: {
            display(value) {
                this.fetchFilesAndDirectories()
            },

            sort(value) {
                this.fetchFilesAndDirectories()
            },

            search(value) {
                this.fetchFilesAndDirectories()
            },

            direction(value) {
                this.fetchFilesAndDirectories()
            },

            currentPage(value) {
                this.fetchFilesAndDirectories()
            },
        },

        methods: {
            ...mapActions({
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
                clearDirectorySelection: 'filemanager/clearDirectorySelection',
                clearFileSelection: 'filemanager/clearFileSelection',
                toggleDirection: 'filemanager/toggleDirection',
                setCurrentPage: 'filemanager/setCurrentPage',
                setDirection: 'filemanager/setDirection',
                setDisplay: 'filemanager/setDisplay',
                toggleView: 'filemanager/toggleView',
                setFiles: 'filemanager/setFiles',
                addFile: 'filemanager/addFile',
                setSort: 'filemanager/setSort',
            }),

            isFilteringBy(what) {
                return what === this.display
            },

            isSortingBy(what) {
                return what === this.sort
            },

            upload() {
                let vm = this

                _.each(this.filesToUpload, function(file, index) {
                    let formData = new FormData()
                    formData.append('file', file)
                    formData.append('directory_id', vm.currentDirectory)

                    axios.post('/api/files', formData, {
                        before: (xhr) => {
                            file.xhr = xhr
                        },
                    }).then((response) => {
                        vm.fetchFilesAndDirectories()

                        vm.filesToUpload.splice(index, 1)

                        toast(response.data.data.name + ' uploaded', 'success')
                    })
                })
            },

            clearSelection() {
                this.clearFileSelection()
                this.clearDirectorySelection()
            },

            filterBy(filter) {
                this.setDisplay(filter)
            },

            sortBy(key) {
                if (this.sort === key) {
                    this.toggleDirection()
                } else {
                    this.setSort(key)
                    this.setDirection('asc')
                }
            },

            preview(id) {
                console.log('previewing ' + id)
            },

            bytes(bytes) {
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

            lastModified(timestamp) {
                return moment(timestamp).format('MMM Do, YYYY')
            },

            sortingIcon(by) {
                if (by === this.sort) {
                    if (this.direction === 'asc') {
                        return 'sort-amount-down'
                    } else {
                        return 'sort-amount-up'
                    }
                }

                return 'bars'
            },

            showDZ() {
                console.log('show')
                this.dzVisible = true
            },
            hideDZ() {
                console.log('hide')
                this.dzVisible = false
            }
        }
    }
</script>
