<template>
    <div>
        <portal to="title">
			<app-title icon="anchor">Edit Node</app-title>
		</portal>

        <shared-form :form="form" :submit="submit" :id="id" :node="node"></shared-form>
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
                id: null,
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
            ]).then(axios.spread(function (node) {
                next(function(vm) {
                    vm.id   = node.data.data.id
                    vm.node = node.data.data

                    vm.form.name       = node.data.data.name
                    vm.form.url        = node.data.data.url
                    vm.form.new_window = node.data.data.new_window
                    vm.form.parent_id  = node.data.data.parent_id
                    vm.form.status     = node.data.data.status
                    // vm.menu            = node.data.data.menu

                    vm.$emit('updateHead')
                })
            }))
        },
    }
</script>