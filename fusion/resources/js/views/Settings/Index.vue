<template>
    <div>
        <portal to="title">
            <app-title icon="sliders-h">Settings</app-title>
        </portal>

        <div class="row flex-1 flex-wrap" v-for="(sections, group) in groups" :key="group">
            <div class="col mb-2 w-full">
                <span class="font-semibold">{{ group }}</span>
            </div>

            <div class="col mb-6 w-full md:w-1/3 xl:w-1/4 xxl:w-1/5" v-for="section in sections" :key="section.handle">
                <router-link :to="{ name: 'setting.section', params: { section: section.handle } }" class="no-underline text-black hover:text-black bg-white rounded shadow hover:shadow-md p-3 flex h-full items-center">
                    <span class="fa-layers fa-fw fa-3x mr-2 flex-shrink-0">
                        <fa-icon :icon="['fas', 'circle']" class="fa-fw text-primary-500"></fa-icon>
                        <fa-icon :icon="['fas', (section.icon || 'cog')]" class="fa-fw fa-inverse" transform="shrink-8"></fa-icon>
                    </span>

                    <div class="flex flex-col">
                        <span class="font-semibold text-lg">{{ section.name }}</span>
                        <span class="text-xs text-gray-800">{{ section.description }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        head: {
            title() {
                return {
                    inner: 'Settings'
                }
            }
        },

        computed: {
            ...mapGetters({
                groups: 'settings/getSectionGroups'
            }),
        }
    }
</script>
