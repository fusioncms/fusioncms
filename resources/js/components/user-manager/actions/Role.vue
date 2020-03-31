<template>
	<p-dropdown>
		<fa-icon class="fa-fw mr-1" :icon="['fas', 'user-tag']"></fa-icon>
		{{ options[role] }}
		
		<template slot="options">
			<p-dropdown-item class="w-48" @click.prevent="setRole(null)">Everyone</p-dropdown-item>

			<p-dropdown-item v-for="(role, key) in options" class="w-48" :key="key" @click.prevent="setRole(key)">
				{{ role }}
			</p-dropdown-item>
		</template>
	</p-dropdown>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'user-manager-role-action',

		computed: {
			...mapGetters({
				role:  'usermanager/getRole',
				roles: 'usermanager/getRoles',			
			}),

			options() {
				let options = {}

				_.forEach(this.roles, (role) => {
					options[role.slug] = role.name
				})

				return options
			}
		},

		watch: {
			role(value) {
				this.fetchUsers()
			}
		},

		methods: {
			...mapActions({
				fetchUsers: 'usermanager/fetchUsers',
				setRole:    'usermanager/setRole',
			})
		}
	}
</script>