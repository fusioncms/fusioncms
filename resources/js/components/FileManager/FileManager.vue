<template>
    <div>
        <portal to="actions" v-if="! inline">

            <div class="inline-block mr-4" v-if="hasSelection">
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
                        
                        <a href="#" @click.prevent="filterBy('everything')" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'asterisk']"></fa-icon> Everything</a>
                        <a href="#" @click.prevent="filterBy('images')" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'images']"></fa-icon> Images</a>
                        <a href="#" @click.prevent="filterBy('videos')" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'video']"></fa-icon> Videos</a>
                        <a href="#" @click.prevent="filterBy('audio')" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'volume-up']"></fa-icon> Audio</a>
                        <a href="#" @click.prevent="filterBy('documents')" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'file-alt']"></fa-icon> Documents</a>

                        <span class="list--separator">Sort</span>
                        
                        <a href="#" @click.prevent="sortBy('name')" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', sortingIcon('name')]"></fa-icon> Name</a>
                        <a href="#" @click.prevent="sortBy('bytes')" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', sortingIcon('bytes')]"></fa-icon> Filesize</a>
                        <a href="#" @click.prevent="sortBy('updated_at')" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', sortingIcon('updated_at')]"></fa-icon> Last Modified</a>

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
                    <div class="border-b border-grey-lighter px-8 py-2 text-grey-darker flex items-center">
                        <span class="mr-2">
                            <fa-icon :icon="['fas', 'server']" class="fa-fw"></fa-icon> Local
                        </span>

                        <!-- <span class="mr-2">
                            <fa-icon :icon="['fas', 'chevron-right']" class="mr-1"></fa-icon> Folder
                        </span> -->
                    </div>

                    <table class="table" v-show="view == 'list'">
                        <thead>
                            <tr>
                                <th class="text-center w-100px"></th>
                                <th>Name</th>
                                <th>File size</th>
                                <th>Mimetype</th>
                                <th>Last modified</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="file in files" :key="file.uuid">
                                <td class="text-center w-100px"><file-manager-file small :file="file"></file-manager-file></td>
                                <td>{{ file.name }}</td>
                                <td>{{ bytes(file.bytes) }}</td>
                                <td>{{ file.mimetype }}</td>
                                <td>{{ lastModified(file.updated_at) }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="card__body" v-show="view == 'grid'">
                        <div class="gallery mb-12" v-if="directories.length && search === ''">
                            <div class="gallery-wrapper" v-if="currentDirectory != null">
                                <div class="gallery-item" @dblclick="preview(directory.name)">
                                    <p-img lazySrc="/img/folder.svg" :width="200" :height="200" alt="Go up one directory" background-color="#ffffff" class="gallery-image"></p-img>
                                </div>

                                <p class="leading-tight mt-2">
                                    <span class="block text-sm truncate">Go up</span>
                                    <span class="text-xs font-mono text-grey-dark">..</span>
                                </p>
                            </div>

                            <file-manager-directory
                                v-for="directory in directories"
                                :key="directory.id"
                                :name="directory.name">
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
                </div>
            </div>
        </div>

        <portal to="modals">
            <p-modal name="upload" title="Upload Files" no-footer large>
                <p-upload></p-upload>
            </p-modal>

            <new-folder-modal></new-folder-modal>

            <delete-files-modal></delete-files-modal>
        </portal>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import moment from 'moment-timezone'
    import _ from 'lodash'

    export default {
        name: 'file-manager',

        props: {
            inline: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            ...mapGetters({
                files: 'filemanager/getFiles',
                directories: 'filemanager/getDirectories',
                hasSelection: 'filemanager/hasSelection',
                display: 'filemanager/getDisplay',
                sort: 'filemanager/getSort',
                direction: 'filemanager/getDirection',
                currentDirectory: 'filemanager/getCurrentDirectory',
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
        },

        methods: {
            ...mapActions({
                setFiles: 'filemanager/setFiles',
                setDisplay: 'filemanager/setDisplay',
                setSort: 'filemanager/setSort',
                setDirection: 'filemanager/setDirection',
                clearFileSelection: 'filemanager/clearFileSelection',
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
                toggleView: 'filemanager/toggleView',
            }),

            clearSelection() {
                this.clearFileSelection()
            },

            filterBy(filter) {
                this.setDisplay(filter)
            },

            sortBy(key) {
                this.setSort(key)
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
                    return 'sort-amount-down'
                }

                return 'bars'
            }
        },

        mounted() {
            // Fetch images and directories
            // if (this.files == null || this.directories == null) {

            // }
        },
    }
</script>
