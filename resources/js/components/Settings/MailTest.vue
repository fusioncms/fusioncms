<template>
	<div class="row">
	    <div class="side-container">
	        <div class="xxl:mr-10 xxl:mb-0 mb-6">
	            <h3>Test Mail</h3>
	            <p class="text-sm">Run test on the following settings:</p>
	        </div>
	    </div>
	    <div class="content-container">
	    	<p-input name="driver" label="Driver" v-model="settings['Driver']" readonly></p-input>
	    	<p-input name="host" label="Host" v-model="settings['Host']" readonly></p-input>
	    	<p-input name="port" label="Port" v-model="settings['Port']" readonly></p-input>
	    	<p-input name="username" label="Username" v-model="settings['SMTP Username']" readonly></p-input>
	    	<p-input type="password" name="password" label="Password" v-model="settings['SMTP Password']" readonly></p-input>
	    	<p-input name="from_name" label="From Name" v-model="settings['From Name']" readonly></p-input>
	    	<p-input name="from_address" label="From Address" v-model="settings['From Address']" readonly></p-input>
			<p-button theme="primary" @click="submit">Run Test</p-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'settings-mail-test',

		data() {
			return {
				settings: {}
			}
		},

		methods: {
			submit() {
				axios.get('/api/mail/test').then((response) => {
					toast('Mail has been sent. Please check your inbox.', 'success')
				}).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
			}
		},

		created() {
			axios.get('/api/settings/mail').then((response) => {
				let settings = {}

				_.forEach(response.data.data.items, function(item) {
					settings[item.name] = item.value
				})

				this.settings = settings
	        })
		}
	}
</script>