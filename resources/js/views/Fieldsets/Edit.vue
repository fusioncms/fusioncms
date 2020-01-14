<template>
    <div>
        <portal to="title">
            <app-title icon="list">Edit Fieldset</app-title>
        </portal>

        <div class="row">
            <shared-form :form="form"></shared-form> 
        </div>

        
        </form>
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
                this.form.patch('/api/fieldsets/' + this.id).then((response) => {
                    let formData = {}
                    formData.sections = this.sections

                    axios.post(`/api/fieldsets/${this.id}/sections`, formData).then((response) => {
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
            axios.all([
                axios.get('/api/fieldsets/' + to.params.fieldset),
            ]).then(axios.spread(function (fieldset) {
                next(function(vm) {
                    vm.id = fieldset.data.data.id
                    vm.sections = fieldset.data.data.sections
                    vm.originalSections = _.cloneDeep(vm.sections)
                    vm.form.name = fieldset.data.data.name
                    vm.form.handle = fieldset.data.data.handle
                    vm.loaded = true

                    vm.$emit('updateHead')

                    vm.form.resetChangeListener()
                })
            })).catch(function(error) {
                next('/fieldsets')
                toast('The requested fieldset could not be found', 'warning')
            })
        }
    }
</script>