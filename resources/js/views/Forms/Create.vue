<template>
    <div>
        <portal to="title">
			<app-title icon="paper-plane">Create Form</app-title>
		</portal>

        <shared-form :form="form" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        data() {
            return {
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',

                    fieldset: {},
                    
                    collect_email_addresses: false,
                    collect_ip_addresses: false,
                    response_receipt: false,
                    
                    message: '',
                    redirect_on_submission: false,
                    redirect_url: '',

                    enable_recaptcha: false,
                    enable_honeypot: false,
                    
                    send_to: '',
                    reply_to: '',
                    
                    form_template: '',
                    thankyou_template: '',
                    
                    status: true,
                })
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/forms').then((response) => {
                    toast('Form successfully saved', 'success')

                    this.$router.push('/forms')
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },
        },
    }
</script>