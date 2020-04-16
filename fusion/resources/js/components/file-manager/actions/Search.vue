<template>
	<div class="field__control">
		<input type="search" name="search" placeholder="Search..." v-model="search" class="field__input">
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'file-manager-search-action',

		computed: {
			search: {
                get() {
                    return this.$store.state.filemanager.search
                },

                set(value) {
                	this.setSearch(value)
                }
            }
		},

		watch: {
			search(value) {
                this.fetchFilesAndDirectories()
            },
		},

		methods: {
			...mapActions({
				fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
				setSearch: 'filemanager/setSearch'
			})
		}
	}
</script>