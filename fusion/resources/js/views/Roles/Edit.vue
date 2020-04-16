<template>
    <div>
        <portal to="title">
            <app-title icon="user-shield">Edit Role</app-title>
        </portal>

        <shared-form :form="form" :role="role" :flags="flags" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.role.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                role: {},
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
                form: new Form,
            }
        },

        components: {
            'shared-form': SharedForm
        },

        methods: {
            submit() {
                this.form.patch(`/api/roles/${this.role.id}`).then((response) => {
                    toast('Role successfully updated', 'success')

                    this.$router.push('/roles')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getRole(to.params.role, (error, role, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/roles')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.role = role
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')
                    })
                }
            })
        },
    }

    export function getRole(id, callback) {
        axios.get('/api/roles/' + id).then((response) => {
            let role = response.data.data
            let fields = {
                name: role.name,
                slug: role.slug,
                description: role.description,
                special: role.special,
            }

            callback(null, role, fields)
        }).catch(function(error) {
            callback(new Error('The requested role could not be found'))
        })
    }
</script>