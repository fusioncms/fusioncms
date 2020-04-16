<template>
    <div>
        <portal to="title">
			<app-title icon="paper-plane">Create Form</app-title>
		</portal>

        <shared-form :form="form" :submit="submit" @sectionBuilderInput="sectionChange()"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: 'Create a Form'
                }
            }
        },

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
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/forms').then((response) => {
                    let fieldsetForm = {}
                    fieldsetForm.sections = this.form.fieldset.sections

                    axios.post(`/api/fieldsets/${response.data.fieldset.id}/sections`, fieldsetForm).then((response) => {
                        toast('Form successfully saved', 'success')
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })

                    this.$router.push('/forms')
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },

            sectionChange() {
                if (!this.form.hasChanges) {
                    this.form.onFirstChange()
                }
            }
        },

        mounted() {
            this.$nextTick(function(){
                this.form.resetChangeListener()
            })
        }
    }
</script>