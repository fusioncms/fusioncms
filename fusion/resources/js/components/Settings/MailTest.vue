<template>
	<div class="row">
	    <div class="side-container">
	        <div class="xxl:mr-10 xxl:mb-0 mb-6">
	            <h3>Test Mail</h3>
	            <p class="text-sm">Run test on the following credentials:</p>
	        </div>
	    </div>

	    <div class="content-container">
			<!-- SMTP -->
			<div v-show="credentials.mail_driver == 'smtp'">
				<p-input name="stmp_driver" label="Driver" v-model="credentials.mail_driver" readonly></p-input>
				<p-input name="stmp_host" label="Host" v-model="credentials.mail_smtp_host" readonly></p-input>
				<p-input name="stmp_port" label="Port" v-model="credentials.mail_smtp_port" readonly></p-input>
				<p-input name="stmp_username" label="Username" v-model="credentials.mail_smtp_username" readonly></p-input>
				<p-input name="stmp_password" type="password" label="Password" v-model="credentials.mail_smtp_password" readonly></p-input>
				<p-input name="stmp_from_name" label="From Name" v-model="credentials.mail_name" readonly></p-input>
				<p-input name="stmp_from_address" label="From Address" v-model="credentials.mail_server" readonly></p-input>
			</div>

			<!-- Sparkpost -->
			<div v-show="credentials.mail_driver == 'sparkpost'">
				<p-input name="sparkpost_driver" label="Driver" v-model="credentials.mail_driver" readonly></p-input>
				<p-input name="sparkpost_scret" type="password" label="Secret" v-model="credentials.mail_sparkpost_secret" readonly></p-input>
			</div>

			<!-- Mailgun -->
			<div v-show="credentials.mail_driver == 'mailgun'">
				<p-input name="mailgun_driver" label="Driver" v-model="credentials.mail_driver" readonly></p-input>
				<p-input name="mailgun_domain" label="Domain" v-model="credentials.mail_mailgun_domain" readonly></p-input>
				<p-input name="mailgun_secret" type="password" label="Secret" v-model="credentials.mail_mailgun_secret" readonly></p-input>
			</div>

			<!-- Mandrill -->
			<div v-show="credentials.mail_driver == 'mandrill'">
				<p-input name="mandrill_driver" label="Driver" v-model="credentials.mail_driver" readonly></p-input>
				<p-input name="mandrill_scret" type="password" label="Secret" v-model="credentials.mail_mandrill_secret" readonly></p-input>
			</div>

			<p-button theme="primary" @click="submit" class="mt-5">Run Test</p-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'settings-mail-test',

		props: {
			settings: {
				type: Array,
				required: true
			}
		},

		computed: {
			credentials() {
				let credentials = {}

				_.forEach(this.settings, function(item) {
					credentials[item.handle] = item.value
				})

				return credentials
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
		}
	}
</script>