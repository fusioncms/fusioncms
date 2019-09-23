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
                    <div class="w-full p-2 bg-gray-700 rounded-t flex">
                        <button class="ml-2 mr-4 focus:outline-none focus:bg-gray-800" @click.prevent="reload"><fa-icon :icon="['far', 'redo']" class="fa-fw text-white"></fa-icon></button>
                        <button class="mr-4 focus:outline-none focus:bg-gray-800" @click.prevent="reset"><fa-icon :icon="['far', 'home']" class="fa-fw text-white"></fa-icon></button>

                        <div class="px-6 bg-gray-800 rounded-full text-gray-400 flex flex-1">
                            <span>{{ baseUrl }}</span>
                            <input type="text" name="url" v-model="url" class="flex flex-1 tracking-wide text-white font-bold bg-transparent focus:outline-none" @enter.prevent="reload">
                        </div>
                    </div>

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
            <router-link :to="{ name: 'themes.index' }" class="button mr-3">Browse</router-link>
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
                url: '',
            }
        },

        computed: {
            hash() {
                return this.encode(JSON.stringify(this.theme.setting))
            },

            previewUrl() {
                return this.baseUrl + this.url + '?preview=' + this.hash
            },

            baseUrl() {
                return this.setting('site_url') + '/'
            },
        },

        watch: {
            'theme.setting': {
                handler: _.debounce(function(value) {
                    this.reload()
                }, 500),

                deep: true
            },

            'url': {
                handler: _.debounce(function(value) {
                    this.reload()
                }, 500)
            }
        },

        methods: {
            submit() {
                this.theme.setting['_method'] = 'PATCH'

                axios.post(`/api/themes/${this.theme.slug}`, this.theme.setting).then(() => {
                    toast('Settings have been updated.', 'success')
                })
            },

            encode(string) {
                return encodeURIComponent(string).replace(/[!'()*]/g, escape);
            },

            reload() {
                this.preview = this.previewUrl
            },

            reset() {
                this.url = ''

                this.reload()
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/theme'),
            ]).then(axios.spread(function (theme) {
                next(function(vm) {
                    vm.theme = theme.data.data
                })
            }))
        },
    }
</script>
