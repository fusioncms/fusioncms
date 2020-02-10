<template>
    <div>
        <portal to="title">
			<app-title icon="anchor">Edit Node</app-title>
		</portal>

        <shared-form :form="form" :submit="submit" :menu="menu" :node="node"></shared-form>
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
                toast('Submitted')
                // axios.post(`/api/fieldsets/${this.form.fieldset.id}/sections`, fieldsetForm).then((response) => {
                //     this.form.patch('/api/menus/' + this.id).then((response) => {
                //         toast('Menu successfully saved', 'success')

                //         this.$router.push('/menus')
                //     }).catch((response) => {
                //         toast(response.message, 'failed')
                //     })
                // })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/menus/' + to.params.menu + '/nodes/' + to.params.node),
                axios.get('/api/menus/' + to.params.menu),
            ]).then(axios.spread(function (node, menu) {
                next(function(vm) {
                    vm.id   = node.data.data.id
                    vm.menu = menu.data.data
                    vm.node = node.data.data

                    vm.form.name       = node.data.data.name
                    vm.form.url        = node.data.data.url
                    vm.form.new_window = node.data.data.new_window
                    vm.form.parent_id  = node.data.data.parent_id
                    vm.form.status     = node.data.data.status

                    vm.$emit('updateHead')
                })
            }))
        },
    }
</script>