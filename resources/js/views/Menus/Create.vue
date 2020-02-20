<template>
    <div>
        <portal to="title">
			<app-title icon="anchor">Create Menu</app-title>
		</portal>

        <shared-form :form="form" :submit="submit" @sectionBuilderInput="sectionChange()"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: 'Create a Menu'
                }
            }
        },

        data() {
            return {
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
                this.form.post('/api/menus').then((response) => {
                    let fieldsetForm = {}
                    fieldsetForm.sections = this.form.fieldset.sections

                    axios.post(`/api/fieldsets/${response.data.fieldset.id}/sections`, fieldsetForm).then((response) => {
                        toast('Menu successfully saved', 'success')
                    }).catch((response) => {
                        toast(response.message, 'failed')
                    })

                    this.$router.push('/menus')
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },

            sectionChange() {
                if (!this.form.hasChanges) {
                    this.form.onFirstChange()
                }
            }
        },

        mounted() {
            this.$nextTick(function(){
                this.form.resetChangeListener()
            })
        }
    }
</script>