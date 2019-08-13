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
        methods: {
            ...mapActions({
                setFiles: 'filemanager/setFiles',
                setDirectories: 'filemanager/setDirectories',
            }),
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/files'),
                axios.get('/api/directories'),
            ]).then(axios.spread(function (files, directories) {
                next(function(vm) {
                    vm.setFiles(files.data.data)
                    vm.setDirectories(directories.data.data)
                })
            }))
        },
    }
</script>