<template>
    <div>
        <portal to="title">
            <app-title icon="grip-horizontal">Dashboard</app-title>
        </portal>

        <div class="row flex-1 flex-wrap" v-if="quicklinks">
            <div class="col mb-6 w-full md:w-1/2 xl:w-1/3 xxl:w-1/4 xxxl:w-1/5" v-for="matrix in quicklinks" :key="matrix.handle">
                <router-link :to="matrix.admin_path" class="no-underline text-black hover:text-black bg-white rounded shadow hover:shadow-md p-3 flex h-full items-center">
                    <span class="fa-layers fa-fw fa-3x mr-2 flex-no-shrink">
                        <fa-icon :icon="['fas', 'circle']" class="fa-fw text-primary-500"></fa-icon>
                        <fa-icon :icon="['far', (matrix.icon || 'pencil')]" class="fa-fw fa-inverse" transform="shrink-8"></fa-icon>
                    </span>

                    <div class="flex flex-col">
                        <span class="font-semibold text-lg">{{ matrix.name }}</span>
                        <span class="text-sm">{{ matrix.description }}</span>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="row">
            <div class="col mb-6 md:w-full">
                <analytics-overview></analytics-overview>
            </div>
        </div>

        <div class="row">
            <div class="col w-full lg:w-2/3">
                <div class="card">
                    <div class="card__body">
                        <h2>Recent Activity</h2>

                        <p v-if="! activities.length">
                            Looks like nothing has taken place on your website yet.
                        </p>
                    </div>

                    <table v-if="activities.length">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Action</th>
                                <th></th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="activity in activities" :key="activity.id">
                                <td><router-link :to="{ name: 'users.edit', params: {user: activity.causer.id} }">{{ activity.causer.name }}</router-link></td>
                                <td class="flex items-center">
                                    <div class="text-gray-900 mr-4 flex items-center text-sm w-3">
                                        <fa-icon v-if="activity.properties.icon" :icon="['fas', activity.properties.icon]"></fa-icon>
                                        <fa-icon v-else class="fa-xs" :icon="['fas', 'circle']"></fa-icon>
                                    </div>

                                    {{ activity.description }}
                                </td>
                                <td>
                                    <router-link :to="activity.properties.link" v-if="activity.properties.link" class="text-gray-800 hover:text-gray-900">
                                        <fa-icon :icon="['fas', 'arrow-alt-circle-right']"></fa-icon>
                                    </router-link>
                                </td>
                                <td>{{ moment(activity.created_at).format('L') }}</td>
                                <td>{{ moment(activity.created_at).format('LT') }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col w-full lg:w-1/3">
                <div class="card">
                    <div class="card__body">
                        <h2>Fusion News</h2>
                    </div>

                    <table v-if="feed.length">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="entry in feed" :key="entry.id">
                                <td>{{ entry.title }}</td>
                                <td><a :href="entry.url">Read More</a></td>
                            </tr>
                        </tbody>
                    </table>

                    <div v-else class="card__body text-center">
                        The Fusion news feed will be implemented at launch.
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
                matrices: [],
                activities: [],
                feed: [],
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
            console.warn('Fusion news feed will be implemented at launch. You may safely ignore the following 404 error.')

            axios.all([
                axios.get('/api/matrices'),
                axios.get('/api/activity'),
                axios.get('//getfusioncms.com/feed.json').catch(function() {
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
