<template>
    <div>
        <portal to="title">
            <app-title icon="sitemap">Edit Taxonomy</app-title>
        </portal>

        <shared-form :form="form" :fieldsets="fieldsets" :taxonomy="taxonomy" :submit="submit"></shared-form>
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
                    inner: this.form.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                taxonomy: {},
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
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch('/api/taxonomies/' + this.taxonomy.id).then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Taxonomy successfully updated', 'success')

                    this.$router.push('/taxonomies')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/taxonomies/' + to.params.taxonomy),
                axios.get('/api/fieldsets'),
            ]).then(axios.spread(function (taxonomy, fieldsets) {
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

                    vm.taxonomy = taxonomy.data.data

                    vm.form.name = taxonomy.data.data.name
                    vm.form.handle = taxonomy.data.data.handle
                    vm.form.description = taxonomy.data.data.description
                    vm.form.fieldset = taxonomy.data.data.fieldset && taxonomy.data.data.fieldset.id ? taxonomy.data.data.fieldset.id : null

                    vm.form.sidebar = taxonomy.data.data.sidebar ? '1' : '0'
                    vm.form.icon = taxonomy.data.data.icon

                    vm.form.route = taxonomy.data.data.route
                    vm.form.template = taxonomy.data.data.template

                    vm.$emit('updateHead')
                    vm.$nextTick(() => {
                        vm.form.resetChangeListener()
                    })
                })
            })).catch(function(error) {
                next('/taxonomies')
                toast('The requested taxonomy could not be found', 'warning')
            })
        }
    }
</script>