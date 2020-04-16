<template>
	<p-dropdown id="role-filters">
		<fa-icon class="icon" :icon="['fas', 'user-tag']"></fa-icon>
		<span class="hidden md:inline">{{ options[role] || 'Everyone' }}</span>
		
		<template v-slot:menu>
			<p-dropdown-link key="default" @click.prevent="setRole(null)">Everyone</p-dropdown-link>

			<p-dropdown-link v-for="(role, key) in options" :key="key" @click.prevent="setRole(key)">
				{{ role }}
			</p-dropdown-link>
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