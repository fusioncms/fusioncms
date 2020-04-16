<template>
	<div class="buttons">
		<div class="buttons__group">
			<button class="button button--icon" @click.prevent="toggleView('list')" :disabled="view == 'list'">
				<fa-icon class="fa-fw" :icon="['fas', 'bars']"></fa-icon>
			</button>

			<button class="button button--icon" @click.prevent="toggleView('grid')" :disabled="view == 'grid'">
				<fa-icon class="fa-fw" :icon="['fas', 'th-large']"></fa-icon>
			</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'user-manager-view-action',

		computed: {
			...mapGetters({
				view: 'usermanager/getView',				
			})
		},

		watch: {
			view(value) {
				this.fetchUsers()
			}
		},

		methods: {
			...mapActions({
				fetchUsers: 'usermanager/fetchUsers',
				toggleView: 'usermanager/toggleView',
			})
		}
	}
</script>