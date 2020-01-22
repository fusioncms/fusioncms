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
                        <h3 class="text-xs">Click an entry to view full error and stack trace</h3>
                    </div>
                    <div class="container">
                        <div v-if="loaded">
                            <div v-for="log in logs" :key="log" class="logs__row flex flex-no-wrap py-2" @click="changeCurrentError(log)" v-modal:error-view>
                                <div class="px-2 py-1 flex-shrink-0 flex items-center">
                                    <div :class="'d-flex whitespace-no-wrap text-' + log.level.status + '-600'" :title="log.level.name">
                                        <fa-icon :icon="['fas', log.level.icon]" class="fa-inverse! fa-fw"></fa-icon>
                                        <span class="sr-only">
                                            {{ log.level.name }}
                                        </span>
                                    </div>
                                </div>
                                <div class="px-3 py-1 flex-shrink-0 flex items-center text-xs whitespace-no-wrap">{{ log.date }}</div>
                                <div class="col px-3 py-1 leading-tight overflow-hidden">
                                    <div class="text-md" v-html="log.text"></div>
                                    <div v-if="log.inFile" class="truncate pt-2 text-xs text-gray-600">
                                        {{log.inFile}}
                                    </div>
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
                <div class="leading-tight mb-3">
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
                            <strong>Error Text:</strong>
                        </div>
                        <div class="logs__full-text">
                            <div class="text-warning-800">
                                {{currentError.textFull}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <h3 class="text-sm">Stack Trace:</h3>
                    <div class="logs__stack-trace overflow-auto">
                        <div v-for="row in currentError.stackTrace" :key="row" class="logs__stack-row" v-if="row.length">
                            {{row}}
                        </div>
                    </div>
                </div>
            </div>
        </p-modal>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Logs'
                }
            }
        },

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
