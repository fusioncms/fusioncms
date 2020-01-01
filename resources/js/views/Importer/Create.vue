<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Create Import</app-title>
		</portal>

		<portal to="actions">
			<router-link :to="{ name: 'importer' }" class="button mr-3">Go Back</router-link>
			<button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save &amp; Continue</button>
		</portal>

		<div class="row">
			<div class="content-container">
				<shared-form :form="form"></shared-form>
			</div>
		</div>
	</div>
</template>

<script>
	import Form from '../../forms/Form'
	import SharedForm from './SharedForm.vue'

	export default {
		head: {
            title() {
                return {
                    inner: 'Create a Import'
                }
            }
		},
		
		data() {
			return {
				form: new Form({
					name: '',
					handle: '',
					source: '',
					schedule: null,
					module: 'users',
					group: 0,
					strategy: [],
					backup: false
				}, true)
			}
		},

		components: {
			'shared-form': SharedForm
		},

		methods: {
			submit() {
				this.form.post('/api/imports').then((response) => {
					toast('Import successfully saved', 'success')

					this.$router.push(`/importer/mapping/${response.data.id}`)
				}).catch((response) => {
					toast(response.message, 'failed')
				})
			}
		},

        mounted() {
            this.$nextTick(function(){
                this.form.resetChangeListener()
            })
        }
	}
</script>