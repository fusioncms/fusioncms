<template>
    <div>
        <portal to="title">
            <app-title icon="user-shield">Create Role</app-title>
        </portal>

        <shared-form :form="form" :flags="flags" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: 'Create a Role'
                }
            }
        },

        data() {
            return {
                flags: [
                    {
                        'label': 'None',
                        'value': '',
                    },
                    {
                        'label': 'All Access',
                        'value': 'all-access',
                    },
                    {
                        'label': 'No Access',
                        'value': 'no-access',
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
                this.form.post('/api/roles').then((response) => {
                    toast('Role successfully created', 'success')

                    this.$router.push('/roles')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        mounted() {
            this.$nextTick(function(){
                this.form.resetChangeListener()
            })
        }
    }
</script>