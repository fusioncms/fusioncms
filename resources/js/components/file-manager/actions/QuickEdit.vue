<template>
	<div class="gallery-text">
		<span v-show="isEditing">
			<p-input
				ref="edit"
				autocomplete="off"
				placeholder="Name"
				v-model="form.name"
				class="text-center"
				:has-error="form.errors.has('name')"
				@keyup.native.enter="update"
				@keyup.native.esc="revert"
				@focusout.native="revert">
			</p-input>
		</span>

		<div v-show="!isEditing" class="truncate" @dblclick="edit">{{ form.name }}</div>
	</div>
</template>

<script>
	import Form from '../../../forms/Form'

	export default {
		data() {
			return {
				isEditing: false,
				form: new Form({
					id:        this.file.id,
					parent_id: this.file.parent_id,
					name:      this.file.name
				})
			}
		},

		props: {
			file: {
				type: Object,
				required: true
			},

			endpoint: {
				type: String,
				required: true
			}
		},

		methods: {
			edit() {
				this.isEditing = true

				this.$nextTick(() => {
					this.$refs.edit.$el.children[0].focus()
				})
			},

			revert() {
				this.form.reset()
				this.isEditing = false
			},

			update(data) {
				if (this.isEditing) {
					if (this.form.name === '') {
						this.revert()

					    toast('Name is required for updating.', 'warning')
					} else {
						this.form.patch(`/api/directories/${this.file.id}`)
							.then(({ data }) => {
								this.isEditing = false
								this.form      = new Form({
									id:        data.id,
									parent_id: data.parent_id,
									name:      data.name
								})

								toast('Name successfully updated!', 'success')
							}).catch((error) => {
								if (_.has(error, 'errors.name')) {
									toast(error.errors.name[0], 'danger')
								} else {
									toast(error.message, 'danger')
								}
							})
					}    
				}
			}
		}
	}
</script>