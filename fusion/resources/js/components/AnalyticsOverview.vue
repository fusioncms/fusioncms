<template>
    <div class="row" v-if="isValid">
        <div class="col w-full">
            <div class="analytics card">
                <div class="card__header">
                    <h3 class="card__title">Last 30 Days</h3>
                </div>

                <div class="card__body" v-if="isValid">
                    <div class="flex flex-wrap justify-around">
                        <div class="w-1/2 md:w-auto">
                            <p-tooltip>
                                <template>
                                    <span class="border-b-4 block">Unique Visitors</span>
                                </template>
                                <template slot="content">
                                    Total unique visitors, or sessions, accessing <br/>
                                    all pages of the site.
                                </template>
                            </p-tooltip>
                            <span class="block text-3xl xl:text-5xl font-bold">{{ totalVisitors }}</span>
                        </div>

                        <div class="w-1/2 md:w-auto">
                            <p-tooltip>
                                <template>
                                    <span class="border-b-4 block">Total Page Views</span>
                                </template>
                                <template slot="content">
                                    Total number of pages viewed by all visitors
                                </template>
                            </p-tooltip>
                            <span class="block text-3xl xl:text-5xl font-bold">{{ totalPageViews }}</span>
                        </div>

                        <div class="w-1/2 md:w-auto">
                            <p-tooltip>
                                <template>
                                    <span class="border-b-4 block">Bounce Rate</span>
                                </template>
                                <template slot="content">
                                    Percentage of visits or sessions where the user <br/>
                                    leaves after viewing a single page
                                </template>
                            </p-tooltip>
                            <span class="block text-3xl xl:text-5xl font-bold">{{ bounceRate }}</span>
                        </div>

                        <div class="w-1/2 md:w-auto">
                            <p-tooltip>
                                <template>
                                    <span class="border-b-4 block">Session Duration</span>
                                </template>
                                <template slot="content">
                                    Average length of time that a user <br/>
                                    spends on the site before leaving
                                </template>
                            </p-tooltip>
                            <span class="block text-3xl xl:text-5xl font-bold">{{ sessionDuration }}</span>
                        </div>
                    </div>

                    <apex-chart v-show="isValid && isReady" width="100%" height="350" :options="options" :series="series"></apex-chart>
                </div>

                <div class="card__body text-center" v-if="isValid === false">
                    <p>Configure your Google Analytic settings to gain insight about your website <fa-icon class="text-emoji" :icon="['fas', 'hand-peace']"></fa-icon></p>

                    <router-link class="button items-center" to="/settings/google_analytics#insights"><fa-icon :icon="['fas', 'cog']" class="mr-2 text-sm"></fa-icon> Go to settings</router-link>
                </div>

                <div class="card__body text-center" v-if="isValid === null">
                    <fa-icon :icon="['fas', 'circle-notch']" class="fa-spin mr-3"></fa-icon> Loading overview...
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment-timezone'

    export default {
        data() {
            return {
                isValid: null,
                isReady: false,
                dates: ['loading'],
                visitors: [0, 1, 2, 3],
                pageviews: [0, 1, 2, 3],
                bounceRates: [0, 1, 2, 3],
                sessionDuration: null,
                bounceRate: null,
                totalVisitors: null,
                totalPageViews: null,
            }
        },

        computed: {
            options() {
                return {
                    responsive: [{
                        breakpoint: 640,
                        options: {
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                labels: {
                                    show: false,
                                }
                            }
                        }
                    }],
                    chart: {
                        id: 'analytics-overview',
                        height: 350,
                        stacked: false,
                        toolbar: {
                            show: true,
                            tools: {
                                download: true,
                                selection: false,
                                zoom: false,
                                zoomin: false,
                                zoomout: false,
                                pan: false,
                                reset: false,
                            },
                        },
                    },
                    colors: ['#FF5722', '#4DD0E1', '#EDF2F7'],
                    stroke: {
                        width: [0, 4, 2],
                        curve: ['smooth', 'smooth', 'smooth']
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: '33%',
                        },
                    },
                    fill: {
                        opacity: [0.85, 0.25, 1],
                        gradient: {
                            inverseColors: false,
                            shade: 'light',
                            type: "vertical",
                            opacityFrom: 0.85,
                            opacityTo: 0.55,
                            stops: [0, 100, 100, 100]
                        }
                    },
                    markers: {
                        size: 0
                    },
                    xaxis: {
                        categories: this.dates,
                        labels: {
                            show: true
                        }
                    },
                    yaxis: [
                        {
                            seriesName: 'Visitors',
                            opposite: false,
                            title: {
                                text: 'Visitors',
                            },
                        },
                        {
                            seriesName: 'Pageviews',
                            opposite: false,
                            title: {
                                text: 'Pageviews',
                            },
                        },
                        {
                            seriesName: 'Bounces',
                            opposite: true,
                            title: {
                                text: "Bounces (percentage of visitors)",
                            },
                            labels: {
                                formatter: (val) => { return val + '%' },
                            }
                        },
                    ]
                }
            },

            series() {
                return [
                    {
                        name: 'Visitors',
                        type: 'column',
                        data: this.visitors
                    },

                    {
                        name: 'Pageviews',
                        type: 'area',
                        data: this.pageviews
                    },

                    {
                        name: 'Bounces',
                        type: 'area',
                        data: this.bounceRates
                    }
                ]
            }
        },

        methods: {
            secondsToString(seconds) {
                let str = ''

                let hours = _.floor((seconds %= 86400) / 3600)
                let minutes = _.floor((seconds %= 3600) / 60)
                seconds = _.floor(seconds % 60)

                if (hours) {
                    str += hours + 'h '
                }

                if (minutes) {
                    str += minutes + 'm '
                }

                if (seconds) {
                    str += seconds + 's'
                }

                return str
            }
        },

        mounted() {
            axios.get('/api/insights/check').then((response) => {
                this.isValid = response.data.status

                if (this.isValid == 'OK') {
                    axios.all([
                        axios.get('/api/insights/overview'),
                    ]).then(axios.spread(function (insight) {
                        this.sessionDuration = this.secondsToString(insight.data.data.averageSessionDuration)
                        this.bounceRate = _.floor(insight.data.data.bounceRate, 2) + '%'
                        this.totalVisitors = Number(insight.data.data.totalVisitors).toLocaleString()
                        this.totalPageViews = Number(insight.data.data.totalPageViews).toLocaleString()
                        this.visitors = _.map(insight.data.data.daily, 'visitors')
                        this.pageviews = _.map(insight.data.data.daily, 'pageViews')
                        this.bounceRates = _.map(insight.data.data.daily, 'bounceRate')
                        this.dates = _.map(insight.data.data.daily, function(o) {
                            let date = new Date(o.date)

                            return moment.parseZone(date).format('MM/DD')
                        })

                        this.isReady = true
                    }.bind(this)))
                } else if (this.isValid == 'failed') {
                    toast('Insights error: ' + response.data.message, 'failed')
                }
            })
        }
    }
</script>
