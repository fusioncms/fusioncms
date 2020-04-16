<template>
    <aside
        class="sidebar"
        :class="{
            'sidebar--opened': isOpen,
            'sidebar--closed': ! isOpen
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
    import { mapGetters } from 'vuex'
    import SidebarItem    from './SidebarItem.vue'
    import SidebarToggle  from './SidebarToggle.vue'

    export default {
        name: 'sidebar',

        components: {
            'sidebar-item': SidebarItem,
            'sidebar-toggle': SidebarToggle,
        },

        props: ['isOpen'],

        computed: {
            ...mapGetters({
                user: 'user/getUser',
                navigation: 'navigation/getNavigation',
                settings: 'settings/getSettings',
            }),
        },

        methods: {
            logout() {
                axios.get('/logout').then(() => window.location = '/')
            },

            listenForEvent() {
                Fusion.bus.$on('toggle-sidebar', () => this.$emit('toggle', ! this.isOpen))
            },
        },

        created() {
            this.listenForEvent()
        }
    }
</script>