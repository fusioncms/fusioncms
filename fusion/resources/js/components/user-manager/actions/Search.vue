<template>
	<div class="field__control">
		<input type="search" name="search" placeholder="Search..." v-model="search" class="field__input">
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'user-manager-search-action',

		computed: {
			search: {
                get() {
                    return this.$store.state.usermanager.search
                },

                set(value) {
                	this.setSearch(value)
                }
            }
		},

		watch: {
			search(value) {
                this.fetchUsers()
            },
		},

		methods: {
			...mapActions({
				fetchUsers: 'usermanager/fetchUsers',
				setSearch:  'usermanager/setSearch'
			})
		}
	}
</script>