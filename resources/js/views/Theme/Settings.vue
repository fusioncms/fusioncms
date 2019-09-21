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

                    <button class="button w-full" v-modal:learn-more>Learn More</button>
                </p-card>

                <p-card>
                    <h3 class="font-bold text-lg">Theme Settings</h3>

                    <component
                        v-for="(setting, handle) in theme.settings"
                        v-model="theme.setting[handle]"
                        :key="handle"
                        :is="setting.fieldtype + '-fieldtype'"
                        :field="{
                            name: setting.name,
                            handle: handle,
                            help: setting.help,
                            settings: {},
                        }"
                        class="mb-8"
                    ></component>
                </p-card>
            </div>

            <div class="content-container">
                <p-card no-body>
                    <p-frame
                        v-if="preview"
                        :src="preview"
                        width="100%"
                        height="1080px"
                        border="0"
                    ></p-frame>
                </p-card>
            </div>
        </div>

        <portal to="actions">
            <router-link :to="{ name: 'dashboard' }" class="button mr-3">Browse</router-link>
            <button type="submit" @click.prevent="submit" class="button button--primary">Save Settings</button>
        </portal>


        <portal to="modals">
            <p-modal name="learn-more" large no-header>
                <div class="text-center">
                    <h2 class="font-bold text-5xl mb-2 leading-none">{{ theme.name }}</h2>
                    <h3 class="text-sm font-semibold text-gray-800">v{{ theme.version }}, {{ theme.author }}</h3>

                    <p>{{ theme.description }}</p>
                </div>
            </p-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                theme: {},
                preview: '',
            }
        },

        computed: {
            hash() {
                return encodeURIComponent(JSON.stringify(this.theme.setting))
            },
        },

        watch: {
            'theme.setting': {
                handler: _.debounce(function(value) {
                    this.preview = 'http://fusioncms.test?preview=' + this.hash
                }, 500),

                deep: true
            },
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
