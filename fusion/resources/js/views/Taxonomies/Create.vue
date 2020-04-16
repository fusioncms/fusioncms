<template>
    <div>
        <portal to="title">
            <app-title icon="sitemap">Create Taxonomy</app-title>
        </portal>

        <shared-form :form="form" :fieldsets="fieldsets" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import store from '../../vuex'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: 'Create a Taxonomy'
                }
            }
        },

        data() {
            return {
                fieldsets: [],
                creatingFieldset: false,
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',
                    fieldset: null,

                    sidebar: '1',
                    icon: '',

                    route: '',
                    template: '',

                    status: '1',
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/taxonomies').then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Taxonomy successfully created', 'success')

                    this.$router.push('/taxonomies')
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

                    vm.$emit('updateHead')

                    vm.$nextTick(() => {
                        vm.form.resetChangeListener()
                    })
                })
            }))
        }
    }
</script>