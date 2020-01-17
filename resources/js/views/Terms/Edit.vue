<template>
    <div>
        <portal to="title">
            <app-title :icon="taxonomy.icon || 'pencil-alt'">Edit {{ singular }}</app-title>
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
                    inner: this.entry.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                taxonomy: {},
                entry: {},
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
                this.form.patch('/api/taxonomies/' + this.taxonomy.slug + '/' + this.entry.id).then((response) => {
                    toast('Entry saved successfully', 'success')

                    this.$router.push('/taxonomies/' + this.taxonomy.slug)
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },

            getEntry(to, from, next) {
                let vm = this

                axios.get('/api/taxonomies/' + to.params.taxonomy + '/' + to.params.id).then((response) => {    
                    vm.taxonomy = response.data.data.taxonomy
                    vm.entry = response.data.data

                    let fields = {
                        name: vm.entry.name,
                        slug: vm.entry.slug,
                        status: vm.entry.status,
                    }

                    _.forEach(vm.taxonomy.fields, function(value, handle) {
                        Vue.set(fields, handle, vm.entry[handle])
                    })

                    vm.form = new Form(fields, true)

                    vm.$nextTick(function(){
                        vm.form.resetChangeListener()
                    })

                    vm.$emit('updateHead')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.getEntry(to, from, next)

                vm.$emit('updateHead')
            })
        },

        beforeRouteUpdate(to,from,next) {
            this.getEntry(to, from, next)

            this.$emit('updateHead')
            
            next()
        }
    }
</script>