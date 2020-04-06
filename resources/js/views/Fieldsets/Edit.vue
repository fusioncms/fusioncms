<template>
    <div>
        <portal to="title">
            <app-title icon="list">Edit Fieldset</app-title>
        </portal>

        <shared-form :form="form" :resource="resource"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.form.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                id: null,
                resource: null,
                sections: [],
                originalSections: [],
                loaded: false,
                form: new Form({
                    name: '',
                    handle: '',
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch('/api/fieldsets/' + this.resource.id).then((response) => {
                    let formData = {}
                    formData.sections = this.sections

                    axios.post(`/api/fieldsets/${this.resource.id}/sections`, formData).then((response) => {
                        toast('Fieldset successfully updated', 'success')

                        this.$router.push('/fieldsets')
                    })
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },

            sectionsChanged(value) {
                if(this.loaded && !this.form.hasChanges) {
                    if (!_.isEqual(this.originalSections, value)) {
                        this.form.onFirstChange()
                    }
                }
            }
        },

        beforeRouteEnter(to, from, next) {
            getFieldset(to.params.fieldset, (error, fieldset) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/fieldsets')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.resource = fieldset
                        vm.sections = fieldset.sections
                        vm.originalSections = _.cloneDeep(vm.sections)
                        vm.form = new Form({
                            name: fieldset.name,
                            handle: fieldset.handle,
                        }, true)

                        vm.loaded = true

                        vm.$emit('updateHead')
                        vm.form.resetChangeListener()
                    })
                }
            })
        }
    }

    export function getFieldset(fieldset, callback) {
        axios.get('/api/fieldsets/' + fieldset).then((response) => {
            callback(null, response.data.data)
        }).catch(function(error) {
            callback(new Error('The requested fieldset could not be found'))
        })
    }
</script>