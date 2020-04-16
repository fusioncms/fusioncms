<template>
    <div>
        <portal to="title">
            <app-title :icon="matrix.icon || 'pencil-alt'">Edit {{ matrix.reference_singular }}</app-title>
        </portal>

        <portal to="subtitle">{{ matrix.description }}</portal>

        <shared-form :form="form" :submit="submit" :page="page" :matrix="matrix"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'
    import _ from 'lodash'

    export default {
        head: {
            title() {
                return {
                    inner: this.matrix.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                matrix: {},
                page: {},
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

                if (this.matrix.fieldset) {
                    body = _.filter(this.matrix.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.matrix.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            },
        },

        methods: {
            submit() {
                this.form.patch('/api/pages/' + this.matrix.id).then((response) => {
                    toast('Page saved successfully', 'success')
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getPage(to.params.page, (error, page, matrix, fields) => {
                next((vm) => {
                    vm.matrix = matrix
                    vm.page = page
                    vm.form = new Form(fields, true)

                    vm.$emit('updateHead')

                    vm.$nextTick(() => {
                        vm.form.resetChangeListener()
                    })
                })
            })
        },

        beforeRouteUpdate(to,from,next) {
            getPage(to.params.page, (error, page, matrix, fields) => {
                this.matrix = matrix
                this.page = page
                this.form = new Form(fields, true)

                this.$emit('updateHead')

                this.$nextTick(() => {
                    this.form.resetChangeListener()
                })
            })

            next()
        }
    }

    export function getPage(slug, callback) {
        axios.get('/api/pages/' + slug).then((response) => {
            let page = {}
            let matrix = {}

            if (_.has(response, 'data.data.page')) {
                matrix = response.data.data.matrix
                page   = response.data.data.page
            } else {
                matrix = response.data.data
                page   = {
                    name: matrix.name,
                    slug: matrix.slug,
                    status: 1
                }
            }

            let fields = {
                name: page.name,
                slug: page.slug,
                status: page.status,
            }

            if (matrix.fieldset) {
                _.forEach(matrix.fieldset.sections, function(section) {
                    _.forEach(section.fields, function(field) {
                        fields[field.handle] = page[field.handle]
                    })
                })
            }

            callback(null, page, matrix, fields)
        })
    }
</script>