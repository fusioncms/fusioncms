<template>
    <aside
        class="sidebar"
        :class="{
            'sidebar--opened': this.isOpen,
            'sidebar--closed': !this.isOpen
        }"
    >
        <div class="flex flex-row-reverse lg:flex-row items-center justify-between lg:justify-center px-6 border-b border-gray-300" style="height: 55px;">
            <router-link to="/" class="sidebar__logo">
                Fusion<span class="font-bold">CMS</span>
            </router-link>

            <div class="p-3 -mr-3 lg:hidden md:p-0">
                <sidebar-toggle></sidebar-toggle>
            </div>
        </div>

        <div class="sidebar__container overflow-auto">
            <nav class="sidebar__nav">
                <ul class="sidebar__menu">
                    <sidebar-item v-for="(item, id) in navigation" :key="id" :to="item.to" :icon="item.icon" :children="item.children" :divider="item.divider || false">
                        {{ item.title }}
                    </sidebar-item>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import SidebarItem from './SidebarItem.vue'
    import SidebarToggle from './SidebarToggle.vue'

    export default {
        name: 'sidebar',

        components: {
            'sidebar-item': SidebarItem,
            'sidebar-toggle': SidebarToggle,
        },

        computed: {
            ...mapGetters({
                user: 'user/getUser',
                navigation: 'navigation/getNavigation',
                settings: 'settings/getSettings',
            }),

            isOpen: {
                get() {
                    return ! _.includes(['sm', 'md'], this.$mq) && this.settings['system.sidebar_open'] == '1'
                },

                set(value) {
                    axios.patch('/api/settings/system', { 'sidebar_open': value })
                        .then((response) => this.setSection({ handle: 'system', section: response.data.data }))
                }
            }
        },

        methods: {
            ...mapActions({
                setSection: 'settings/setSection'
            }),

            logout() {
                axios.get('/logout').then(() => window.location = '/')
            },

            listenForEvent() {
                Fusion.bus.$on('toggle-sidebar', () => this.isOpen = ! this.isOpen)
            }
        },

        created() {
            this.listenForEvent()
        }
    }
</script>