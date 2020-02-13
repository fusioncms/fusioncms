<template>
	<div>
		<label :for="field.handle" class="form__label">{{ field.name }}</label>

		<div class="flex items-start justify-between">
			<div class="w-1/2">
				<p-button :disabled="requestOpen" @click="open">
					<fa-icon :icon="['fas', 'plus-circle']" class="mr-1"></fa-icon> Manage Assets
				</p-button>
			</div>

			<file-selection
				class="w-1/2"
				:limit="selectionLimit"
				:hasHeader="false"
				v-model="selected">
			</file-selection>
		</div>

		<!-- File Manager Modal -->
		<p-modal name="file-manager" no-header no-footer extra-large v-model="modalOpen">
			<file-uploader ref="uploader"></file-uploader>

			<div class="row" @dragenter="setDropzoneVisible(true)">
				<div class="side-container">
					<file-selection
						:limit="selectionLimit"
						@reject="reject"
						@accept="accept"
						v-model="selection">
					</file-selection>
			   	</div>

				<div class="content-container">
					<div class="card">
						<div class="flex items-center justify-between px-3 pt-2">
							<ul>
								<li class="mr-4">
									<p-button @click="push" theme="success">
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
									:isDropzone="true"
									@dblclick="navigate(directory)">
								</directory>
							</div>

							<div class="gallery">
								<file
									v-for="file in files"
									:key="file.id"
									:file="file"
									@dblclick="add(file.id)">
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

	import FileUploader  from '../../components/FileManager/FileUploader.vue'
	import FileSelection from '../../components/FileManager/FileSelection.vue'

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
			'file-uploader':  FileUploader,
			'file-selection': FileSelection,

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
			require('../../mixins/filedragdrop').default,
            require('../../mixins/filebrowser').default,
        ],

		data() {
            return {
            	requestOpen: false,
            	modalOpen: false,
            	selection: [],
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
			loading(isLoading) {
				this.$nextTick(() => {
					if (isLoading) {
						this.destroySelector()
					} else {
						this.loadSelector(this.$el.querySelector('.selectables'))

						if (this.requestOpen) {
							this.modalOpen   = true
							this.requestOpen = false
						}
					}
				})
			}
		},

        computed: {
			selected: {
				get() {
					return this.value || []
				},
				
				set(value) {
					this.$emit('input', value)
				}
			},

			selectionLimit() {
				return Number(this.field.settings.limit) || Infinity
			},

			addLimit() {
				return this.selectionLimit - this.selection.length
			},

			typeRestriction() {
				return this.field.settings.filetype_restrictions
			}
        },

		methods: {
			...mapActions({
                setDropzoneVisible: 'filemanager/setDropzoneVisible',
            }),

            isValidSelection(file) {
            	return this.typeRestriction.length == 0 || _.includes(this.typeRestriction, file.type)
            },

			push() {
				_.forEach(this.selectedFiles, (id) => this.add(id))
			},

			add(id) {
				if (this.addLimit > 0) {
					let exists = _.find(this.selection, [ 'id', id ])
					let file   = _.find(this.files, [ 'id', id ])

					if (! exists && this.isValidSelection(file)) {
						this.selection.push(file)
					}
				}
			},

			open() {
				this.reset()
				this.setCurrentDirectory(this.field.settings.root_directory)
        		this.setRootDirectory(this.field.settings.root_directory)
				this.fetchFilesAndDirectories()

				this.selection = [...this.selected]
				this.requestOpen = true
			},

			close() {
				this.reset()

				this.selection = []
				this.modalOpen = false
			},

			reject() {
				this.close()
			},

			accept() {
				this.selected = this.selection
				this.close()
			}
		}
	}
</script>