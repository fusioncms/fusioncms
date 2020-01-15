<template>
    <div>
        <portal to="title">
            <app-title icon="chart-bar">Insight</app-title>
        </portal>

        <div class="row" v-if="isValid === null">
            <div class="col md:w-full">
                <p-card class="text-center">
                    <fa-icon :icon="['fas', 'circle-notch']" class="fa-spin mr-3"></fa-icon> Loading...
                </p-card>
            </div>
        </div>

        <div class="row" v-if="isValid === false">
            <div class="col md:w-full">
                <p-card class="text-center">
                    <p>Configure your Google Analytic settings to gain insight about your website <fa-icon class="text-emoji" :icon="['fas', 'hand-peace']"></fa-icon></p>

                    <router-link class="button items-center" to="/settings/google_analytics#insights"><fa-icon :icon="['fas', 'cog']" class="mr-2 text-sm"></fa-icon> Go to settings</router-link>
                </p-card>
            </div>
        </div>

        <div v-if="isValid">
            <div class="row">
                <div class="col mb-6 md:w-full">
                    <analytics-overview></analytics-overview>
                </div>
            </div>

            <div class="row">
                <div class="col md:w-1/2">
                    <div class="card">
                        <table>
                            <thead>
                                <tr>
                                    <th><h2>Popular Pages</h2></th>
                                    <th class="text-right">Views</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="page in popular" :key="page.url">
                                    <td>
                                        <a :href="page.url" class="text-gray-800 hover:text-gray-900 mr-4" target="_blank">
                                            <fa-icon :icon="['fas', 'arrow-alt-circle-right']"></fa-icon>
                                        </a>

                                        {{ page.url }}
                                    </td>
                                    <td class="text-right">{{ page.pageViews }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="col md:w-1/2">
                    <div class="card">
                        <table>
                            <thead>
                                <tr>
                                    <th><h2>Browsers</h2></th>
                                    <th class="text-right">Sessions</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="browser in browsers" :key="browser.browser">
                                    <td>
                                        <span class="text-gray-800 hover:text-gray-900 mr-4">
                                            <fa-icon v-if="browser.icon == 'default'" :icon="['far', 'globe']" class="fa-fw"></fa-icon>
                                            <fa-icon v-else :icon="['fab', browser.icon]" class="fa-fw"></fa-icon>
                                        </span>

                                        {{ browser.browser }}
                                    </td>
                                    <td class="text-right">{{ browser.sessions }}</td>
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
    import moment from 'moment-timezone';
    
    export default {
        head: {
            title() {
                return {
                    inner: 'Insight'
                }
            }
        },

        data() {
            return {
                isValid: null,
                popular: [],
                browsers: [],
            }
        },

        methods: {
            determineBrowserIcon(browser) {
                let map = {
                    'Android Webview': 'android',
                    'Chrome': 'chrome',
                    'Edge': 'edge',
                    'Firefox': 'firefox',
                    'Internet Explorer': 'internet-explorer',
                    'Opera': 'opera',
                    'Safari': 'safari',
                }

                return map[browser] || 'default'
            },
        },

        mounted() {
            axios.get('/api/insights/check').then((response) => {
                this.isValid = response.data.data.status === 'OK'

                if (this.isValid) {
                    axios.all([
                        axios.get('/api/insights/popular'),
                        axios.get('/api/insights/browsers'),
                    ]).then(axios.spread(function (popular, browsers) {
                        this.popular = popular.data.data
                        this.browsers = _.map(browsers.data.data, function(row) {
                            return {
                                browser: row.browser,
                                sessions: row.sessions,
                                icon: this.determineBrowserIcon(row.browser),
                            }
                        }.bind(this))
                    }.bind(this)))
                }
            })
        }
    }
</script>
