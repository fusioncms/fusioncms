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
                            <div v-for="(fieldtype) in fieldtypes" :key="fieldtype.handle">
                                <div class="flex flex-col lg:flex-row lg:justify-between">
                                    <div class="mb-6 lg:mb-0">
                                        <h3><fa-icon :icon="['far', fieldtype.icon]" class="fa-fw mr-2"></fa-icon> {{ fieldtype.name }}</h3>

                                        <p class="text-sm">{{ fieldtype.description }}</p>
                                    </div>

                                    <div>
                                        <p-checkbox-group label="Available Stuctures">
                                            <p-checkbox v-for="structure in structures" :name="structure.handle" :key="structure.handle" :id="structure.handle" :native-value="structure.handle" v-model="values[fieldtype.handle]">{{ structure.name }}</p-checkbox>
                                        </p-checkbox-group>
                                    </div>
                                </div>

                                <hr>
                            </div>
                        </p-card>
                    </div>

                    <portal to="actions">
                        <router-link :to="{ name: 'settings' }" class="button mr-3">Cancel</router-link>
                        <button type="submit" @click.prevent="submit" class="button button--primary">Save Settings</button>
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
                values: [],
            }
        },

        methods: {
            submit() {
                const formData = new FormData()
                let vm = this

                formData.append('_method', 'PATCH')
                formData.append('structures', JSON.stringify(this.values))

                axios.post('/api/settings/fieldtypes', formData).then(() => {
                    toast('Settings have been updated.', 'success')
                    
                    this.$router.push('/settings')
                })
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/fieldtypes'),
                axios.get('/api/structures'),
                axios.get('/api/settings/fieldtypes'),
            ]).then(axios.spread(function (fieldtypesResponse, structuresResponse, settingsResponse) {
                next(function(vm) {
                    const fieldtypes = fieldtypesResponse.data.data
                    const structures = structuresResponse.data.data
                    const settings   = settingsResponse.data.data

                    let values = JSON.parse(settings.items[0].value)

                    if (_.isEmpty(values)) {
                        _.each(fieldtypes, function(fieldtype) {
                            let enabled = _.reject(structures, function(structure) {
                                return _.includes(fieldtype.exclude, structure.handle)
                            })

                            values[fieldtype.handle] = _.map(enabled, function(structure) {
                                return structure.handle
                            })
                        })
                    }

                    vm.fieldtypes = fieldtypes
                    vm.structures = structures
                    vm.values     = values
                })
            }))
        },
    }
</script>