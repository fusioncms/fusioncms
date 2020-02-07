<template>
	<div class="inline-flex">
		<p-button @click.prevent="toggleView('list')" :disabled="view == 'list'" class="rounded-l rounded-r-none">
			<fa-icon class="fa-fw" :icon="['fas', 'bars']"></fa-icon>
		</p-button>

		<p-button @click.prevent="toggleView('grid')" :disabled="view == 'grid'" class="rounded-r rounded-l-none">
			<fa-icon class="fa-fw" :icon="['fas', 'th-large']"></fa-icon>
		</p-button>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'file-manager-view-action',

		computed: {
			...mapGetters({
				view: 'filemanager/getView',				
			})
		},

		watch: {
			view(value) {
				this.fetchFilesAndDirectories()
			}
		},

		methods: {
			...mapActions({
				fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
				toggleView: 'filemanager/toggleView',
			})
		}
	}
</script>

<style>
    .gallery-container {
        /* Disable text selection */
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    .dropzone-highlight {
        animation: pulse 1s infinite;
    }

    .dropzone-over {
        border-color: rgba(255, 87, 34, 0.5);
    }

    .draggable-mirror {
        border: 2px solid rgba(255, 87, 34, 0.25);
        background-color: rgba(255, 87, 34, 0.10);
    }

    @keyframes pulse {
      0%   { border-color: rgba(255, 87, 34, 0.0); }
      50%  { border-color: rgba(255, 87, 34, 1.0); }
      100% { border-color: rgba(255, 87, 34, 0.0); }
    }
</style>