<template>
    <div class="flex-wrapper max-w-full">
        <sidebar>
            <slot name="sidebar"></slot>
        </sidebar>

        <div
            class="flex flex-col flex-1"
            :class="{'lg:pl-250px': isSidebarOpen, 'pl-0': !isSidebarOpen}"
            style="margin-top: 55px; transition: all 0.3s ease;"
            :style="{'left: 0;': isSidebarOpen, 'left: -250px;': !isSidebarOpen}"
        >
            <!-- Header -->
            <div
                class="header w-full"
                :class="{'lg:w-full-sidebar-open': isSidebarOpen, 'lg:w-full-sidebar-collapsed': !isSidebarOpen}"
                style="transition: all 0.3s ease;"
            >
                <div class="header__account">
                    <p-dropdown>
                        <fa-icon icon="circle" class="icon fa-xs text-success-500"></fa-icon>
                        {{ user.name }}

                        <template v-slot:menu>
                            <p-dropdown-link href="/" target="_blank">
                                <fa-icon icon="eye" class="icon"></fa-icon>
                                View website
                            </p-dropdown-link>

                            <p-dropdown-divider />

                            <p-dropdown-link :to="'users/' + user.id + '/edit'">
                                <fa-icon icon="user" class="icon"></fa-icon>
                                Account
                            </p-dropdown-link>

                            <p-dropdown-link href="/logout">
                                <fa-icon icon="sign-out-alt" class="icon"></fa-icon>
                                Log out
                            </p-dropdown-link>
                        </template>
                    </p-dropdown>
                </div>

                <div>
                    <sidebar-toggle></sidebar-toggle>
                </div>
            </div>

            <!-- Local Environment Warning -->
            <div class="w-full bg-warning-100 flex flex-col items-center justify-between text-gray-900 shadow border-l text-center" v-if="environment == 'local'">
                <span class="text-sm font-bold py-2 px-6">Your website is currently in the local development environment.</span>

                <div class="w-full" style="height: 4px; background: repeating-linear-gradient(-45deg, #F2D024, #F2D024 12px, #22292F 10px, #22292F 23px);"></div>
            </div>

            <!-- Content -->
            <main class="page-content bg-danger-200">
                <div class="flex justify-between border-b border-gray-400 border-dashed mb-6 pb-2">
                    <div class="flex items-end flex-wrap">
                        <h1 class="leading-tight m-0 p-0">
                            <portal-target name="title" slim></portal-target>
                        </h1>

                        <span class="text-sm ml-3 text-gray-600">
                            <portal-target name="subtitle" slim></portal-target>
                        </span>
                    </div>

                    <div class="actions">
                        <portal-target name="actions" multiple></portal-target>
                    </div>
                </div>

                <div class="">
                    <slot></slot>
                </div>
            </main>

            <!-- Footer -->
            <footer class="page-footer">
                <div>{{ version }}</div>
                <div>Built with <fa-icon :icon="['fas', 'heart']" class="text-primary-500"></fa-icon> & <fa-icon :icon="['fas', 'coffee']" class="text-gray-900"></fa-icon> by the efelle team</div>
                <div>
                    <a href="#" @click.prevent v-modal:privacy-policy class="mr-3">Privacy Policy</a>
                    <a href="#" @click.prevent v-modal:tos>Terms of Service</a>
                </div>
            </footer>

            <portal-target name="modals" multiple></portal-target>
        </div>

        <p-toast></p-toast>
        <tos-modal></tos-modal>
        <privacy-modal></privacy-modal>
        <confirm-modal></confirm-modal>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Sidebar from '../components/Sidebar'
    import SidebarItem from '../components/SidebarItem'
    import SidebarToggle from '../components/SidebarToggle'

    export default {
        name: 'admin-layout',

        data() {
            return {
                isSidebarOpen: true,
            }
        },

        components: {
            'sidebar': Sidebar,
            'sidebar-toggle': SidebarToggle,
        },

        computed: {
            ...mapGetters({
                user: 'user/getUser',
                navigation: 'navigation/getNavigation',
                version: 'fusion/getVersion',
            }),

            environment() {
                return window.environment
            },
        },

        methods: {
            toggle() {
                this.isSidebarOpen = ! this.isSidebarOpen
            },

            listenForSidebarEvent() {
                Fusion.bus.$on('toggle-sidebar', () => {
                    this.toggle()
                })
            }
        },

        created() {
            this.listenForSidebarEvent()
        },

        mounted() {
            this.isSidebarOpen = !_.includes(['sm', 'md'], this.$mq)
        }
    }
</script>