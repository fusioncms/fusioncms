<template>
    <div>
        <portal to="title">
            <app-title icon="paint-roller">Theme</app-title>
        </portal>

        <div class="row">
            <div class="side-container">
                <p-card class="mb-6 flex flex-col items-center justify-center">
                    <div class="text-center mb-3">
                        Your currently set theme is <span class="font-bold">{{ theme.name }}</span>.
                    </div>

                    <a href="#" class="button w-full">Learn More</a>
                </p-card>

                <p-card>
                    <h3 class="font-bold text-lg">Theme Settings</h3>

                    <component
                        v-for="setting in theme.settings"
                        :key="setting.handle"
                        :is="setting.fieldtype + '-fieldtype'"
                        :field="{
                            name: setting.name,
                            handle: setting.handle,
                            help: setting.help,
                            settings: {},
                        }"
                        class="mb-6"
                    ></component>
                </p-card>
            </div>

            <div class="content-container">
                <p-card no-body>
                    <iframe
                        src="http://fusioncms.test"
                        width="100%"
                        height="1080px"
                        frameborder="0">
                    </iframe>
                </p-card>
            </div>
        </div>

        <portal to="actions">
            <router-link :to="{ name: 'dashboard' }" class="button mr-3">Browse</router-link>
            <button type="submit" @click.prevent="submit" class="button button--primary">Save Settings</button>
        </portal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                theme: {},
            }
        },

        methods: {
            submit() {
                //
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/theme/active'),
            ]).then(axios.spread(function (theme) {
                next(function(vm) {
                    vm.theme = theme.data.data
                })
            }))
        },
    }
</script>
