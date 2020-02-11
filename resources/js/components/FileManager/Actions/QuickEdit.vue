<template>
	<div class="gallery-text">
		<span v-if="isEditing">
			<input
				ref="edit"
				type="text"
				class="form__control form__control--sm text-center"
				v-model="file.name"
				@blur="revert"
				@keyup.enter="update"
				@keyup.esc="revert"/>
		</span>

		<span v-else class="truncate" @dblclick="edit">{{ name }}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: this.file.name,
				isEditing: false
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
					this.$refs.edit.focus()
					this.$refs.edit.select()
				})
			},

			revert() {
				this.file.name = this.name
				this.isEditing = false
			},

			update(data) {
				if (this.isEditing) {
				    this.isEditing = false

					if (this.file.name === '') {
						this.revert()

					    toast('Name is required for updating.', 'warning')
					} else {
						axios.patch(this.endpoint, { name: this.file.name })
							.then((response) => {
								this.name      = response.data.data.name
								this.isEditing = false

								toast('Name successfully updated!', 'success')
							}).catch((error) => {
								this.revert()

								toast(error.message, 'danger')
							})
					}    
				}
			}
		}
	}
</script>