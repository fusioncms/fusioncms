<template>
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
                            <fa-icon v-if="activity.properties.icon" :icon="['fas', activity.properties.icon]" class="fa-fw"></fa-icon>
                            <fa-icon v-else class="fa-xs fa-fw" :icon="['fas', 'circle']"></fa-icon>
                        </div>

                        {{ activity.description }}
                    </td>
                    <td>
                        <router-link :to="activity.properties.link" v-if="activity.properties.link" class="text-gray-800 hover:text-gray-900">
                            <fa-icon :icon="['fas', 'arrow-alt-circle-right']"></fa-icon>
                        </router-link>
                    </td>
                    <td>{{ $moment(activity.created_at).format('L') }}</td>
                    <td>{{ $moment(activity.created_at).format('LT') }}</td>
                </tr>
            </tbody>
        </table>
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