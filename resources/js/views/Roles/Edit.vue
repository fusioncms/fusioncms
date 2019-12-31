<template>
    <div>
        <portal to="title">
            <app-title icon="crown">Edit Role</app-title>
        </portal>

        <div class="row">
            <shared-form :form="form" :flags="flags"></shared-form> 
        </div>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                id: Number(this.$route.params.role) || null,
                flags: [
                    {
                        label: 'None',
                        value: '',
                    },
                    {
                        label: 'All Access',
                        value: 'all-access',
                    },
                    {
                        label: 'No Access',
                        value: 'no-access',
                    },
                ],
                form: new Form({
                    name: '',
                    slug: '',
                    description: '',
                    special: '',
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch(`/api/roles/${this.id}`).then((response) => {
                    toast('Role successfully updated', 'success')

                    this.$router.push('/roles')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/roles/' + to.params.role),
            ]).then(axios.spread(function (role) {
                next(function(vm) {
                    vm.role = role.data.data
                    vm.id   = role.data.data.id

                    vm.form.name        = vm.role.name
                    vm.form.slug        = vm.role.slug
                    vm.form.description = vm.role.description
                    vm.form.special     = vm.role.special || ''

                    vm.$emit('updateHead')

                    vm.$nextTick(function(){
                        vm.form.resetChangeListener()
                    })
                })
            }))
        },
    }
</script>