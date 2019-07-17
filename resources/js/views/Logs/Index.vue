<template>
    <div>
        <portal to="title">
            <app-title icon="chart-network">Error Logs</app-title>
        </portal>

        <div class="row">
            <div class="side-container">
                <div class="card">
                    <div class="card-body">
                        <router-link v-for="(file, index) in files" :to="{ path: 'logs?', query: {file: file} }" :key="index">{{file}}</router-link>
                    </div>
                </div>
            </div>
            <div class="content-container">
                <div class="card">
                    <div class="card-header">
                        Log Entries
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>Date</th>
                                    <th>Header</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="log in logs">
                                    <td>
                                        <span :class="'badge badge-' + log.level.status">
                                            <i :class="'fa-fw fal fa-' + log.level.icon"></i>
                                            {{ log.level.name }}
                                        </span>
                                    </td>
                                    <td>{{ log.date }}</td>
                                    <td>
                                        <b>{{ log.text }}</b>
                                        <div v-if="log.inFile">
                                            {{log.inFile}}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                endpoint: '/datatable/matrices',
                currentFile: '',
                files: [],
                logs: []
            }
        },

        computed: {
            file() {
                let filename = this.$route.query ? this.$route.query : ''
                return filename
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
                let query = filename ? '?l=' + filename : ''
                axios.get('/api/logs' + query).then((response) => {
                    vm.currentFile = response.data.currentFile
                    vm.files = response.data.files
                    vm.logs = response.data.logs
                })
            }
        }
    }
</script>
