<template>
    <div class="file-manager__wrap" @dragenter="setDropzoneVisible(true)">
        <file-uploader ref="uploader"></file-uploader>

        <div class="row">
            <div class="content-container">
                <div class="card">
                    <div class="toolbar bg-danger-300">
                        <div class="toolbar__group">
                            <p-button @click="$refs.uploader.openDZ()"><fa-icon :icon="['fas', 'upload']" class="fa-fw md:mr-2"></fa-icon> <span class="hidden md:inline">Upload</span></p-button>
                            <p-button v-modal:new-folder><fa-icon :icon="['fas', 'folder-plus']" class="fa-fw md:mr-2"></fa-icon> <span class="hidden md:inline">New Folder</span></p-button>
                        </div>

                        <div class="toolbar__group flex-1">
                            <search-action class="w-full"></search-action>
                        </div>

                        <div class="toolbar__group">
                            <display-action></display-action>
                            <sort-action></sort-action>
                        </div>

                        <div class="toolbar__group">
                            <control-action></control-action>
                        </div>

                        <div class="toolbar__group">
                            <view-action></view-action>
                        </div>
                    </div>

                    <div class="flex items-center border-b border-gray-200 p-3">
                        <breadcrumb-action></breadcrumb-action>
                    </div>

                    <!-- <file-browser></file-browser>
                    <file-paginator></file-paginator> -->
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

    import BreadcrumbAction from './actions/Breadcrumb.vue'
    import ControlAction    from './actions/Control.vue'
    import DisplayAction    from './actions/Display.vue'
    import SearchAction     from './actions/Search.vue'
    import SortAction       from './actions/Sort.vue'
    import ViewAction       from './actions/View.vue'

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