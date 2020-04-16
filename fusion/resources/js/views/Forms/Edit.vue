<template>
    <div>
        <portal to="title">
			<app-title icon="paper-plane">Edit Form</app-title>
		</portal>

        <shared-form :form="form" :resource="resource" :submit="submit" :fieldset="fieldset" @sectionBuilderInput="sectionChange()"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.form.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                id: null,
                fieldset: null,
                resource: null,
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',

                    fieldset: {},

                    collect_email_addresses: 0,
                    collect_ip_addresses: 0,
                    response_receipt: 0,

                    message: '',
                    redirect_on_submission: 0,
                    redirect_url: '',

                    enable_recaptcha: 0,
                    enable_honeypot: 0,

                    send_to: '',
                    reply_to: '',

                    form_template: '',
                    thankyou_template: '',

                    status: 1,
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                let fieldsetForm = {}
                fieldsetForm.sections = this.form.fieldset.sections

                axios.post(`/api/fieldsets/${this.resource.fieldset.id}/sections`, fieldsetForm).then((response) => {
                    this.form.patch('/api/forms/' + this.resource.id).then((response) => {
                        toast('Form successfully saved', 'success')

                        this.$router.push('/forms')
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })
                })
            },

            sectionChange() {
                if (!this.form.hasChanges) {
                    this.form.onFirstChange()
                }
            }
        },

        beforeRouteEnter(to, from, next) {
            getForm(to.params.form, (error, form) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/forms')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.resource = form
                        vm.form = new Form({
                            name: form.name,
                            handle: form.handle,
                            description: form.description,

                            fieldset: form.fieldset,

                            collect_email_addresses: form.collect_email_addresses,
                            collect_ip_addresses: form.collect_ip_addresses,
                            response_receipt: form.response_receipt,

                            message: form.message,
                            redirect_on_submission: form.redirect_on_submission,
                            redirect_url: form.redirect_url,

                            enable_recaptcha: form.enable_recaptcha,
                            enable_honeypot: form.enable_honeypot,

                            send_to: form.send_to,
                            reply_to: form.reply_to,

                            form_template: form.form_template,
                            thankyou_template: form.thankyou_template,

                            status: form.status,
                        }, true)

                        vm.$emit('updateHead')

                        vm.$nextTick(() => {
                            vm.form.resetChangeListener()
                        })
                    })
                }
            })
        },
    }

    export function getForm(form, callback) {
        axios.get('/api/forms/' + form).then((response) => {
            callback(null, response.data.data)
        }).catch(function(error) {
            callback(new Error('The requested form could not be found'))
        })
    }
</script>