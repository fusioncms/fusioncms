<template>
    <div>
        <portal to="title">
            <app-title icon="mail-bulk">Edit Mailable</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'mailables' }" class="button mr-3">Go Back</router-link>
            <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save Mailable</button>
        </portal>

        <div class="row">
            <div class="content-container">
                <form @submit.prevent="submit">
                    <p-card>
                        <div class="row">
                            <div class="col form-sidebar">
                                <div class="xxl:mr-10">
                                    <!--  -->
                                </div>
                            </div>

                            <div class="col form-content">
                                <div class="row mb-6">
                                    <div class="col w-full xxl:w-1/2 mb-6">
                                        <p-input
                                            name="name"
                                            label="Name"
                                            help="What this mailable will be called."
                                            autocomplete="off"
                                            autofocus
                                            required
                                            :has-error="form.errors.has('name')"
                                            :error-message="form.errors.get('name')"
                                            v-model="form.name">
                                        </p-input>
                                    </div>

                                    <div class="col w-full xxl:w-1/2 mb-6">
                                        <p-slug
                                            name="handle"
                                            label="Handle"
                                            help="A developer-friendly variant of the mailable's name."
                                            autocomplete="off"
                                            required
                                            delimiter="_"
                                            :watch="form.name"
                                            :has-error="form.errors.has('handle')"
                                            :error-message="form.errors.get('handle')"
                                            v-model="form.handle">
                                        </p-slug>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col w-full">
                                        <markdown-field
                                            v-if="ready"
                                            ref="markdown"
                                            v-on:input="updateMarkdown"
                                            :field="{
                                                'name': 'Content',
                                                'handle': 'markdown'
                                            }"
                                            :value="form.markdown">
                                        </markdown-field>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p-card>
                </form>
            </div>

            <div class="side-container">
                <p-card>
                    <div class="row">
                        <div class="col w-full">
                            <p-select
                                name="status"
                                label="Status"
                                :options="[
                                    {
                                        'label': 'Enabled',
                                        'value': '1',
                                    },
                                    {
                                        'label': 'Disabled',
                                        'value': '0',
                                    },
                                ]"
                                v-model="form.status">
                            </p-select>
                        </div>
                    </div>
                </p-card>

                <p-card class="mt-5">
                    <div class="row">
                        <div class="col w-full mailable__placeholders">
                            <label class="form__label">Placeholders</label>
                            <p class="text-sm">Below you will find a variety of values you may reference within your template.</p>

                            <div v-for="(options, name) in placeholders" :key="name">
                                <p-button v-if="! isArray(options)" @click="addPlaceholder(options)" class="w-full mb-3 text-xs font-mono">${{ options }}</p-button>

                                <p-dropdown>
                                    <div class="font-mono text-sm">${{ name }}</div>
                                    <div class="form__select-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>

                                    <template slot="options">
                                        <p-dropdown-item
                                            class="text-xs font-mono"
                                            v-for="(value, key) in options"
                                            :key="key"
                                            @click="addPlaceholder(value, name)">
                                                {{ value }}
                                        </p-dropdown-item>
                                    </template>
                                </p-dropdown>
                            </div>
                        </div>
                    </div>
                </p-card>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import Form from '../../forms/Form'
    import MarkdownField from '../../fieldtypes/Markdown/Field'

	export default {
		head: {
            title() {
                return {
                    inner: this.form.name || 'Loading...'
                }
            }
        },

        components: {
            'markdown-field': MarkdownField
        },

		data() {
            return {
                id: null,
                ready: false,
                placeholders: {},
                form: new Form({
                    name: '',
                    handle: '',
                    markdown: '',
                    status: '1'
                }, true)
            }
        },

        methods: {
            isArray(value) {
                return _.isArray(value)
            },

            addPlaceholder(value, name) {
                const codemirror = this.$refs.markdown.codemirror
                const doc        = codemirror.getDoc()
                const cursor     = doc.getCursor()

                if (name) {
                    doc.replaceSelection(`{{ $${name}->${value} }}`, doc.getSelection())
                } else {
                    doc.replaceSelection(`{{ $${value} }}`, doc.getSelection())
                }
            },

            updateMarkdown(markdown) {
                this.form.markdown = markdown
            },

            submit() {
                this.form.patch('/api/mailables/' + this.id).then((response) => {
                    toast('Mailable successfully updated', 'success')

                    this.$router.push('/mailables')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },

            placeholderOptions(placeholders) {
                let options = []

                _.each(placeholders, (option) => {
                    options.push({
                        label: option,
                        value: option
                    })
                })

                return options
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get(`/api/mailables/${to.params.mailable}`),
            ]).then(axios.spread(function (mailable) {
                next(function(vm) {
                    vm.id           = mailable.data.data.id
                    vm.placeholders = mailable.data.data.placeholders
                    vm.ready        = true

                    vm.form.name     = mailable.data.data.name
                    vm.form.handle   = mailable.data.data.handle
                    vm.form.markdown = mailable.data.data.markdown
                    vm.form.resetChangeListener()

                    vm.$emit('updateHead')
                })
           	})).catch(function(error) {
                next('/mailables')
                toast('The requested mailable could not be found', 'warning')
            })
        }
	}
</script>