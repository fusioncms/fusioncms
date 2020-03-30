<template>
    <div>
        <portal to="title">
            <app-title :icon="taxonomy.icon || 'pencil-alt'">Edit {{ singular }}</app-title>
        </portal>

        <portal to="subtitle">{{ taxonomy.description }}</portal>

        <shared-form :taxonomy="taxonomy" :form="form" :submit="submit" :term="term"></shared-form>
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
                    inner: this.term.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                taxonomy: {},
                term: {},
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
                this.form.patch('/api/taxonomies/' + this.taxonomy.slug + '/' + this.term.id).then((response) => {
                    toast('Term saved successfully', 'success')

                    this.$router.push('/taxonomies/' + this.taxonomy.slug)
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getTerm(to.params.taxonomy, to.params.id, (error, term, taxonomy, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/taxonomies/' + vm.$router.currentRoute.params.taxonomy)

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.taxonomy = taxonomy
                        vm.term = term
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')

                        vm.$nextTick(() => {
                            vm.form.resetChangeListener()
                        })
                    })
                }
            })
        },

        beforeRouteUpdate(to, from, next) {
            getTerm(to.params.taxonomy, to.params.id, (error, term, taxonomy, fields) => {
                if (error) {
                    this.$router.push('/taxonomies/' + this.$router.currentRoute.params.taxonomy)

                    toast(error.toString(), 'danger')
                } else {
                    this.taxonomy = taxonomy
                    this.term = term
                    this.form = new Form(fields, true)

                    this.$emit('updateHead')

                    this.$nextTick(() => {
                        this.form.resetChangeListener()
                    })
                }
            })

            next()
        }
    }

    export function getTerm(taxonomy, id, callback) {
        axios.get('/api/taxonomies/' + taxonomy + '/' + id).then((response) => {
            let taxonomy = response.data.data.taxonomy
            let term = response.data.data
            let fields = {
                name: term.name,
                slug: term.slug,
                status: term.status,
            }

            if (taxonomy.fieldset) {
                _.forEach(taxonomy.fieldset.sections, function(section) {
                    _.forEach(section.fields, function(field) {
                        fields[field.handle] = term[field.handle]
                    })
                })
            }

            callback(null, term, taxonomy, fields)
        }).catch(function(error) {
            callback(new Error('The requested term could not be found'))
        })
    }
</script>