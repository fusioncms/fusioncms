<template>
    <div class="file-manager__wrap" @dragenter="setDropzoneVisible(true)">
        <file-uploader ref="uploader"></file-uploader>

        <div class="row">
            <div class="content-container">
                <div class="card">
                    <div class="flex items-center justify-between px-3 pt-2">
                        <ul>
                            <li class="inline-flex mr-2">
                                <p-button class="rounded-r-none" theme="primary" @click="$refs.uploader.openDZ()"><fa-icon :icon="['fas', 'upload']"></fa-icon></p-button>
                                <p-button class="rounded-l-none" v-modal:new-folder><fa-icon :icon="['fas', 'folder-plus']"></fa-icon></p-button>
                            </li>
                        </ul>
                        <ul class="flex w-full">
                            <li class="mr-2 w-full"><search-action></search-action></li>
                        </ul>
                        <ul class="flex">
                            <li class="mr-2"><display-action></display-action></li>
                            <li class="mr-2"><sort-action></sort-action></li>
                            <li class="mr-2"><control-action></control-action></li>
                            <li class="mr-2"><view-action></view-action></li>
                        </ul>
                    </div>

                    <div class="flex items-center border-b border-gray-200 px-3 py-2">
                        <breadcrumb-action></breadcrumb-action>
                    </div>

                    <file-browser></file-browser>
                    <file-paginator></file-paginator>
                </div>
            </div>
        </div>

        <portal to="modals">
            <new-folder-modal></new-folder-modal>
        </portal>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    import FileBrowser   from './FileBrowser.vue'
    import FilePaginator from './FilePaginator.vue'
    import FileUploader  from './FileUploader.vue'

    import BreadcrumbAction from './Actions/Breadcrumb.vue'
    import ControlAction    from './Actions/Control.vue'
    import DisplayAction    from './Actions/Display.vue'
    import SearchAction     from './Actions/Search.vue'
    import SortAction       from './Actions/Sort.vue'
    import ViewAction       from './Actions/View.vue'

    export default {
        name: 'file-manager',

        components: {
            'file-browser':   FileBrowser,
            'file-paginator': FilePaginator,
            'file-uploader':  FileUploader,

            'breadcrumb-action': BreadcrumbAction,
            'control-action':    ControlAction,
            'display-action':    DisplayAction,
            'search-action':     SearchAction,
            'sort-action':       SortAction,
            'view-action':       ViewAction,
        },

        methods: {
            ...mapActions({
                setDropzoneVisible: 'filemanager/setDropzoneVisible',
            })
        }
    }
</script>