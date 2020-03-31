<template>
    <div class="card">
        <div class="card__header">
            <h3 class="card__title">Recent Activity</h3>
        </div>

        <div class="card__body" v-if="! activities.length">
            <p>
                Looks like nothing has taken place on your website yet.
            </p>
        </div>

        <div v-if="activities.length" class="mt-6">
            <table class="table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Action</th>
                        <th class="w-10"></th>
                        <th class="w-56">Time</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="activity in activities" :key="activity.id">
                        <td>
                            <span class="column__label">User</span>
                            <span>
                                <router-link :to="{ name: 'users.edit', params: {user: activity.causer.id} }">{{ activity.causer.name }}</router-link>
                            </span>
                        </td>

                        <td>
                            <span class="column__label">Action</span>
                            <span class="flex items-center">
                                <div class="text-gray-900 mr-4 flex items-center text-sm w-3">
                                    <fa-icon v-if="activity.properties.icon" :icon="['fas', activity.properties.icon]" class="fa-fw"></fa-icon>
                                    <fa-icon v-else class="fa-xs fa-fw" :icon="['fas', 'circle']"></fa-icon>
                                </div>

                                {{ activity.description }}
                            </span>
                        </td>

                        <td class="actions">
                            <span>
                                <router-link :to="activity.properties.link" v-if="activity.properties.link" class="text-gray-800 hover:text-gray-900">
                                    <fa-icon :icon="['fas', 'arrow-alt-circle-right']"></fa-icon>
                                </router-link>
                            </span>
                        </td>

                        <td>
                            <span class="column__label">Time</span>
                            <span>{{ $moment(activity.created_at).format('L LT') }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            activities: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    }
</script>