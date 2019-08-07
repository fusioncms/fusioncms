<template>
    <div>
        <portal to="actions" v-if="! inline">
            <p-button @click.prevent="viewGrid"><fa-icon class="fa-fw mr-2" :icon="['fas', 'th-large']"></fa-icon> Grid</p-button>
            <p-button @click.prevent="viewList"><fa-icon class="fa-fw mr-2" :icon="['fas', 'th-list']"></fa-icon> List</p-button>
            <p-button><fa-icon class="fa-fw mr-2" :icon="['fas', 'trash-alt']"></fa-icon> Delete</p-button>
            <p-button><fa-icon class="fa-fw mr-2" :icon="['fas', 'reply-all']"></fa-icon> Move</p-button>
            <p-button v-modal:new-folder><fa-icon class="fa-fw mr-2" :icon="['fas', 'folder']"></fa-icon> New Folder</p-button>
            <p-button v-modal:upload><fa-icon class="fa-fw mr-2" :icon="['fas', 'upload']"></fa-icon> Upload</p-button>
        </portal>

        <div class="row">
            <div class="side-container">
                <p-card>
                    <p-input name="search" placeholder="Search" v-model="search"></p-input>

                    <div class="list">
                        <span class="list--separator">Display</span>
                        
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'asterisk']"></fa-icon> Everything</router-link>
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'images']"></fa-icon> Images</router-link>
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'video']"></fa-icon> Videos</router-link>
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'volume-up']"></fa-icon> Audio</router-link>
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'file-alt']"></fa-icon> Documents</router-link>

                        <span class="list--separator">Sort</span>
                        
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'sort-amount-down']"></fa-icon> Name</router-link>
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'bars']"></fa-icon> Filesize</router-link>
                        <router-link :to="{ name: 'users' }" class="list--item leading-loose" exact><fa-icon class="fa-fw mr-2" :icon="['fas', 'bars']"></fa-icon> Last Modified</router-link>

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
                <p-datatable name="list-view" endpoint="/datatable/users" sort-by="name" :per-page="10" no-filtering v-show="view == 'list'">
                </p-datatable>

                <div class="card" v-show="view == 'grid'">
                    <div class="border-b border-grey-lighter px-8 py-2 text-grey-darker flex items-center">
                        <span class="mr-2">
                            <fa-icon :icon="['fas', 'server']" class="fa-fw"></fa-icon> Local
                        </span>

                        <span class="mr-2">
                            <fa-icon :icon="['fas', 'chevron-right']" class="mr-1"></fa-icon> Folder
                        </span>
                    </div>

                    <div class="card__body">
                        <div class="gallery mb-12" v-if="filteredDirectories.length">
                            <div class="gallery-wrapper" v-if="currentDirectory != null">
                                <div class="gallery-item" @dblclick="preview(directory.name)">
                                    <p-img lazySrc="/img/folder.svg" :width="200" :height="200" alt="Go up one directory" background-color="#ffffff" class="gallery-image"></p-img>
                                </div>

                                <p class="leading-tight mt-2">
                                    <span class="block text-sm truncate">Go up</span>
                                    <span class="text-xs font-mono text-grey-dark">..</span>
                                </p>
                            </div>

                            <div class="gallery-wrapper" v-for="directory in filteredDirectories" :key="directory.id">
                                <div class="gallery-item" @dblclick="preview(directory.name)">
                                    <p-img lazySrc="/img/folder.svg" :width="200" :height="200" aspect-ratio :alt="directory.name" background-color="#ffffff" class="gallery-image"></p-img>
                                </div>

                                <p class="leading-tight mt-2">
                                    <span class="block text-sm truncate">{{ directory.name }}</span>
                                    <span class="text-xs font-mono text-grey-dark">-- items</span>
                                </p>
                            </div>
                        </div>

                        <div class="gallery" v-if="filteredFiles.length">
                            <div class="gallery-wrapper flex-auto" v-for="file in filteredFiles" :key="file.uuid">
                                <div class="gallery-item" :class="{'gallery-item--selected': isSelected(file.uuid)}" @click.stop="select(file.uuid)" @dblclick="preview(file.uuid)">
                                    <p-img :lazySrc="file.url + '?w=200&h=200&fit=crop'" :width="200" :height="200" :alt="file.description" class="gallery-image"></p-img>
                                </div>

                                <p class="leading-tight mt-2">
                                    <span class="block text-sm truncate">{{ file.name }}</span>
                                    <span class="text-xs font-mono text-grey-dark">{{ file.extension }}</span>
                                </p>
                            </div>
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
        </portal>
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        name: 'file-manager',

        props: {
            files: {
                type: Array,
                default: () => {
                    return []
                },
            },

            directories: {
                type: Array,
                default: () => {
                    return []
                },
            },

            inline: {
                type: Boolean,
                default: false,
            },
    },

        data() {
            return {
                view: 'grid',
                currentDirectory: null,
                selected: [],
                search: '',
            }
        },

        computed: {
            filteredFiles() {
                let vm = this

                return this.files.filter(function(file) {
                    return file.name.toLowerCase().startsWith(vm.search.toLowerCase())
                })
            },

            filteredDirectories() {
                let vm = this

                return this.directories.filter(function(directory) {
                    return directory.name.toLowerCase().startsWith(vm.search.toLowerCase())
                })
            },
        },

        methods: {
            viewList() {
                this.view = 'list'
            },

            viewGrid() {
                this.view = 'grid'
            },

            select(uuid) {
                this.selected = _.xor(this.selected, [uuid])
            },

            isSelected(uuid) {
                return _.includes(this.selected, uuid)
            },

            preview(uuid) {
                console.log('previewing ' + uuid)
            }
        },
    }
</script>
