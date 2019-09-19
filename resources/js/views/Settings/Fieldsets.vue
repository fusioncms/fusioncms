<template>
    <div>
        <portal to="title">
            <app-title icon="cog">Fieldtype Settings</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <form @submit.prevent="submit" enctype="multipart/form-data">
                    <div class="col w-full xl:w-2/3 mx-auto">
                        <p-card>
                            {{ fieldtypes }}

                            <div v-for="(fieldtype, index) in fieldtypes" :key="fieldtype.handle">
                                <div class="flex flex-col lg:flex-row lg:justify-between">
                                    <div class="mb-6 lg:mb-0">
                                        <h3><fa-icon :icon="['far', fieldtype.icon]" class="fa-fw mr-2"></fa-icon> {{ fieldtype.name }}</h3>

                                        <p class="text-sm">{{ fieldtype.description }}</p>
                                    </div>

                                    <div>
                                        <p-checkbox-group label="Available Stuctures">
                                            <p-checkbox v-for="structure in structures" :name="structure.handle" :key="structure.handle" :id="structure.handle" :native-value="structure.handle" v-model="fieldtypes[index].structures">{{ structure.name }}</p-checkbox>
                                        </p-checkbox-group>
                                    </div>
                                </div>

                                <hr>
                            </div>
                        </p-card>
                    </div>

                    <portal to="actions">
                        <router-link :to="{ name: 'settings' }" class="button mr-3">Cancel</router-link>
                    </portal>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fieldtypes: [],
                structures: [],
                enabled: [],
            }
        },

        methods: {
            submit() {
                // 
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/fieldtypes'),
                axios.get('/api/structures'),
            ]).then(axios.spread(function (fieldtypes, structures) {
                next(function(vm) {
                    vm.fieldtypes = fieldtypes.data.data
                    vm.structures = structures.data.data
                })
            }))
        },
    }
</script>