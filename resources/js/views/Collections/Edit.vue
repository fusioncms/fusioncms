<template>
    <div>
        <portal to="title">
            <app-title :icon="collection.icon || 'pencil-alt'">Edit {{ collection.reference_singular }}</app-title>
        </portal>

        <portal to="subtitle">{{ collection.description }}</portal>

        <shared-form :form="form" :submit="submit" :entry="entry" :collection="collection"></shared-form>
    </div>
</template>

<script>
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
                collection: {},
                entry: {},
                form: new Form({}),
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch('/api/collections/' + this.collection.slug + '/' + this.entry.id).then((response) => {
                    toast('Entry saved successfully', 'success')

                    this.$router.push('/collections/' + this.collection.slug)
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getEntry(to.params.collection, to.params.id, (error, entry, matrix, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/collections/' + vm.$router.currentRoute.params.collection)

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.collection = matrix
                        vm.entry = entry
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')
                        vm.form.resetChangeListener()
                    })
                }
            })
        },

        beforeRouteUpdate(to, from, next) {
            getEntry(to.params.collection, to.params.id, (error, entry, matrix, fields) => {
                if (error) {
                    this.$router.push('/collections/' + this.$router.currentRoute.params.collection)

                    toast(error.toString(), 'danger')
                } else {
                    this.collection = matrix
                    this.entry = entry
                    this.form = new Form(fields, true)

                    this.$emit('updateHead')
                    this.form.resetChangeListener()
                }
            })

            next()
        }
    }

    export function getEntry(collection, id, callback) {
        axios.get('/api/collections/' + collection + '/' + id).then((response) => {
            let matrix = response.data.data.matrix
            let entry = response.data.data.entry
            let fields = {
                name: entry.name,
                slug: entry.slug,
                status: entry.status,
            }

            if (matrix.fieldset) {
                _.forEach(matrix.fieldset.sections, function(section) {
                    _.forEach(section.fields, function(field) {
                        fields[field.handle] = entry[field.handle]
                    })
                })
            }

            callback(null, entry, matrix, fields)
        }).catch(function(error) {
            callback(new Error('The requested entry could not be found'))
        })
    }
</script>