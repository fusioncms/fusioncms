<template>
	<p-dropdown>
		<fa-icon class="fa-fw mr-1" :icon="['fas', sortIcon(sort)]"></fa-icon>
		{{ options[sort]  }}
		
		<template slot="options">
			<p-dropdown-item v-for="(value, key) in options" class="w-48" :key="key" @click.prevent="sortBy(key)">
				<fa-icon class="fa-fw mr-1" :icon="['fas', sortIcon(key)]"></fa-icon>
				{{ value }}
			</p-dropdown-item>
		</template>
	</p-dropdown>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'user-manager-sort-action',
		
		data() {
			return {
				options: {
					id: 'ID',
					name: 'Name',
					email: 'Email',
					created_at: 'Creation Date'
				}
			}
		},

		computed: {
			...mapGetters({
				direction: 'usermanager/getDirection',
				sort:      'usermanager/getSort',				
			})
		},

		watch: {
			direction(value) {
				this.fetchUsers()
			},

			sort(value) {
				this.fetchUsers()
			}
		},

		methods: {
			...mapActions({
				toggleDirection: 'usermanager/toggleDirection',
				fetchUsers:      'usermanager/fetchUsers',
				setDirection:    'usermanager/setDirection',
				setSort:         'usermanager/setSort', 
			}),

			sortBy(key) {
                if (this.sort === key) {
                    this.toggleDirection()
                } else {
                    this.setSort(key)
                    this.setDirection('asc')
                }
            },

            sortIcon(key) {
				if (this.sort === key) {
					if (this.direction === 'asc') {
						return 'sort-amount-down'
					} else {
						return 'sort-amount-up'
					}
				}

				return 'bars'
			}
		}
	}
</script>