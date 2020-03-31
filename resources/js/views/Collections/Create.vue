<template>
    <div>
        <portal to="title">
            <app-title :icon="collection.icon">Create {{ collection.reference_singular }}</app-title>
        </portal>

        <portal to="subtitle">{{ collection.description }}</portal>

        <shared-form :form="form" :submit="submit" :collection="collection"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.collection.reference_singular || 'Loading...'
                }
            }
        },

        data() {
            return {
                collection: {},
                form: new Form({})
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.post('/api/collections/' + this.collection.slug).then((response) => {
                    toast('Entry saved successfully', 'success')

                    this.$router.push('/collections/' + this.collection.slug)
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getCollection(to.params.collection, (error, collection, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/collections/' + vm.$router.currentRoute.params.collection)

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.collection = collection
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')
                        vm.form.resetChangeListener()
                    })
                }
            })
        },

        beforeRouteUpdate(to, from, next) {
            getCollection(to.params.collection, (error, matrix, fields) => {
                if (error) {
                    this.$router.push('/collections/' + this.$router.currentRoute.params.collection)

                    toast(error.toString(), 'danger')
                } else {
                    this.collection = matrix
                    this.form = new Form(fields, true)

                    this.$emit('updateHead')
                    this.form.resetChangeListener()
                }
            })

            next()
        }
    }

    export function getCollection(slug, callback) {
        axios.get('/api/matrices/slug/' + slug).then((response) => {
            let collection = response.data.data

            let fields = {
                name: '',
                slug: '',
                status: 1,
            }

            if (collection.fieldset) {
                _.forEach(collection.fieldset.sections, function(section) {
                    _.forEach(section.fields, function(field) {
                        fields[field.handle] = field.default
                    })
                })
            }

            callback(null, collection, fields)
        }).catch(function(error) {
            callback(new Error('The requested collection could not be found'))
        })
    }
</script>