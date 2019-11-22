<template>
    <aside
        class="sidebar"
        :class="{
            'sidebar--opened': this.isOpen,
            'sidebar--closed': !this.isOpen
        }"
    >
        <router-link to="/" class="sidebar__logo">
            <!-- <img src="/img/logo.svg" alt="logo"> -->
            
            <h1 v-if="this.isOpen"><span class="font-normal">Fusion</span>CMS</h1>
            <h1 v-else>FU</h1>
        </router-link>

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
    import SidebarItem from './SidebarItem.vue'

    export default {
        name: 'sidebar',

        data() {
            return {
                isOpen: true,
            }
        },

        components: {
            'sidebar-item': SidebarItem
        },

        computed: {
            ...mapGetters({
                user: 'user/getUser',
                navigation: 'navigation/getNavigation',
            }),
        },

        methods: {
            logout() {
                axios.get('/logout').then((response) => {
                    window.location = '/'
                })
            },

            toggle() {
                this.isOpen = ! this.isOpen

                this.emitEvent()
            },

            listenForEvent() {
                Fusion.bus.$on('toggle-sidebar', () => {
                    this.toggle()
                })
            },

            emitEvent() {
                Fusion.bus.$emit('sidebar-is-open', this.isOpen)
            },
        },

        created() {
            this.listenForEvent()
        },
    }
</script>