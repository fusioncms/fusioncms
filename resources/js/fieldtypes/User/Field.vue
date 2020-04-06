<template>
	<div>
		<label :for="field.handle" class="form__label">{{ field.name }}</label>

		<div class="flex items-start justify-between">
			<div class="w-1/2">
				<p-button :disabled="requestOpen" @click="open">
					<fa-icon :icon="['fas', 'plus-circle']" class="mr-1"></fa-icon> Manage Users
				</p-button>
			</div>

			<user-selection
				class="w-1/2"
				:limit="selectionLimit"
				:hasHeader="false"
				v-model="selected">
			</user-selection>
		</div>

		<!-- User Manager Modal -->
		<p-modal name="user-manager" no-header no-footer extra-large v-model="modalOpen">
			<div class="row">
				<div class="side-container">
					<user-selection
						:limit="selectionLimit"
						@reject="reject"
						@accept="accept"
						v-model="selection">
					</user-selection>
			   	</div>

				<div class="content-container">
					<div class="card">
						<div class="card__body">
                    		<div class="toolbar">
                    			<div class="toolbar__group">
									<button class="button button--icon" @click.prevent="push">
										<fa-icon class="icon" icon="arrow-alt-circle-left"></fa-icon>
									</button>
                    			</div>
		                        
		                        <div class="toolbar__group toolbar__group--grow">
		                            <search-action></search-action>
		                        </div>

		                        <div class="toolbar__group">
		                        	<role-action></role-action>
		                        	<sort-action></sort-action>
		                        	<view-action></view-action>
		                        </div>
		                    </div>
						</div>

						<div class="gallery-container selectables">
							<div class="gallery border-b border-gray-200 pb-2">
								<user-card
									v-for="user in users"
									:key="user.id"
									:user="user"
									@dblclick="add(user.id)">
								</user-card>
							</div>
						</div>
            		</div>
            	</div>
            </div>
        </p-modal>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	import UserCard      from '../../components/user-manager/browse/User.vue'
	import UserSelection from '../../components/user-manager/Selection.vue'

	import RoleAction    from '../../components/user-manager/actions/Role.vue'
	import SearchAction  from '../../components/user-manager/actions/Search.vue'
	import SortAction    from '../../components/user-manager/actions/Sort.vue'
	import ViewAction    from '../../components/user-manager/actions/View.vue'

	export default {
		name: 'user-fieldtype',

		components: {
			'user-card':      UserCard,
			'user-selection': UserSelection,
			'role-action':    RoleAction,
			'search-action':  SearchAction,
			'sort-action':    SortAction,
			'view-action':    ViewAction,
		},

		mixins: [
			require('../../mixins/userselector').default,
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
        	...mapGetters({
        		loading:       'usermanager/getLoading',
        		users:         'usermanager/getUsers',
        	}),

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
			}
        },

		methods: {
			...mapActions({
				fetchUsers: 'usermanager/fetchUsers',
			}),

			push() {
				_.forEach(this.selectedUsers, (id) => this.add(id))
			},

			add(id) {
				if (this.addLimit > 0) {
					let exists = _.find(this.selection, [ 'id', id ])
					let user   = _.find(this.users, [ 'id', id ])

					if (! exists) {
						this.selection.push(user)
					}
				}
			},

			open() {
				this.fetchUsers()

				this.selection = [...this.selected]
				this.requestOpen = true
			},

			close() {
				this.clearSelection()

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