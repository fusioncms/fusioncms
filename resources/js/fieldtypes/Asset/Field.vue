<template>
	<div>
		<label :for="field.handle" class="form__label">{{field.name}}</label>

		<div class="border-b border-gray-200 m-2 py-2">
			<p-button @click="open" theme="secondary">
				<fa-icon :icon="['fas', 'plus-circle']" class="mr-1"></fa-icon> Asset
			</p-button>
		</div>

		<div class="flex items-center justify-start">
			<p-button v-for="(file, index) in value" :key="file.id" @click="remove(file.id)" class="mx-2">
				{{ file.name }}
				<fa-icon :icon="['fas', 'times-circle']" class="ml-2"></fa-icon>
			</p-button>
		</div>

		<p-modal name="file-manager" no-header no-footer extra-large v-model="modalOpen">
			<div class="row">
				<div class="side-container">
					<div class="card h-full">
						<div class="border-b border-gray-200 px-3 py-2 text-right">
							<p-button @click="close"><fa-icon :icon="['fas', 'times']"></fa-icon></p-button>
						</div>

						<div class="row" v-if="hasSelection">
							<p-sortable-list v-model="selected" class="sortable-list">
								<div class="col mb-6 w-full">
									<p-sortable-item v-for="(file, index) in selected" :key="file.id">
										<div class="flex items-center justify-between py-2 px-3">
											<p-sortable-handle class="cursor-move w-1/5">
												<fa-icon icon="ellipsis-v" class="handle fa-fw text-gray-400"></fa-icon>
											</p-sortable-handle>

											<p-img :src="file.url + '?w=50&h=50&fit=crop'" :width="50" :height="50"></p-img>
											
											<div>{{ file.name }}</div>
											
											<p-button @click="remove(file.id)" theme="danger"><fa-icon :icon="['fas', 'trash']"></fa-icon></p-button>
										</div>
									</p-sortable-item>
								</div>
							</p-sortable-list>
						</div>

						<div class="h-full flex flex-col justify-center items-center text-5xl text-gray-300" v-else>
				            <fa-icon :icon="['far', 'copy']" class="fa-fw fa-3x"></fa-icon>
				            <span class="text-lg py-2 text-gray-500">Select some files...</span>
				        </div>
					</div>
			   	</div>

				<div class="content-container">
					<div class="card">
						<div class="flex items-center justify-between px-3 pt-2">
							<ul>
								<li class="mr-4">
									<p-button @click="add" theme="success"><fa-icon :icon="['fas', 'arrow-alt-circle-left']" class="mr-1"></fa-icon></p-button>
								</li>
							</ul>
							<ul>
                            	<li class="inline-flex mr-2">
	                                <p-button class="rounded-r-none" theme="primary" @click="$refs.uploader.openDZ()"><fa-icon :icon="['fas', 'upload']"></fa-icon></p-button>
	                                <p-button class="rounded-l-none" v-modal:new-folder><fa-icon :icon="['fas', 'folder-plus']"></fa-icon></p-button>
	                            </li>
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

						<div class="flex items-center border-b border-gray-200 px-3 py-2">
							<breadcrumb-action></breadcrumb-action>
						</div>

						<file-browser></file-browser>
            		</div>
            	</div>
            </div>
        </p-modal>

        <portal to="modals">
            <new-folder-modal></new-folder-modal>
        </portal>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	import FileBrowser      from '../../components/FileManager/FileBrowser.vue'
	import BreadcrumbAction from '../../components/FileManager/Actions/Breadcrumb.vue'
	import DisplayAction    from '../../components/FileManager/Actions/Display.vue'
	import SearchAction     from '../../components/FileManager/Actions/Search.vue'
	import SortAction       from '../../components/FileManager/Actions/Sort.vue'
	import ViewAction       from '../../components/FileManager/Actions/View.vue'

	export default {
		name: 'asset-fieldtype',

		components: {
			'file-browser':      FileBrowser,
			'display-action':    DisplayAction,
			'breadcrumb-action': BreadcrumbAction,
			'search-action':     SearchAction,
			'sort-action':       SortAction,
			'view-action':       ViewAction,
		},

		data() {
            return {
            	modalOpen: false,
            	selected: {},
            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
            	type: Object,
                required: false,
                default: () => {},
            },
        },

        computed: {
            ...mapGetters({
            	selectedFiles: 'filemanager/getSelectedFiles',
				files:         'filemanager/getFiles',
        	}),

        	hasSelection() {
        		return _.size(this.selected) > 0
        	}

        },

		methods: {
			...mapActions({
				clearFileSelection: 'filemanager/clearFileSelection',
				reset: 'filemanager/reset',
			}),

			add() {
				_.forEach(this.selectedFiles, (id) => {
					this.$set(this.selected, id, _.find(this.files, [ 'id', id ]))
				})

				// save & clear..
				this.$emit('input', this.selected)
				this.clearFileSelection()
			},

			remove(id) {
				this.$delete(this.selected, id)
			},

			open() {
				this.modalOpen = true
				this.reset()

				this.selected = Object.assign({}, this.value)
			},

			close() {
				this.modalOpen = false
				this.reset()
			}
		}
	}
</script>