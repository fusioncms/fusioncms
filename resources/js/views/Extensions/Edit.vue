<template>
    <form-container>

        <portal to="title">
            <app-title icon="seedling">Edit Extension</app-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'extensions' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <div class="card">
            <div class="card__body">
                <p-title name="name" readonly v-model="form.name"></p-title>

                <p-select
                    name="fieldset"
                    label="Fieldset"
                    help="What fieldset would you like to attach?"
                    :options="fieldsets"
                    :has-error="form.errors.has('fieldset')"
                    :error-message="form.errors.get('fieldset')"
                    v-model="form.fieldset">
                </p-select>
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <p-input label="Handle" monospaced readonly v-model="form.handle"></p-input>
                </div>
            </div>

            <p-definition-list v-if="extension">
                <p-definition name="Created At">
                    {{ $moment(extension.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(extension.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>
            </p-definition-list>
        </template>

    </form-container>
</template>

<script>
    import Form from '../../forms/Form'

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
                extension: {},
                fieldsets: [],
                form: new Form({
                    name: '',
                    handle: '',
                    fieldset: null,
                    status: '1',
                }, true)
            }
        },

        methods: {
            submit() {
                this.form.patch(`/api/extensions/${this.extension.id}`).then((response) => {
                    toast('Extension successfully updated', 'success')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get(`/api/extensions/${to.params.extension}`),
                axios.get('/api/fieldsets'),
            ]).then(axios.spread((extension, fieldsets) => {
                next((vm) => {
                    vm.extension     = extension.data.data
                    vm.form.name     = extension.data.data.name
                    vm.form.handle   = extension.data.data.handle
                    vm.form.fieldset = extension.data.data.fieldset && extension.data.data.fieldset.id ? extension.data.data.fieldset.id : null
                    vm.fieldsets     = _.map(fieldsets.data.data, function(fieldset) {
                        return {
                            'label': fieldset.name,
                            'value': fieldset.id
                        }
                    })

                    vm.fieldsets.unshift({
                        'label': 'None',
                        'value': null

                    })

                    vm.$emit('updateHead')

                    vm.$nextTick(() => {
                        vm.form.resetChangeListener()
                    })
                })
            })).catch(function(error) {
                next('/extensions')
                toast('The requested extension could not be found', 'warning')
            })
        }
    }
</script>