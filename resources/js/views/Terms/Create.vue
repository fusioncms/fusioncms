<template>
    <div>
        <portal to="title">
            <app-title :icon="taxonomy.icon">Create {{ singular }}</app-title>
        </portal>
        
        <portal to="subtitle">{{ taxonomy.description }}</portal>

        <shared-form :taxonomy="taxonomy" :form="form"></shared-form>
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
                    toast('Entry saved successfully', 'success')

                    this.$router.push('/taxonomies/' + this.taxonomy.slug)
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/taxonomies/slug/' + to.params.taxonomy).then((response) => {
                next(function(vm) {
                    vm.taxonomy = response.data.data

                    let fields = {
                        name: '',
                        slug: '',
                        status: 1,
                    }

                    if (vm.taxonomy.fieldset) {
                        _.forEach(vm.taxonomy.fieldset.sections, function(section) {
                            _.forEach(section.fields, function(field) {
                                Vue.set(fields, field.handle, field.default)
                            })
                        })
                    }

                    vm.form = new Form(fields, true)
                    vm.$emit('updateHead')

                    vm.$nextTick(function(){
                        vm.form.resetChangeListener()
                    })
                })
            })
        }
    }
</script>