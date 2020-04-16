<template>
    <form-container>
        <portal to="title">
            <app-title icon="mail-bulk">Edit Mailable</app-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'mailables' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <div class="card">
            <div class="card__body">
                <p-title
                    name="name"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </p-title>

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

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <p-slug
                        name="handle"
                        label="Handle"
                        monospaced
                        autocomplete="off"
                        required
                        :watch="form.name"
                        :has-error="form.errors.has('handle')"
                        :error-message="form.errors.get('handle')"
                        v-model="form.handle">
                    </p-slug>

                    <p-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </p-toggle>
                </div>
            </div>

            <div class="card">
                <div class="card__body">
                    <p class="text-sm">Below you will find a variety of values you may reference within your template.</p>

                    <div v-for="(options, name) in placeholders" :key="name">
                        <p-button v-if="! isArray(options)" @click="addPlaceholder(options)" class="w-full mb-3 text-xs font-mono">${{ options }}</p-button>

                        <p-dropdown id="values">
                            ${{ name }}

                            <template v-slot:menu>
                                <p-dropdown-link
                                    class="text-xs"
                                    v-for="(value, key) in options"
                                    :key="key"
                                    @click="addPlaceholder(value, name)">
                                        {{ value }}
                                </p-dropdown-link>
                            </template>
                        </p-dropdown>
                    </div>
                </div>
            </div>
        </template>
    </form-container>
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

                    vm.$emit('updateHead')

                    vm.$nextTick(() => {
                        vm.form.resetChangeListener()
                    })
                })
           	})).catch(function(error) {
                next('/mailables')
                toast('The requested mailable could not be found', 'warning')
            })
        }
    }
</script>