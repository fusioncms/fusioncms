<template>
    <div>
        <portal to="title">
            <app-title icon="images">File Manager</app-title>
        </portal>

        <file-manager :files="files" :directories="directories"></file-manager>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                files: [],
                directories: [],
            }
        },
        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/files'),
                axios.get('/api/directories'),
            ]).then(axios.spread(function (files, directories) {
                next(function(vm) {
                    vm.files = files.data.data
                    vm.directories = directories.data.data
                })
            }))
        },
    }
</script>