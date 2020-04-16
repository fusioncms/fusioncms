<template>
	<p-modal v-model="show" name="settings" no-header flush>

		<div class="card">
            <div class="card__body">
        		<settings-form ref="form" :section="section"></settings-form>
			</div>
		</div>

        <template slot="footer">
			<div class="buttons">
				<button type="button" class="button" @click.prevent="close">Cancel</button>
				<button type="submit" class="button button--primary" @click.prevent="$refs.form.submit">Save Settings</button>
			</div>
        </template>
    </p-modal>
</template>

<script>
	import SettingsForm from '../../views/Settings/SharedForm.vue'

	export default {
		name: 'settings-modal',

		components: {
			'settings-form': SettingsForm
		},

		data() {
			return {
				show: false,
				groups: [],
				settings: []
			}
		},

		props: ['section'],

		methods: {
            close() {
            	this.show = false
            }
        },

		created() {
			axios.get('/api/settings/' + this.section).then((response) => {
				let items    = response.data.data.items
				let settings = _.filter(items, function(item) {
					return item.gui === true
				})

				this.groups   = _.groupBy(settings, 'group')
				this.settings = settings
	        })
		}
	}
</script>