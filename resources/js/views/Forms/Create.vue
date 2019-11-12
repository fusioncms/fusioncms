<template>
    <div>
        <portal to="title">
			<app-title icon="paper-plane">Create Form</app-title>
		</portal>

        <shared-form :form="form" :fieldsets="fieldsets" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './Form'

    export default {
        data() {
            return {
                fieldsets: [],
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',
                    fieldset: null,
                    
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

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/fieldsets'),
            ]).then(axios.spread(function (fieldsets) {
                next(function(vm) {
                    vm.fieldsets = _.map(fieldsets.data.data, function(fieldset) {
                        return {
                            'label': fieldset.name,
                            'value': fieldset.id
                        }
                    })

                    vm.fieldsets.unshift({
                        'label': 'None',
                        'value': null
                    })
                })
            }))
        },
    }
</script>