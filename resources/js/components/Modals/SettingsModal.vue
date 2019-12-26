<template>
	<p-modal v-model="show" name="settings" no-header flush>
        <div class="-m-3 mb-3">
            <settings-form ref="form" :section="section"></settings-form>
		</div>

        <template slot="footer">
            <p-button type="submit" theme="primary" @click.prevent="$refs.form.submit">Save Settings</p-button>
            <p-button type="button" @click.prevent="close" class="mr-3">Cancel</p-button>
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