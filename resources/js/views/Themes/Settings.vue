<template>
    <div>
        <portal to="title">
            <app-title icon="paint-roller">Theme</app-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'themes.index' }" class="button">Browse</router-link>
                <button type="submit" @click.prevent="submit" class="button button--primary">Save</button>
            </div>
        </portal>

        <div class="row">
            <div class="side-container">
                <div class="card">
                    <div class="card__body text-center">
                        Your currently set theme is <span class="font-bold">{{ theme.name }}</span>.
                    </div>
                </div>

                <div class="card">
                    <div class="card__body">
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
                    </div>
                </div>
            </div>

            <div class="content-container">
                <div class="card">
                    <div class="w-full p-2 bg-gray-700 rounded-t flex">
                        <button class="ml-2 mr-4 focus:outline-none focus:bg-gray-800" @click.prevent="reload"><fa-icon :icon="['fas', 'redo']" class="fa-fw text-white"></fa-icon></button>
                        <button class="mr-4 focus:outline-none focus:bg-gray-800" @click.prevent="reset"><fa-icon :icon="['fas', 'home']" class="fa-fw text-white"></fa-icon></button>

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
                </div>
            </div>
        </div>

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
        head: {
            title() {
                return {
                    inner: 'Theme Settings'
                }
            }
        },

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
                return this.setting('system.site_url') + '/'
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
                    toast('Theme settings have been updated', 'success')
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
