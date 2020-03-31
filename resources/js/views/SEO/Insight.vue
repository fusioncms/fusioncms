<template>
    <div>
        <portal to="title">
            <app-title icon="chart-bar">Insight</app-title>
        </portal>

        <div class="row" v-if="isValid === null">
            <div class="col w-full">
                <div class="card">
                    <div class="card__body text-center" v-if="isValid === null">
                        <fa-icon :icon="['fas', 'circle-notch']" class="fa-spin mr-3"></fa-icon> Loading overview...
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="isValid === false">
            <div class="col w-full">
                <div class="card">
                    <div class="card__body text-center" v-if="isValid === false">
                        <p>Configure your Google Analytic settings to gain insight about your website <fa-icon class="text-emoji" :icon="['fas', 'hand-peace']"></fa-icon></p>

                        <router-link class="button items-center" to="/settings/google_analytics#insights"><fa-icon :icon="['fas', 'cog']" class="mr-2 text-sm"></fa-icon> Go to settings</router-link>
                    </div>
                </div>
            </div>
        </div>

        <analytics-overview v-if="isValid"></analytics-overview>

        <div class="row" v-if="isValid">
            <div class="col w-full md:w-1/2 mb-6">
                <div class="table__wrapper">
                    <div class="card__header">
                        <h3 class="card__title">Popular Pages</h3>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th>Page</th>
                                <th class="w-10"></th>
                                <th class="column__stat">Views</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="page in popular" :key="page.url">
                                <td>
                                    <span class="column__label">Page</span>
                                    <span>
                                        {{ page.url }}
                                    </span>
                                </td>

                                <td class="column__stat actions">
                                    <a :href="page.url" class="text-gray-800 hover:text-gray-900 mr-4" target="_blank">
                                        <fa-icon :icon="['fas', 'arrow-alt-circle-right']"></fa-icon>
                                    </a>
                                </td>

                                <td class="column__stat">
                                    <span class="column__label">Views</span>
                                    <span>{{ page.pageViews }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col w-full md:w-1/2 mb-6">
                <div class="table__wrapper">
                    <div class="card__header">
                        <h3 class="card__title">Browsers</h3>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th>Browser</th>
                                <th class="column__stat">Sessions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="browser in browsers" :key="browser.browser">
                                <td>
                                    <span class="column__label">Browser</span>
                                    <span>
                                        <span class="text-gray-800 hover:text-gray-900 mr-2">
                                            <fa-icon v-if="browser.icon == 'default'" :icon="['fas', 'globe']" class="fa-fw"></fa-icon>
                                            <fa-icon v-else :icon="['fab', browser.icon]" class="fa-fw"></fa-icon>
                                        </span>

                                        {{ browser.browser }}
                                    </span>
                                </td>

                                <td class="column__stat">
                                    <span class="column__label">Sessions</span>
                                    <span>{{ browser.sessions }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                this.isValid = response.data.status === 'OK'

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
                    .catch((response) => {
                        toast(response.data.message, 'failed')
                    })
                }
            })
        }
    }
</script>
