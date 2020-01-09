<template>
    <div class="gallery-container">
        <div class="flex font-bold px-3">
            <div class="w-1/5"></div>
            <div class="w-1/5">Name</div>
            <div class="w-1/5">File size</div>
            <div class="w-1/5">Mimetype</div>
            <div class="w-1/5">Last modified</div>
        </div>

        <!-- Directory -->
        <div v-if="currentDirectory" :key="'directory-' + currentDirectory" class="flex p-3 gallery--dropzone">
            <div class="w-1/5"><file-manager-directory small :directory="{id: parentDirectory, name: 'Go up'}" unselectable></file-manager-directory></div>
            <div class="w-1/5">..</div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
        </div>
        <div v-if="! currentDirectory" :key="'directory-' + currentDirectory" class="flex p-3 gallery--dropzone">
            <div class="w-1/5"><file-manager-directory small :directory="{id: null, name: ''}" unselectable></file-manager-directory></div>
            <div class="w-1/5">.</div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
        </div>
        <div v-for="directory in directories" :key="directory.id" class="flex p-3 gallery--dropzone">
            <div class="w-1/5"><file-manager-directory small :directory="directory"></file-manager-directory></div>
            <div class="w-1/5">{{ directory.name}}</div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
            <div class="w-1/5">{{ lastModified(directory.updated_ad) }}</div>
        </div>

        <!-- Files -->
        <div v-for="file in files" :key="file.uuid" class="flex p-3 gallery--dropzone draggable-dropzone--occupied">
            <div class="flex w-full gallery--draggable">
                <div class="w-1/5"><file-manager-file small :file="file"></file-manager-file></div>
                <div class="w-1/5">{{ file.name }}</div>
                <div class="w-1/5">{{ bytes(file.bytes) }}</div>
                <div class="w-1/5">{{ file.mimetype }}</div>
                <div class="w-1/5">{{ lastModified(file.updated_at) }}</div>
            </div>
        </div>
    </div>
        <!--
        <table>
            <thead>
                <tr>
                    <th class="text-center w-100px"></th>
                    <th>Name</th>
                    <th class="text-right">File size</th>
                    <th class="text-right">Mimetype</th>
                    <th class="text-right">Last modified</th>
                </tr>
            </thead>

            <tbody class="table text-sm">
                <tr v-if="currentDirectory" :key="'directory-' + currentDirectory" class="gallery--dropzone">
                    <td class="text-center w-100px"><file-manager-directory small :directory="{id: parentDirectory, name: 'Go up'}" unselectable></file-manager-directory></td>
                    <td>..</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr v-if="! currentDirectory" :key="'directory-' + currentDirectory" class="gallery--dropzone">
                    <td class="text-center w-100px"><file-manager-directory small :directory="{id: null, name: ''}" unselectable></file-manager-directory></td>
                    <td>.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr v-for="directory in directories" :key="directory.id" class="gallery--dropzone">
                    <td class="text-center w-100px"><file-manager-directory small :directory="directory"></file-manager-directory></td>
                    <td>{{ directory.name}}</td>
                    <td></td>
                    <td></td>
                    <td class="text-right">{{ lastModified(directory.updated_ad) }}</td>
                </tr>
            </tbody>
        </table>
        -->

<!--         <table>
            <tbody class="table text-sm">
                <tr v-for="file in files" :key="file.uuid" class="gallery--dropzone draggable-dropzone--occupied">
                    <div class="gallery--draggable">
                        <td class="text-center w-100px"><file-manager-file small :file="file"></file-manager-file></td>
                        <td>{{ file.name }}</td>
                        <td class="text-right">{{ bytes(file.bytes) }}</td>
                        <td class="text-right">{{ file.mimetype }}</td>
                        <td class="text-right">{{ lastModified(file.updated_at) }}</td>
                    </div>
                </tr>
            </tbody>
        </table> -->
</template>

<script>
    export default {
        mixins: [ require('../../../mixins/filemanager').default ],
    }
</script>

<style>
    /* active dropzones */
    .draggable-dropzone--active {
        background-color: rgba(0, 255, 0, 0.15)
    }

    .gallery--dropzone.draggable-dropzone--active.draggable-dropzone--occupied {
        background-color: rgba(0, 0, 255, 0.15)
    }
</style>