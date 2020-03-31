<template>
	<div class="card__body text-right" v-if="totalPages > 1">
		<p-pagination
			@input="setCurrentPage($event)"
			:total="totalPages"
			:value="currentPage"
			:max-visible-pages="3">
		</p-pagination>
	</div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'file-manager-paginator',

		computed: {
            ...mapGetters({
                currentPage: 'filemanager/getCurrentPage',
                totalPages:  'filemanager/getTotalPages',
                
            })
        },

        watch: {
            currentPage(value) {
                this.fetchFilesAndDirectories()
            }
        },

        methods: {
            ...mapActions({
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
                setCurrentPage:           'filemanager/setCurrentPage',               
            })
        }
	}
</script>