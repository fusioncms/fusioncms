<template>
	<p-dropdown id="sort-filters">
		<fa-icon class="icon" :icon="sortIcon(sort)"></fa-icon>
		<span class="hidden md:inline">{{ options[sort] }}</span>

		<template v-slot:menu>
			<p-dropdown-link v-for="(value, key) in options" :key="key" @click.prevent="sortBy(key)">
				<fa-icon class="icon" :icon="['fas', sortIcon(key)]"></fa-icon>
				{{ value }}
			</p-dropdown-link>
		</template>
	</p-dropdown>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'file-manager-sort-action',

		data() {
			return {
				options: {
					name: 'Name',
					bytes: 'Filesize',
					updated_at: 'Last Modified'
				}
			}
		},

		computed: {
			...mapGetters({
				direction: 'filemanager/getDirection',
				sort: 'filemanager/getSort',
			})
		},

		watch: {
			direction(value) {
				this.fetchFilesAndDirectories()
			},

			sort(value) {
				this.fetchFilesAndDirectories()
			}
		},

		methods: {
			...mapActions({
				fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
				toggleDirection: 'filemanager/toggleDirection',
				setDirection: 'filemanager/setDirection',
				setSort: 'filemanager/setSort',
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