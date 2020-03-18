<template>
    <div class="flex-wrapper max-w-full">
        <sidebar @toggle="toggleSidebar" :isOpen="isSidebarOpen">
            <slot name="sidebar"></slot>
        </sidebar>

        <div
            class="flex flex-col flex-1"
            :class="{'md:pl-250px': isSidebarOpen, 'pl-0': !isSidebarOpen}"
            style="margin-top: 55px; transition: all 0.3s ease;"
            :style="{'left: 0;': isSidebarOpen, 'left: -250px;': !isSidebarOpen}"
        >
            <!-- Header -->
            <div
                class="header w-full"
                :class="{'md:w-full-sidebar-open': isSidebarOpen, 'md:w-full-sidebar-collapsed': !isSidebarOpen}"
                style="transition: all 0.3s ease;"
            >
                <div class="header__account">
                    <renderless-dropdown id="account-menu-button">
                        <div class="dropdown dropdown--right" slot-scope="props" :class="{'dropdown--open': props.isOpen}" v-click-outside="props.close">
                            <a href="#" class="text-gray-400 hover:text-gray-900 p-1" @click.prevent="props.toggle()"><fa-icon icon="ellipsis-v" class="fa-fw fa-lg"></fa-icon></a>

                            <div class="dropdown__menu">
                                <p-dropdown-item>
                                    <p>
                                        Hello and {{ greeting }},<br>
                                        <strong>{{ user.name }}</strong>
                                    </p>
                                </p-dropdown-item>

                                <p-dropdown-divider />

                                <p-dropdown-link href="/" target="_blank">
                                    <fa-icon icon="eye" class="icon"></fa-icon>
                                    View website
                                </p-dropdown-link>

                                <p-dropdown-divider />

                                <p-dropdown-link :to="'/users/' + user.id + '/edit'">
                                    <fa-icon icon="user" class="icon"></fa-icon>
                                    Account
                                </p-dropdown-link>

                                <p-dropdown-link href="/logout">
                                    <fa-icon icon="sign-out-alt" class="icon"></fa-icon>
                                    Log out
                                </p-dropdown-link>
                            </div>
                        </div>
                    </renderless-dropdown>
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
            <main class="container--page">
                <div class="flex justify-between mb-6">
                    <div class="flex flex-wrap items-center">
                        <h1 class="leading-none m-0 p-0 text-gray-800">
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

                <div>
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
    import Cookies        from 'js-cookie'
    import Sidebar        from '../components/Sidebar'
    import SidebarItem    from '../components/SidebarItem'
    import SidebarToggle  from '../components/SidebarToggle'

    export default {
        name: 'admin-layout',

        data() {
            return {
                isSidebarOpen: ! _.includes(['sm', 'md'], this.$mq) && Cookies.get('fusion_sidebar') === 'open'
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

            greeting() {
                let today = new Date
                let currentHour = today.getHours()
                let greeting = 'good day'

                if (currentHour > 18) {
                    greeting = 'good evening'
                } else if (currentHour > 12) {
                    greeting = 'good afternoon'
                } else if (currentHour > 0) {
                    greeting = 'good morning'
                }

                return greeting
            },


        },

        methods: {
            toggleSidebar(value) {
                this.isSidebarOpen = value

                if (value) {
                    Cookies.set('fusion_sidebar', 'open')
                } else {
                    Cookies.set('fusion_sidebar', 'close')
                }
            }
        }
    }
</script>