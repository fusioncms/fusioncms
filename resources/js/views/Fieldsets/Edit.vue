<template>
    <div>
        <portal to="title">
            <app-title icon="ballot">Edit Fieldset</app-title>
        </portal>

        <form>
            <p-card>
                <div class="row">
                    <div class="col xxl:text-right w-full xxl:w-1/3 xxxl:w-1/4">
                        <div class="xxl:mr-10">
                            <h3>General</h3>
                            <p class="text-sm">What will this fieldset be called?</p>
                        </div>
                    </div>

                    <div class="col w-full xxl:w-2/3">
                        <p-input
                            name="name"
                            label="Name"
                            help="What this fieldset will be called."
                            autocomplete="off"
                            autofocus
                            required
                            :has-error="form.errors.has('name')"
                            :error-message="form.errors.get('name')"
                            v-model="form.name">
                        </p-input>

                        <p-slug
                            name="handle"
                            label="Handle"
                            help="A developer-friendly variant of the fieldset's name."
                            autocomplete="off"
                            required
                            delimiter="_"
                            :watch="form.name"
                            :has-error="form.errors.has('handle')"
                            :error-message="form.errors.get('handle')"
                            v-model="form.handle">
                        </p-slug>
                    </div>
                </div>
            </p-card>

            <section-builder class="mt-6" v-model="sections"></section-builder>

            <portal to="actions">
                <router-link :to="{ name: 'fieldsets' }" class="button mr-3">Go Back</router-link>
                <button type="submit" @click.prevent="submit" class="button button--primary">Save Fieldset</button>
            </portal>
        </form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'

    export default {
        data() {
            return {
                id: null,
                sections: [],
                form: new Form({
                    name: '',
                    handle: '',
                })
            }
        },

        methods: {
            submit() {
                this.form.patch('/api/fieldsets/' + this.id).then((response) => {
                    let formData = {}
                    formData.sections = this.sections

                    axios.post(`/api/fieldsets/${this.id}/sections`, formData).then((response) => {
                        toast('Fieldset successfully updated', 'success')
                        
                        vm.$router.push('/fieldsets')
                    })
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/fieldsets/' + to.params.fieldset),
            ]).then(axios.spread(function (fieldset) {
                next(function(vm) {
                    vm.id = fieldset.data.data.id
                    vm.sections = fieldset.data.data.sections

                    vm.form.name = fieldset.data.data.name
                    vm.form.handle = fieldset.data.data.handle
                })
            }))
        }
    }
</script>