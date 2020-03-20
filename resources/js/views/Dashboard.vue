<template>
    <div>
        <portal to="title">
            <app-title icon="grip-horizontal">Dashboard</app-title>
        </portal>

        <quicklinks :links="quicklinks"></quicklinks>

        <analytics-overview></analytics-overview>

        <div class="row">
            <div class="col w-full lg:w-2/3">
                <recent-activity :activities="activities"></recent-activity>
            </div>

            <div class="col w-full lg:w-1/3">
                <recent-news :feed="feed"></recent-news>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Dashboard'
                }
            }
        },
        data() {
            return {
                matrices: [],
                activities: [],
                feed: [],
                icon: '',
            }
        },

        computed: {
            quicklinks() {
                if (this.matrices) {
                    return _.filter(this.matrices, function(matrix) {
                        return matrix.quicklink == true
                    })
                }
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/matrices'),
                axios.get('/api/activity'),
                axios.get(process.env.MIX_NEWS_FEED || 'https://beta.getfusioncms.com/blog.json').catch(function() {
                    return {
                        data: {
                            items: [],
                        },
                    }
                })
            ]).then(axios.spread(function (matrices, activity, feed) {
                next(function(vm) {
                    vm.matrices = matrices.data.data
                    vm.activities = activity.data.data
                    vm.feed = feed.data.items
                })
            }))
        },
    }
</script>
