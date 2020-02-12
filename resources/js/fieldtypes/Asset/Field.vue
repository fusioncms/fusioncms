<template>
	<div>
		<label :for="field.handle" class="form__label">{{ field.name }}</label>

		<!-- Launcher -->
		<p-button @click="open" theme="secondary">
			<fa-icon :icon="['fas', 'plus-circle']" class="mr-1"></fa-icon> Manage Assets
		</p-button>
		
		<!-- Current Selection -->
		<div class="flex flex-wrap items-center justify-start">
			<p-button v-for="(file, index) in value" :key="file.id" @click="remove(file.id)" class="m-2">
				{{ file.name }}
				<fa-icon :icon="['fas', 'times']" class="ml-2"></fa-icon>
			</p-button>
		</div>

		<!-- File Manager Modal -->
		<p-modal name="file-manager" no-header no-footer extra-large v-model="modalOpen">
			<file-uploader ref="uploader"></file-uploader>

			<div class="row" @dragenter="setDropzoneVisible(true)">
				<div class="side-container">
					<div class="card h-full">

						<div class="flex items-center justify-between border-b border-gray-200 px-3 py-2 text-right">
							<p-button @click="clear">
								<fa-icon :icon="['fas', 'eject']" class="mr-2"></fa-icon>
								Clear
							</p-button>
							<p-button @click="close">
								Close
								<fa-icon :icon="['fas', 'times']" class="ml-2"></fa-icon>
							</p-button>
						</div>

						<div v-if="selected.length > 0" class="row">
							<p-sortable-list v-model="selected" class="sortable-list">
								<div class="col mb-6 w-full">
									<p-sortable-item v-for="(file, index) in selected" :key="file.id" class="flex items-center justify-between">
										<div class="py-2 px-3">
											<p-sortable-handle class="cursor-move w-1/5">
												<fa-icon icon="ellipsis-v" class="handle fa-fw text-gray-400"></fa-icon>
											</p-sortable-handle>

											<p-img v-if="file.category == 'image'" :src="file.url + '?w=50&h=50&fit=crop'" background-color="white" :width="50" :height="50"></p-img>
											<p-img v-else :src="'/img/' + file.category + '-large.svg'" background-color="white" :width="50" :height="50"></p-img>

											<div>{{ file.name }}</div>
											
											<p-button @click="remove(file.id)" theme="danger"><fa-icon :icon="['fas', 'trash']"></fa-icon></p-button>
										</div>
									</p-sortable-item>
								</div>
							</p-sortable-list>

							<div v-if="limitReached" class="flex w-full items-center justify-center">
								<span class="text-sm italic text-danger-600">File limit reached</span>
							</div>
						</div>

						<div v-else class="h-full flex flex-col justify-center items-center text-5xl text-gray-300">
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
									<p-button @click="add" theme="success" :disabled="limitReached">
										<fa-icon :icon="['fas', 'arrow-alt-circle-left']" class="mr-1"></fa-icon>
									</p-button>
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

						<div class="gallery-container selectables">
							<div class="gallery border-b border-gray-200 pb-2">
								<directory
									v-for="directory in directories"
									:key="directory.id"
									:directory="directory"
									@dblclick="navigate(directory)">
								</directory>
							</div>

							<div class="gallery">
								<file
									v-for="file in files"
									:key="file.id"
									:file="file"
									@dblclick="addById(file.id)">
								</file>
							</div>
						</div>

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
	import { mapActions } from 'vuex'

	import FileUploader from '../../components/FileManager/FileUploader.vue'

	import BreadcrumbAction from '../../components/FileManager/Actions/Breadcrumb.vue'
	import DisplayAction    from '../../components/FileManager/Actions/Display.vue'
	import SearchAction     from '../../components/FileManager/Actions/Search.vue'
	import SortAction       from '../../components/FileManager/Actions/Sort.vue'
	import ViewAction       from '../../components/FileManager/Actions/View.vue'

	import Directory from '../../components/FileManager/Browse/Directory.vue'
	import File      from '../../components/FileManager/Browse/File.vue'

	export default {
		name: 'asset-fieldtype',

		components: {
			'file-uploader': FileUploader,

			'display-action':    DisplayAction,
			'breadcrumb-action': BreadcrumbAction,
			'search-action':     SearchAction,
			'sort-action':       SortAction,
			'view-action':       ViewAction,

			'directory': Directory,
			'file':      File,
		},

		mixins: [
			require('../../mixins/fileselector').default,
            require('../../mixins/filebrowser').default,
        ],

		data() {
            return {
            	modalOpen: false,
            	selected: [],
            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
            	type: Array,
                required: false,
                default: () => [],
            },
        },

        watch: {
        	selected(value) {
        		this.$emit('input', value)
        	}
        },

        computed: {
			limitReached() {
				return this.field.settings.limit != '' && this.field.settings.limit <= this.selected.length
			},
        },

		methods: {
			...mapActions({
                setDropzoneVisible: 'filemanager/setDropzoneVisible',
            }),

            isValidSelection(file) {
            	let category_restriction = this.field.settings.filetype_restrictions

            	return _.includes(category_restriction, 'everything') || _.includes(category_restriction, file.category)
            },

			add() {
				_.forEach(this.selectedFiles, (id) => this.addById(id))
			},

			addById(id) {
				if (! this.limitReached) {
					let exists = _.find(this.selected, [ 'id', id ])
					let file   = _.find(this.files, [ 'id', id ])

					if (! exists && this.isValidSelection(file)) {
						this.selected.push(file)
					}
				}
			},

			remove(id) {
				this.selected = _.filter(this.selected, (item) => { return item.id !== id })
			},

			clear() {
				this.selected = []
			},

			open() {
				this.modalOpen = true
				this.selected  = this.value || []

				this.reset()
				this.fetchFilesAndDirectories()
			},

			close() {
				this.modalOpen = false
				this.reset()
			}
		}
	}
</script>