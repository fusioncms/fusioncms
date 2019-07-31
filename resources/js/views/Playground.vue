<template>
    <div>
        <portal to="title">
            <app-title icon="images">File Manager</app-title>
        </portal>

        <portal to="actions">
            <p-button @click.prevent="viewGrid"><fa-icon class="fa-fw mr-2" :icon="['fas', 'th-large']"></fa-icon> Grid</p-button>
            <p-button @click.prevent="viewList"><fa-icon class="fa-fw mr-2" :icon="['fas', 'th-list']"></fa-icon> List</p-button>
            <p-button><fa-icon class="fa-fw mr-2" :icon="['fas', 'trash-alt']"></fa-icon> Delete</p-button>
            <p-button><fa-icon class="fa-fw mr-2" :icon="['fas', 'reply-all']"></fa-icon> Move</p-button>
            <p-button><fa-icon class="fa-fw mr-2" :icon="['fas', 'folder']"></fa-icon> New Folder</p-button>
            <p-button><fa-icon class="fa-fw mr-2" :icon="['fas', 'upload']"></fa-icon> Upload</p-button>
        </portal>

        <div class="row">
            <div class="side-container">
                <p-card>
                    <p-input name="search" placeholder="Search"></p-input>

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

                        <span class="list--separator">Locations</span>

                        <div class="list--item">
                            <p-treeview :items="directories" v-model="selected">
                                <template slot="prepend" slot-scope="{ node, open }">
                                    <fa-icon v-if="open && ! node.file" :icon="node.icon || ['fas', 'folder-open']" class="fa-fw mr-2"></fa-icon>
                                    <fa-icon v-if="! open && ! node.file" :icon="node.icon || ['fas', 'folder']" class="fa-fw mr-2"></fa-icon>
                                </template>
                            </p-treeview>
                        </div>
                    </div>
                </p-card>
            </div>

            <div class="content-container">
                <p-datatable name="list-view" endpoint="/datatable/users" sort-by="name" :per-page="10" no-filtering v-show="listView">
                </p-datatable>

                <div class="card" v-show="!listView">
                    <div class="border-b border-grey-lighter px-8 py-2 text-grey-darker flex items-center">
                        <span class="mr-2">
                            <fa-icon :icon="['fas', 'server']" class="fa-fw"></fa-icon> Local
                        </span>

                        <span class="mr-2">
                            <fa-icon :icon="['fas', 'chevron-right']" class="mr-1"></fa-icon> Folder
                        </span>
                    </div>

                    <div class="card__body">
                        <div class="gallery mb-12">
                            <div class="gallery-wrapper">
                                <div>
                                    <fa-icon :icon="['fas', 'folder']" class="text-10xl text-grey-darker"></fa-icon>
                                </div>

                                <p class="leading-tight mt-2">
                                    <span class="block text-sm truncate">Go up</span>
                                    <span class="text-xs font-mono text-grey-dark">..</span>
                                </p>
                            </div>

                            <div class="gallery-wrapper" v-for="index in 12" :key="index">
                                <div>
                                    <fa-icon :icon="['fas', 'folder']" class="text-10xl text-grey-darker"></fa-icon>
                                </div>

                                <p class="leading-tight mt-2">
                                    <span class="block text-sm truncate">Folder</span>
                                    <span class="text-xs font-mono text-grey-dark">1,341 items</span>
                                </p>
                            </div>
                        </div>

                        <div class="gallery">
                            <div class="gallery-wrapper flex-auto" v-for="index in 42" :key="index">
                                <div class="gallery-item">
                                    <img class="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=750&h=750&fit=crop" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan">
                                </div>

                                <p class="leading-tight mt-2">
                                    <span class="block text-sm truncate">tokyo_rain_22222222223455643324345233.png</span>
                                    <span class="text-xs font-mono text-grey-dark">413 KB</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listView: false,
                selected: {},
                directories: [
                    {
                        id: 1,
                        name: 'Local',
                        icon: ['fas', 'server'],
                        children: [
                            {
                                id: 4,
                                name: 'Folder',
                                isFolder: true,
                                children: [
                                    {
                                        id: 5,
                                        name: 'Folder',
                                        isFolder: true,
                                    },
                                    {
                                        id: 10,
                                        name: 'Folder',
                                        isFolder: true,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 13,
                        name: 'Backups',
                        icon: ['fab', 'digital-ocean'],
                        children: [
                            {
                                id: 16,
                                name: 'Folder',
                                isFolder: true,
                                children: [
                                    {
                                        id: 17,
                                        name: 'Folder',
                                        isFolder: true,
                                    },
                                    {
                                        id: 22,
                                        name: 'Folder',
                                        isFolder: true,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },

        methods: {
            viewList() {
                this.listView = true
            },

            viewGrid() {
                this.listView = false
            },
        }
    }
</script>
