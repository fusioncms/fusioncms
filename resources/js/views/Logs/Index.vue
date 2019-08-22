<template>
    <div>
        <portal to="title">
            <app-title icon="bug">Logs</app-title>
        </portal>

        <div class="row">
            <div class="logs__sidebar side-container">
                <div class="card">
                    <div class="card-header px-3 pt-2">
                        <h4 class="mb-0">Available Logs</h4>
                    </div>
                    <hr>
                    <div class="card-body">
                        <router-link 
                            v-for="(file, index) in files" 
                            :to="{ path: 'logs?', query: {file: file} }" 
                            :key="index"
                            class="block px-3 py-2 text-gray-900">
                            {{file}}
                        </router-link>
                        <div v-if="!loaded && files.length == 0" class="block px-3 py-2">
                            Loading log files <fa-icon icon="cog" class="fa-spin ml-2"></fa-icon>
                        </div>
                        <div v-if="loaded && files.length == 0" class="block px-3 py-2">
                            No logs found
                        </div>
                    </div>
                </div>
            </div>
            <div class="logs__main content-container">
                <div class="card">
                    <div class="card-header px-4 py-2">
                        <h2 class="mb-0">Log Entries</h2>
                        <h5>Click an entry to view full error and stack trace</h5>
                    </div>
                    <div class="container">
                        <div v-if="loaded" v-for="log in logs" class="logs__row flex flex-no-wrap" @click="changeCurrentError(log)" v-modal:error-view>
                            <div class="px-2 py-1 flex-no-shrink flex items-center">
                                <div :class="'d-flex badge badge--' + log.level.status">
                                    <fa-icon :icon="['far', log.level.icon]" class="fa-inverse! fa-fw"></fa-icon>
                                    <span>
                                        {{ log.level.name }}
                                    </span>
                                </div>
                            </div>
                            <div class="px-3 py-1 flex-no-shrink flex items-center">{{ log.date }}</div>
                            <div class="col px-3 py-1 leading-tight overflow-hidden">
                                <b v-html="log.text"></b>
                                <div v-if="log.inFile" class="truncate pt-2">
                                    {{log.inFile}}
                                </div>
                            </div>
                        </div>
                        <div v-if="!loaded" class="block px-3 py-4">
                            Loading file <code v-if="file">{{file}}</code> <fa-icon icon="cog" class="fa-spin ml-3"></fa-icon>
                        </div>
                        <div v-if="loaded && logs.length == 0" class="block px-3 py-4">
                            Log file empty
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p-modal name="error-view" title="Error Details" extra-large>
            <div v-if="currentError.date">
                <div class="flex flex-wrap leading-tight mb-3">
                    <div class="flex p-2">
                        <div class="pr-2 whitespace-no-wrap">
                            <strong>Timestamp:</strong>
                        </div>
                        <div class="whitespace-no-wrap">
                            {{currentError.date}}
                        </div>
                    </div>
                    <div class="flex p-2">
                        <div class="pr-2 whitespace-no-wrap">
                            <strong>Log Level:</strong>
                        </div>
                        <div>
                            {{currentError.level.name}}
                        </div>
                    </div>
                    <div class="flex p-2">
                        <div class="pr-2 whitespace-no-wrap">
                            <strong>Error Text:</strong>
                        </div>
                        <div class="logs__full-text">
                            <code>
                                {{currentError.textFull}}
                            </code>
                        </div>
                    </div>
                </div>
                <div class="">
                    <h3>Stack Trace:</h3>
                    <div class="logs__stack-trace">
                        <code v-for="row in currentError.stackTrace" class="logs__stack-row block rounded-none px-2 py-2 leading-normal" v-if="row.length">
                            {{row}}
                        </code>
                    </div>
                </div>
            </div>
        </p-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                endpoint: '/datatable/matrices',
                currentFile: '',
                files: [],
                logs: [],
                currentError: {},
                loaded: false
            }
        },

        computed: {
            file() {
                let filename = this.$route.query ? this.$route.query : ''
                return filename.file
            }
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.getFile(to.query.file)
            })
        },

        beforeRouteUpdate(to,from,next) {
            this.getFile(to.query.file)
            next()
        },

        methods: {
            getFile(filename) {
                let vm = this
                vm.loaded = false
                let query = filename ? '?l=' + filename : ''
                axios.get('/api/logs' + query).then((response) => {
                    vm.currentFile = response.data.currentFile
                    vm.files = response.data.files
                    vm.logs = response.data.logs
                    vm.loaded = true
                })
            },

            changeCurrentError(log) {
                this.currentError = log
            }
        }
    }
</script>
