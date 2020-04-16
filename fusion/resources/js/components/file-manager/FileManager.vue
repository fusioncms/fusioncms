<template>
    <div class="file-manager__wrap" @dragenter="setDropzoneVisible(true)">
        <portal to="actions">
            <div class="buttons">
                <button class="button" v-modal:new-folder>
                    New Folder
                </button>

                <button class="button button--primary" @click="$refs.uploader.openDZ()">
                    Upload
                </button>
            </div>
        </portal>

        <file-uploader ref="uploader"></file-uploader>
            <div class="card">
                <div class="card__body">
                    <div class="toolbar">
                        <div class="toolbar__group toolbar__group--grow">
                            <search-action></search-action>
                        </div>

                        <div class="toolbar__group">
                            <display-action></display-action>
                            <sort-action></sort-action>
                            <control-action></control-action>
                            <view-action></view-action>
                        </div>
                    </div>

                    <breadcrumb-action></breadcrumb-action>

                    <!-- <p-breadcrumbs>
                        <p-breadcrumb></p-breadcrumb>
                        <p-breadcrumb></p-breadcrumb>
                        <p-breadcrumb></p-breadcrumb>
                    </p-breadcrumbs> -->

                    <!-- <div class="flex items-center border-b border-gray-200 p-3">
                        <breadcrumb-action></breadcrumb-action>
                    </div> -->

                    <file-browser></file-browser>
                    <file-paginator></file-paginator>
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