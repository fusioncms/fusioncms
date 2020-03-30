<template>
    <div>
        <portal to="title">
            <app-title :icon="taxonomy.icon">Create {{ singular }}</app-title>
        </portal>

        <portal to="subtitle">{{ taxonomy.description }}</portal>

        <shared-form :taxonomy="taxonomy" :form="form" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import pluralize from 'pluralize'
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: 'Create a ' + _.startCase(this.singular) || 'Loading...'
                }
            }
        },

        data() {
            return {
                taxonomy: {},
                form: new Form({}),
            }
        },

        components: {
            'shared-form': SharedForm
        },

        computed: {
            sections() {
                let body = []
                let sidebar = []

                if (this.taxonomy.fieldset) {
                    body = _.filter(this.taxonomy.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.taxonomy.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            },

            singular() {
                if (this.taxonomy.name) {
                    return pluralize.singular(this.taxonomy.name)
                }

                return ''
            },
        },

        methods: {
            submit() {
                this.form.post('/api/taxonomies/' + this.taxonomy.slug).then((response) => {
                    toast('Term saved successfully', 'success')

                    this.$router.push('/taxonomies/' + this.taxonomy.slug)
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getTaxonomy(to.params.taxonomy, (error, taxonomy, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/taxonomies/' + vm.$router.currentRoute.params.taxonomy)

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.taxonomy = taxonomy
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')

                        vm.$nextTick(() => {
                            vm.form.resetChangeListener()
                        })
                    })
                }
            })
        }
    }

    export function getTaxonomy(slug, callback) {
        axios.get('/api/taxonomies/slug/' + slug).then((response) => {
            let taxonomy = response.data.data

            let fields = {
                name: '',
                slug: '',
                status: 1,
            }

            if (taxonomy.fieldset) {
                _.forEach(taxonomy.fieldset.sections, function(section) {
                    _.forEach(section.fields, function(field) {
                        fields[field.handle] = field.default
                    })
                })
            }

            callback(null, taxonomy, fields)
        }).catch(function(error) {
            callback(new Error('The requested taxonomy could not be found'))
        })
    }
</script>