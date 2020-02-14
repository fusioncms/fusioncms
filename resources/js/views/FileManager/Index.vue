<template>
    <div>
        <portal to="title">
            <app-title icon="images">File Manager</app-title>
        </portal>

        <file-manager></file-manager>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        head: {
            title() {
                return {
                    inner: 'File Manager'
                }
            }
        },

        methods: {
            ...mapActions({
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
                reset: 'filemanager/reset',
            }),
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.reset()
                vm.fetchFilesAndDirectories()
            })
        },
    }
</script>