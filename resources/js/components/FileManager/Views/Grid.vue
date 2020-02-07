<template>
    <div class="card__body gallery-container">
        <div class="gallery mb-12">
            <file-manager-directory
                v-if="currentDirectory"
                :key="'directory-' + currentDirectory"
                :directory="{id: parentDirectory, name: 'Go up'}"
                subtitle=".."
                unselectable>
            </file-manager-directory>

            <file-manager-directory
                v-for="directory in directories"
                :key="directory.id"
                :directory="directory"
                :subtitle="directory.files_count + ' items'">
            </file-manager-directory>
        </div>

        <div class="gallery" v-if="files.length">
            <div v-for="file in files" :key="file.uuid">
                <file-manager-file :file="file" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mixins: [
            require('../../../mixins/fileview').default,
            require('../../../mixins/dragnselect').default
        ]
    }
</script>