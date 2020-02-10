<template>
    <div class="gallery-container">
        <div class="flex font-bold px-3">
            <div class="w-1/5"></div>
            <div class="w-1/5">Name</div>
            <div class="w-1/5">File size</div>
            <div class="w-1/5">Mimetype</div>
            <div class="w-1/5">Last modified</div>
        </div>

        <div v-if="currentDirectory" :key="'directory-' + currentDirectory" class="flex p-3">
            <div class="w-1/5"><file-manager-directory small unselectable :directory="{ id: parentDirectory, name: 'Go up' }"></file-manager-directory></div>
            <div class="w-1/5">..</div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
        </div>

        <div v-for="directory in directories" :key="directory.id" class="flex p-3">
            <div class="w-1/5"><file-manager-directory small :directory="directory"></file-manager-directory></div>
            <div class="w-1/5">{{ directory.name}}</div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
            <div class="w-1/5">{{ $moment(directory.updated_at).format('MMM Do, YYYY') }}</div>
        </div>

        <div v-for="file in files" :key="file.uuid" class="flex p-3">
            <div class="flex w-full">
                <div class="w-1/5"><file-manager-file small :file="file"></file-manager-file></div>
                <div class="w-1/5">{{ file.name }}</div>
                <div class="w-1/5">{{ file.bytes | bytes }}</div>
                <div class="w-1/5">{{ file.mimetype }}</div>
                <div class="w-1/5">{{ $moment(file.updated_at).format('MMM Do, YYYY') }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mixins: [
            // require('../../../mixins/fileview').default,
            require('../../../mixins/dragnselect').default
        ]
    }
</script>
