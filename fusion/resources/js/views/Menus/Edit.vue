<template>
    <div>
        <portal to="title">
			<app-title icon="anchor">Edit Menu</app-title>
		</portal>

        <shared-form :form="form" :submit="submit" :id="id" :fieldset="fieldset" @sectionBuilderInput="sectionChange()"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.menu.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                id: null,
                fieldset: null,
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',

                    fieldset: {},
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                let fieldsetForm = {}
                fieldsetForm.sections = this.form.fieldset.sections

                axios.post(`/api/fieldsets/${this.form.fieldset.id}/sections`, fieldsetForm).then((response) => {
                    this.form.patch('/api/menus/' + this.id).then((response) => {
                        toast('Menu successfully saved', 'success')

                        this.$router.push('/menus')
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })
                })
            },

            sectionChange() {
                if (!this.form.hasChanges) {
                    this.form.onFirstChange()
                }
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/menus/' + to.params.menu),
            ]).then(axios.spread(function (menu) {
                next(function(vm) {
                    vm.id = menu.data.data.id

                    vm.form.name = menu.data.data.name
                    vm.form.handle = menu.data.data.handle
                    vm.form.description = menu.data.data.description

                    vm.form.fieldset = menu.data.data.fieldset

                    vm.$emit('updateHead')

                    vm.$nextTick(function(){
                        vm.form.resetChangeListener()
                    })
                })
            }))
        },
    }
</script>