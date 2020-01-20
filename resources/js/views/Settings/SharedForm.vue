<template>
	<form @submit.prevent="submit" enctype="multipart/form-data">
	    <div class="col w-full">
	        <p-tabs replace>
	            <p-tab v-for="(settings, group, index) in groups" :key="group" :name="group" :active="index === 0">
	                <div v-for="setting in settings" :key="setting.handle" class="form__group">
	                    <p-input
	                        v-if="setting.type === 'text' || setting.type === 'number' || setting.type === 'email'"
	                        :name="setting.handle"
	                        :ref="setting.handle"
	                        :label="setting.name"
	                        :type="setting.type"
	                        :help="setting.description"
	                        v-model="setting.value"
	                    ></p-input>

	                    <p-select
	                        v-if="setting.type === 'select'"
	                        :name="setting.handle"
	                        :ref="setting.handle"
	                        :label="setting.name"
	                        :options="mapOptions(setting.options)"
	                        :help="setting.description"
	                        v-model="setting.value"
	                    ></p-select>

	                    <p-upload
	                        v-if="setting.type === 'file'"
	                        :name="setting.handle"
	                        :label="setting.name"
	                        :help="setting.description"
	                        v-model="setting.value"
	                        accept="json"
	                    ></p-upload>

	                    <component
	                    	v-if="setting.type === 'component'"
	                    	:is="setting.handle"
	                    	:settings="settings"/>
	                </div>
	            </p-tab>
	        </p-tabs>
	    </div>
	</form>
</template>

<script>
	export default {
		name: 'settings-form',

		data() {
			return {
				groups: {},
				settings: {}
			}
		},

		props: {
			section: {
				type: String,
				required: true
			}
		},

		methods: {
			mapOptions(options) {
	            let mapped = []

	            for (let key in options) {
	                if (options.hasOwnProperty(key)) {
	                    mapped.push({
	                        label: options[key],
	                        value: key
	                    })
	                }
	            }

	            return mapped
	        },

			submit() {
				const formData = new FormData()

				formData.append('_method', 'PATCH')

				_.forEach(this.settings, function(setting) {
					formData.append(setting.handle, setting.value)
				})

				axios.post(`/api/settings/${this.section}`, formData).then(() => {
					toast('Settings have been updated.', 'success')
				})
            },
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