<template>
    <div>
        <portal to="title">
            <app-title icon="images">File Manager</app-title>
        </portal>

        <file-manager :directories="directories"></file-manager>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data() {
            return {
                // files: [],
                directories: [],
            }
        },

        computed: {
            ...mapGetters({
                files: 'filemanager/getFiles'
            })
        },

        methods: {
            ...mapActions({
                setFiles: 'filemanager/setFiles',
            }),
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/files'),
                axios.get('/api/directories'),
            ]).then(axios.spread(function (files, directories) {
                next(function(vm) {
                    vm.setFiles(files.data.data)
                    // vm.files = files.data.data
                    vm.directories = directories.data.data
                })
            }))
        },
    }
</script>