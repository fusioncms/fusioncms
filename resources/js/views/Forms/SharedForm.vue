<template>
    <div class="row">
        <div class="content-container">
            <form @submit.prevent="submit">
                <!-- <p-card> -->
                    <p-tabs>
                        <p-tab name="Settings">
                            <div class="row">
                                <div class="side-container">
                                    <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                        <h3>General</h3>
                                        <p class="text-sm">What will this form be called and what will it collect?</p>
                                    </div>
                                </div>

                                <div class="content-container">
                                    <p-input
                                        name="name"
                                        label="Name"
                                        help="What this form will be called."
                                        autocomplete="off"
                                        autofocus
                                        required
                                        :has-error="form.errors.has('name')"
                                        :error-message="form.errors.get('name')"
                                        v-model="form.name">
                                    </p-input>

                                    <p-slug
                                        name="handle"
                                        label="Handle"
                                        help="A developer-friendly variant of the form's name."
                                        autocomplete="off"
                                        monospaced
                                        required
                                        delimiter="_"
                                        :watch="form.name"
                                        :has-error="form.errors.has('handle')"
                                        :error-message="form.errors.get('handle')"
                                        v-model="form.handle">
                                    </p-slug>

                                    <p-input
                                        name="description"
                                        label="Description"
                                        help="Give a short description of what this form will collect."
                                        autocomplete="off"
                                        required
                                        :has-error="form.errors.has('description')"
                                        :error-message="form.errors.get('description')"
                                        v-model="form.description">
                                    </p-input>
                                </div>
                            </div>

                            <hr>

                            <div class="row">
                                <div class="side-container">
                                    <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                        <h3>Privacy</h3>
                                        <p class="text-sm">Customize what identifiable information is collected by this form.</p>
                                    </div>
                                </div>

                                <div class="content-container">
                                    <div class="row">
                                        <div class="col w-full">
                                            <p-checkbox-group inline class="mb-0">
                                                <p-checkbox name="collect_email_addresses" id="collect_email_addresses" v-model="form.collect_email_addresses">Collect email addresses</p-checkbox>
                                                <p-checkbox name="collect_ip_addresses" id="collect_ip_addresses" v-model="form.collect_ip_addresses">Collect IP addresses</p-checkbox>
                                            </p-checkbox-group>

                                            <p-checkbox-group class="-mt-3" inline help="Respondents will receive a copy of their submission.">
                                                <p-checkbox name="response_receipt" id="response_receipt" :disabled="! form.collect_email_addresses" v-model="form.response_receipt">Response receipts</p-checkbox>
                                            </p-checkbox-group>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <div class="row">
                                <div class="side-container">
                                    <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                        <h3>Spam</h3>
                                        <p class="text-sm">Configure methods of spam prevention.</p>
                                    </div>
                                </div>

                                <div class="content-container">
                                    <div class="row">
                                        <div class="col w-full">
                                            <p-checkbox-group help="Be sure to enter your site key and secret key in settings.">
                                                <p-checkbox name="enable_recaptcha" id="enable_recaptcha" v-model="form.enable_recaptcha">Enable Google reCAPTCHA</p-checkbox>
                                            </p-checkbox-group>

                                            <p-checkbox-group help="A honeypot is a great and native alternative to Google reCAPTCHA. Both options can be safely enabled at the same time.">
                                                <p-checkbox name="enable_honeypot" id="enable_honeypot" v-model="form.enable_honeypot">Enable Honeypot</p-checkbox>
                                            </p-checkbox-group>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <div class="row">
                                <div class="side-container">
                                    <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                        <h3>E-mail</h3>
                                        <p class="text-sm">Configure who should be notified via email.</p>
                                    </div>
                                </div>

                                <div class="content-container">
                                    <p-textarea
                                        name="send_to"
                                        label="Send notifications to..."
                                        help="List emails as a comma separated list."
                                        placeholder="marie.c@example.com, nikola.t@example.com"
                                        :has-error="form.errors.has('send_to')"
                                        :error-message="form.errors.get('send_to')"
                                        v-model="form.send_to"
                                    ></p-textarea>
                        
                                    <p-input
                                        name="reply_to"
                                        label="Reply to..."
                                        help="Replies to the confirmation email will be sent to this e-mail. By default this will reference the default email in system settings."
                                        autocomplete="off"
                                        :has-error="form.errors.has('reply_to')"
                                        :error-message="form.errors.get('reply_to')"
                                        v-model="form.reply_to">
                                    </p-input>
                                </div>
                            </div>

                            <hr>

                            <div class="row">
                                <div class="side-container">
                                    <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                        <h3>Confirmation</h3>
                                        <p class="text-sm">Customize the way users receive confirmation that their submissions were successful.</p>
                                    </div>
                                </div>

                                <div class="content-container">
                                    <p-radio-group
                                        inline
                                        label="After submitting the form..."
                                        :has-error="form.errors.has('redirect_on_submission')"
                                        :error-message="form.errors.get('redirect_on_submission')"
                                    >
                                        <p-radio id="redirect_on_submission_false" v-model="form.redirect_on_submission" name="redirect_on_submission" :native-value="false">Redirect to default confirmation page...</p-radio>
                                        
                                        <p-radio id="redirect_on_submission_true" v-model="form.redirect_on_submission" name="redirect_on_submission" :native-value="true">Redirect to custom page...</p-radio>
                                    </p-radio-group>
                        
                                    <p-input
                                        v-if="form.redirect_on_submission === false"
                                        name="confirmation_message"
                                        label="Message"
                                        help="This message will be displayed on the confirmation page."
                                        autocomplete="off"
                                        :has-error="form.errors.has('confirmation_message')"
                                        :error-message="form.errors.get('confirmation_message')"
                                        placeholder="Thank you! We'll be in touch soon."
                                        v-model="form.confirmation_message">
                                    </p-input>

                                    <p-input
                                        v-if="form.redirect_on_submission === true"
                                        name="redirect_url"
                                        label="URL"
                                        help="The URL to redirect users to after submitting the form."
                                        autocomplete="off"
                                        :has-error="form.errors.has('redirect_url')"
                                        :error-message="form.errors.get('redirect_url')"
                                        v-model="form.redirect_url">
                                    </p-input>
                                </div>
                            </div>

                            <hr>

                            <div class="row">
                                <div class="side-container">
                                    <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                        <h3>Templates</h3>
                                        <p class="text-sm">Customize the templates used to render your form and thank users for submissions.</p>
                                    </div>
                                </div>

                                <div class="content-container">
                                    <div class="row">
                                        <div class="col w-full xxl:w-1/2">
                                            <p-input
                                                name="form_template"
                                                label="Form Template"
                                                help="What template is responsible for rendering this form?"
                                                autocomplete="off"
                                                monospaced
                                                :has-error="form.errors.has('form_template')"
                                                :error-message="form.errors.get('form_template')"
                                                v-model="form.form_template">
                                            </p-input>
                                        </div>

                                        <div class="col w-full xxl:w-1/2">
                                            <p-input
                                                name="thankyou_template"
                                                label="Thank You Template"
                                                help="What template is reponsible for thanking respondents?"
                                                autocomplete="off"
                                                monospaced
                                                :has-error="form.errors.has('thankyou_template')"
                                                :error-message="form.errors.get('thankyou_template')"
                                                v-model="form.thankyou_template">
                                            </p-input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </p-tab>

                        <p-tab name="Fields">
                            <section-builder v-model="form.fieldset.sections"></section-builder>
                        </p-tab>
                    </p-tabs>
                <!-- </p-card> -->
            </form>
        </div>

        <div class="side-container">
            <form @submit.prevent="submit">
                <p-card>
                    <div class="row">
                        <div class="col w-full">
                            <p-select
                                name="status"
                                label="Status"
                                :options="[
                                    {
                                        'label': 'Enabled',
                                        'value': true,
                                    },
                                    {
                                        'label': 'Disabled',
                                        'value': false,
                                    },
                                ]"
                                v-model="form.status">
                            </p-select>
                        </div>
                    </div>

                    <portal to="actions">
                        <router-link :to="{ name: 'forms' }" class="button mr-3">Go Back</router-link>
                        <button type="submit" @click.prevent="submit" class="button button--primary">Save Form</button>
                    </portal>
                </p-card>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ready: false,
                fieldtype: {},
            }
        },

        props: {
            id: {
                type: Number,
                required: false,
                default: 0
            },

            form: {
                type: Object,
                required: true,
            },

            submit: {
                required: true,
            },
        },

        watch: {
            'form.collect_email_addresses': function(value) {
                if (this.ready) {
                    if (value === false) {
                        this.form.response_receipt = false
    
                        this.removeIdentifiableEmailField()
                    } else {
                        this.addIdentifiableEmailField()
                    }
                }
            },
        },

        methods: {
            addIdentifiableEmailField() {
                let section = this.form.fieldset.sections[0].handle

                this.$bus.$emit('add-field-' + section, {
                    fieldtype: this.fieldtype,
                    name: 'E-mail',
                    handle: 'identifiable_email_address',
                    settings: {
                        type: 'email',
                    }
                })
            },

            removeIdentifiableEmailField() {
                let section = this.form.fieldset.sections[0].handle

                this.$bus.$emit('remove-field-' + section, 'identifiable_email_address')
            },
        },

        created() {
            axios.all([
                axios.get('/api/fieldtypes/input'),
            ]).then(axios.spread(function (fieldtype) {
                this.fieldtype = fieldtype.data
                this.ready = true
            }.bind(this)))
        }
    }
</script>