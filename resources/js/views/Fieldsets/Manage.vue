<template>
    <div>
        <portal to="title">
            <app-title icon="atom-alt">Manage {{ matrix.name }}</app-title>
        </portal>

        <portal to="subtitle"><span class="uppercase">{{ matrix.type }}</span></portal>

        <portal to="actions">
            <router-link :to="{ name: 'fieldsets' }" class="button mr-3">Go Back</router-link>
            <p-button @click.prevent="submit" class="button button--primary">Save</p-button>
        </portal>

        <div class="row">
            <div class="col w-full">
                <section-builder v-model="matrix.sections"></section-builder>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 0,
                matrix: {}
            }
        },

        computed: {
            isCollection() {
                return this.matrix.type === 'collection'
            },
        },

        methods: {
            submit() {
                let formData = {}

                formData.sections = this.matrix.sections

                axios.post(`/api/matrices/${this.matrix.id}/sections`, formData).then((response) => {
                    toast('Matrix has been updated.', 'success')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/matrices/' + to.params.matrix),
            ]).then(axios.spread(function (matrix) {
                next(function(vm) {
                    vm.id = matrix.data.data.id
                    vm.matrix = matrix.data.data
                })
            }))
        }
    }
</script>
