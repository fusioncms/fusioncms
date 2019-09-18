<template>
    <div>
        <portal to="title">
            <app-title icon="cog">Fieldset Settings</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <form @submit.prevent="submit" enctype="multipart/form-data">
                    <div class="col w-full xl:w-2/3 mx-auto">
                        <p-card>
                            <div v-for="fieldtype in fieldtypes" :key="fieldtype.handle">
                                <div class="flex flex-col lg:flex-row lg:justify-between">
                                    <div class="mb-6 lg:mb-0">
                                        <h3><fa-icon :icon="['far', fieldtype.icon]" class="fa-fw mr-2"></fa-icon> {{ fieldtype.name }}</h3>

                                        <p class="text-sm">{{ fieldtype.description }}</p>
                                    </div>

                                    <div>
                                        <p-checkbox-group label="Enabled Stuctures">
                                            <p-checkbox name="toppings" id="pepperoni" native-value="pepperoni" v-model="toppings">Matrix</p-checkbox>
                                            <p-checkbox name="toppings" id="mushrooms" native-value="mushrooms" v-model="toppings">Menus</p-checkbox>
                                            <p-checkbox name="toppings" id="onions" native-value="onions" v-model="toppings">Users</p-checkbox>
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
                toppings: [],
            }
        },

        methods: {
            submit() {
                // 
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/fieldtypes').then((response) => {
                next(vm => {
                    vm.fieldtypes = response.data.data
                })
            })
        },
    }
</script>