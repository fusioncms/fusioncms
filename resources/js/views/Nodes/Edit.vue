<template>
    <div>
        <portal to="title">
			<app-title icon="anchor">Edit Node</app-title>
		</portal>

        <shared-form :form="form" :submit="submit" :menu="menu" :node="node" :nodes="nodes"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.node.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                menu: {},
                node: {},
                nodes: [],
                form: new Form({
                    name: '',
                    url: '',
                    new_window: false,
                    parent_id: 0,
                    status: false,
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch('/api/menus/' + this.menu.id + '/nodes/' + this.node.id).then((response) => {
                    toast('Node saved successfully', 'success')

                    this.$router.push('/menus/' + this.menu.id + '/nodes')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getNode(to.params.menu, to.params.node, (error, node, menu, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/menus')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.menu = menu
                        vm.node = node
                        vm.form = new Form(fields, true)

                        vm.nodes = _.map(menu.nodes, function(parent) {
                            return {
                                'label': parent.name,
                                'value': parent.id
                            }
                        })

                        vm.nodes.unshift({
                            'label': 'None',
                            'value': 0
                        })

                        vm.$emit('updateHead')

                        vm.$nextTick(() => {
                            vm.form.resetChangeListener()
                        })
                    })
                }
            })

            // axios.all([
            //     axios.get('/api/menus/' + to.params.menu + '/nodes/' + to.params.node),
            //     axios.get('/api/menus/' + to.params.menu),
            // ]).then(axios.spread(function (node, menu) {
            //     next(function(vm) {
            //         vm.id   = node.data.data.id
            //         vm.menu = menu.data.data
            //         vm.node = node.data.data

            //         let fields = {
            //             name: node.data.data.name,
            //             url: node.data.data.url,
            //             new_window: node.data.data.new_window,
            //             parent_id: node.data.data.parent_id,
            //             status: node.data.data.status,
            //         }

            //         if (vm.menu.fieldset) {
            //             _.forEach(vm.menu.fieldset.sections, function(section) {
            //                 _.forEach(section.fields, function(field) {
            //                     Vue.set(fields, field.handle, vm.node[field.handle])
            //                 })
            //             })
            //         }

            //         vm.form = new Form(fields, true)

            //         vm.nodes = _.map(menu.data.data.nodes, function(parent) {
            //             return {
            //                 'label': parent.name,
            //                 'value': parent.id
            //             }
            //         })

            //         vm.nodes.unshift({
            //             'label': 'None',
            //             'value': 0
            //         })

            //         vm.$emit('updateHead')
            //     })
            // }))
        },
    }

    export function getNode(menu, id, callback) {
        axios.all([
            axios.get('/api/menus/' + menu + '/nodes/' + id),
            axios.get('/api/menus/' + menu),
        ]).then(axios.spread(function (node, menu) {
            node = node.data.data
            menu = menu.data.data

            let fields = {
                name: node.name,
                url: node.url,
                new_window: node.new_window,
                parent_id: node.parent_id,
                status: node.status,
            }

            if (menu.fieldset) {
                _.forEach(menu.fieldset.sections, function(section) {
                    _.forEach(section.fields, function(field) {
                        fields[field.handle] = node[field.handle]
                    })
                })
            }

            callback(null, node, menu, fields)
        }))
    }
</script>