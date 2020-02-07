<template>
	<div>
		<label :for="field.handle" class="form__label">{{field.name}}</label>

		<p-button @click="modalOpen = true">
			<fa-icon :icon="['fas', 'plus-circle']" class="mr-1"></fa-icon> Asset
		</p-button>

		<!-- TODO: sortable asset listing -->

		<p-modal name="file-manager" no-header no-footer extra-large v-model="modalOpen">
			<div class="row">
				<div class="side-container">
					<div class="card">
						<div class="border-b border-gray-200 px-3 py-2 flex items-center justify-between">
							<ul class="flex">
								<li>
									<p-button @click="modalOpen = false" theme="primary">Accept</p-button>
									<p-button @click="modalOpen = false">Cancel</p-button>
								</li>
							</ul>
							<ul class="flex">
								<li>
									<p-button @click="remove" theme="danger">
										Remove
										<fa-icon :icon="['fas', 'arrow-alt-circle-right']" class="ml-1"></fa-icon>
									</p-button>
								</li>
							</ul>
						</div>
					</div>
			   	</div>

				<div class="content-container">
					<div class="card">
						<div class="border-b border-gray-200 px-3 py-2 flex items-center justify-between">
							<ul class="flex">
								<li class="mr-4">
									<p-button @click="add" theme="success">
										<fa-icon :icon="['fas', 'arrow-alt-circle-left']" class="mr-1"></fa-icon>
										Add
									</p-button>
								</li>
								<li class="mr-2"><breadcrumb-action></breadcrumb-action></li>
							</ul>
							<ul class="flex w-full">
								<li class="mr-2 w-full"><search-action></search-action></li>
							</ul>
							<ul class="flex">
								<li class="mr-2"><display-action></display-action></li>
								<li class="mr-2"><sort-action></sort-action></li>
								<li class="mr-2"><view-action></view-action></li>
							</ul>
						</div>

						<component :is="view + '-view'"/>
            		</div>
            	</div>
            </div>
        </p-modal>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	import BreadcrumbAction from '../../components/FileManager/Actions/Breadcrumb.vue'
	import DisplayAction from '../../components/FileManager/Actions/Display.vue'
	import SearchAction from '../../components/FileManager/Actions/Search.vue'
	import SortAction from '../../components/FileManager/Actions/Sort.vue'
	import ViewAction from '../../components/FileManager/Actions/View.vue'

	import GridView from '../../components/FileManager/Views/Grid.vue'
    import ListView from '../../components/FileManager/Views/List.vue'

	export default {
		name: 'asset-fieldtype',

		components: {
			'display-action':    DisplayAction,
			'breadcrumb-action': BreadcrumbAction,
			'search-action':     SearchAction,
			'sort-action':       SortAction,
			'view-action':       ViewAction,

			'grid-view': GridView,
            'list-view': ListView,
		},

		data() {
            return {
            	modalOpen: false,
            	selected: new Set(),
            	rejected: [],
            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: '',
            },
        },

		watch: {
		    modalOpen(open) {
		    	if (open) {
					this.reset()
		    	}
		    }
		},

        computed: {
            ...mapGetters({
            	selectedFiles: 'filemanager/getSelectedFiles',
				files: 'filemanager/getFiles',
				view: 'filemanager/getView',
        	}),
        },

		methods: {
			...mapActions({
				clearFileSelection: 'filemanager/clearFileSelection',
				reset: 'filemanager/reset',
			}),

			add() {
				_.forEach(this.selectedFiles, (id) => {
					this.selected.add(id)
				})

				this.clearFileSelection()
			},

			remove() {
				console.log(this.rejected)
			}
		}
	}
</script>