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
        <div v-if="currentDirectory" :key="'directory-' + currentDirectory" class="flex p-3 gallery--dropzone" :data-dropzone="parentDirectory">
            <div class="w-1/5">
                <file-manager-directory
                    small
                    unselectable
                    :directory="{ id: parentDirectory, name: 'Go up' }">
                </file-manager-directory>
            </div>
            <div class="w-1/5">..</div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
        </div>
        <div v-if="! currentDirectory" :key="'directory-' + currentDirectory" class="flex p-3 gallery--dropzone" :data-dropzone="false">
            <div class="w-1/5">
                <file-manager-directory
                    small
                    unselectable
                    :directory="{ id: null, name: '' }">
                </file-manager-directory>
            </div>
            <div class="w-1/5">.</div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
        </div>
        <div v-for="directory in directories" :key="directory.id" class="flex p-3 gallery--dropzone" :data-dropzone="directory.id">
            <div class="w-1/5">
                <file-manager-directory
                    small
                    :directory="directory">
                </file-manager-directory>
            </div>
            <div class="w-1/5">{{ directory.name}}</div>
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
            <div class="w-1/5">{{ lastModified(directory.updated_ad) }}</div>
        </div>

        <!-- Files -->
        <div v-for="file in files" :key="file.uuid" class="flex p-3 gallery--dropzone draggable-dropzone--occupied">
            <div class="flex w-full gallery--draggable" :data-draggable="file.id">
                <div class="w-1/5"><file-manager-file small :file="file"></file-manager-file></div>
                <div class="w-1/5">{{ file.name }}</div>
                <div class="w-1/5">{{ bytes(file.bytes) }}</div>
                <div class="w-1/5">{{ file.mimetype }}</div>
                <div class="w-1/5">{{ lastModified(file.updated_at) }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mixins: [ require('../../../mixins/dragndrop').default ],

        methods: {
            lastModified(timestamp) {
                return this.$moment(timestamp).format('MMM Do, YYYY')
            },

            bytes(bytes) {
                let thresh = 1000

                if (Math.abs(bytes) < thresh) {
                    return bytes + ' B'
                }

                let index = -1
                let units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
                
                do {
                    bytes /= thresh
                    ++index
                } while (Math.abs(bytes) >= thresh && index < units.length - 1)

                return bytes.toFixed(1) + ' ' + units[index]
            },
        }
    }
</script>
