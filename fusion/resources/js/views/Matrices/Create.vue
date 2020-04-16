<template>
    <div>
        <portal to="title">
            <app-title icon="hashtag">Create Matrix</app-title>
        </portal>

        <shared-form :form="form" :submit="submit" :fieldsets="fieldsets" :matrices="matrices"></shared-form>
    </div>
</template>

<script>
    import pluralize from 'pluralize'
    import store from '../../vuex'
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: 'Create a Matrix'
                }
            }
        },

        data() {
            return {
                fieldsets: [],
                matrices: [],
                form: new Form({
                    name: '',
                    parent_id: 0,
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

                this.form.post('/api/matrices').then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Matrix successfully created', 'success')

                    this.$router.push('/matrices')
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/fieldsets'),
                axios.get('/api/matrices'),
            ]).then(axios.spread(function (fieldsets, matrices) {
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

                    vm.matrices = _.map(matrices.data.data, function(matrix) {
                        return {
                            'label': matrix.name,
                            'value': matrix.id
                        }
                    })

                    vm.matrices.unshift({
                        'label': 'None',
                        'value': 0
                    })

                    vm.$nextTick(() => {
                        vm.form.resetChangeListener()
                    })
                })
            }))
        }
    }

    export function getMatricesAndFieldsets(callback) {
        axios.all([
            axios.get('/api/fieldsets'),
            axios.get('/api/matrices'),
        ]).then(axios.spread((fieldsets, matrices) => {
            fieldsets = _.map(fieldsets.data.data, function(fieldset) {
                return {
                    'label': fieldset.name,
                    'value': fieldset.id
                }
            })

            fieldsets.unshift({
                'label': 'None',
                'value': null
            })

            matrices = _.map(matrices.data.data, function(matrix) {
                return {
                    'label': matrix.name,
                    'value': matrix.id
                }
            })

            matrices.unshift({
                'label': 'None',
                'value': 0
            })

            callback(null, matrices, fieldsets)
        }))
    }
</script>