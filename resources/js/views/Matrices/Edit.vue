<template>
    <div>
        <portal to="title">
            <app-title icon="hashtag">Edit Matrix</app-title>
        </portal>

        <shared-form :id="id" :form="form" :matrix="matrix" :submit="submit" :fieldsets="fieldsets" :matrices="matrices"></shared-form>
    </div>
</template>

<script>
    import SharedForm from './SharedForm'
    import Form from '../../forms/Form'
    import pluralize from 'pluralize'
    import store from '../../vuex'

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
                parent_id: '',
                fieldsets: [],
                matrices: [],
                matrix: {},
                form: new Form({
                    parent_id: 0,
                    name: '',
                    handle: '',
                    description: '',
                    type: 'collection',
                    fieldset: null,

                    reference_singular: '',
                    reference_plural: '',

                    sidebar: '1',
                    quicklink: '1',
                    icon: '',

                    show_name_field: true,
                    name_label: '',
                    name_format: '',

                    route: '',
                    template: '',

                    categorizable: '1',
                    creditable: '1',
                    publishable: '1',
                    revision_control: '1',

                    seoable: '1',

                    status: '1',
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                if (this.form.reference_singular == '') {
                    this.form.reference_singular = pluralize.singular(this.form.name)
                }

                if (this.form.reference_plural == '') {
                    this.form.reference_plural = pluralize(this.form.name)
                }

                this.form.patch('/api/matrices/' + this.id).then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Matrix successfully updated', 'success')

                    this.$router.push('/matrices')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/matrices/' + to.params.matrix),
                axios.get('/api/fieldsets'),
                axios.get('/api/matrices')
            ]).then(axios.spread(function (matrix, fieldsets, matrices) {
                next(function(vm) {
                    vm.matrix = matrix.data.data
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

                    vm.matrices = _.map(matrices.data.data, function(parent) {
                        return {
                            'label': parent.name,
                            'value': parent.id
                        }
                    })

                    vm.matrices.unshift({
                        'label': 'None',
                        'value': 0
                    })

                    // Remove the current matrix - we don't want to assign the parent
                    // to itself. That would create an infinite loop.
                    _.remove(vm.matrices, function(parent) {
                        return parent.label == matrix.data.data.name
                    })

                    vm.id = matrix.data.data.id

                    vm.form.parent_id = matrix.data.data.parent_id
                    vm.form.name = matrix.data.data.name
                    vm.form.handle = matrix.data.data.handle
                    vm.form.description = matrix.data.data.description
                    vm.form.type = matrix.data.data.type
                    vm.form.fieldset = matrix.data.data.fieldset && matrix.data.data.fieldset.id ? matrix.data.data.fieldset.id : null

                    vm.form.reference_singular = matrix.data.data.reference_singular
                    vm.form.reference_plural = matrix.data.data.reference_plural

                    vm.form.sidebar = matrix.data.data.sidebar ? '1' : '0'
                    vm.form.quicklink = matrix.data.data.quicklink ? '1' : '0'
                    vm.form.icon = matrix.data.data.icon

                    vm.form.show_name_field = matrix.data.data.show_name_field
                    vm.form.name_label = matrix.data.data.name_label
                    vm.form.name_format = matrix.data.data.name_format

                    vm.form.route = matrix.data.data.route
                    vm.form.template = matrix.data.data.template

                    vm.form.revision_control = matrix.data.data.revision_control ? '1' : '0'
                    vm.form.categorizable = matrix.data.data.categorizable ? '1' : '0'
                    vm.form.creditable = matrix.data.data.creditable ? '1' : '0'
                    vm.form.publishable = matrix.data.data.publishable ? '1' : '0'

                    vm.form.seoable = matrix.data.data.seoable ? '1' : '0'

                    vm.form.status = matrix.data.data.status ? '1' : '0'

                    vm.$emit('updateHead')

                    vm.$nextTick(() => {
                        vm.form.resetChangeListener()
                    })
                })
            })).catch(function(error) {
                next('/matrices')
                toast('The requested matrix could not be found', 'warning')
            })
        }
    }
</script>