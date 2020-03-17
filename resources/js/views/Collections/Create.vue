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
            getCollection(to.params.collection, (error, matrix, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/collections/' + vm.$router.currentRoute.params.collection)

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.collection = matrix
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')
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
                }
            })

            next()
        }
    }

    export function getCollection(collection, callback) {
        console.log(collection)

        axios.get('/api/matrices/slug/' + collection).then((response) => {
            let matrix = response.data.data

            let fields = {
                name: '',
                slug: '',
                status: 1,
            }

            if (matrix.fieldset) {
                _.forEach(matrix.fieldset.sections, function(section) {
                    _.forEach(section.fields, function(field) {
                        fields[field.handle] = field.default
                    })
                })
            }

            callback(null, matrix, fields)
        }).catch(function(error) {
            console.log(error)

            callback(new Error('The requested collection could not be found'))
        })
    }
</script>