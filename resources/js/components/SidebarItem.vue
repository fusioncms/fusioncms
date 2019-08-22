<template>
    <li>
        <span v-if="divider" class="block text-xs tracking-wider font-bold uppercase my-3 pl-8 text-grey-darker"><slot></slot></span>

        <router-link
            exact
            v-if="! hasChildren && ! divider"
            :to="to"
            class="sidebar__menu-link"
        >
            <div class="flex">
                <span class="sidebar__menu-icon" v-if="icon">
                    <fa-icon :icon="['far', icon]" class="fa-inverse! fa-fw fa-lg"></fa-icon>
                </span>

                <span class="sidebar__menu-text" v-if="isSidebarOpen"><slot></slot></span>
            </div>
        </router-link>

        <a href="#" v-if="hasChildren && ! divider" @click.prevent="onClick($event)" class="sidebar__menu-link">
            <div class="flex">
                <span class="sidebar__menu-icon" v-if="icon">
                    <fa-icon :icon="['far', icon]" class="fa-inverse! fa-fw fa-lg"></fa-icon>
                </span>

                <span class="sidebar__menu-text" v-if="isSidebarOpen"><slot></slot></span>
            </div>

            <span class="sidebar__menu-toggle" v-if="hasChildren">
                <fa-icon v-if="! showChildren" :icon="['far', 'plus']" class="fa-inverse! fa-fw"></fa-icon>
                <fa-icon v-else :icon="['far', 'minus']" class="fa-inverse! fa-fw"></fa-icon>
            </span>
        </a>

        <ul class="sidebar__menu-link-children" v-if="hasChildren" v-show="showChildren">
            <li v-for="(child, id) in children" :key="id">
                <router-link
                    exact
                    :to="child.to"
                    class="sidebar__menu-link"
                >
                    <div class="flex items-center">
                        <fa-icon icon="chevron-double-right" class="fa-xs mr-2 text-grey-dark" style="font-size: .5rem;"></fa-icon>
                        <span class="sidebar__menu-text" v-if="isSidebarOpen">{{ child.title }}</span>
                    </div>
                </router-link>
            </li>
            <slot name="children"></slot>
        </ul>
    </li>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'sidebar-item',

        props: {
            icon: {
                type: String,
            },

            active: {
                type: Boolean,
                default: false,
            },

            to: {
                type: String,
                default: '#',
            },

            children: {
                type: Object|Boolean,
                default: false,
            },

            divider: {
                type: Boolean,
                default: false,
            }
        },

        data() {
            return {
                showChildren: false,
                isSidebarOpen: true,
            }
        },

        computed: {
            hasChildren() {
                return this.children != false
            }
        },

        methods: {
            onClick(event) {
                this.showChildren = !this.showChildren
            },

            toggle() {
                this.isSidebarOpen = ! this.isSidebarOpen
            },

            listenForSidebarEvent() {
                Fusion.bus.$on('toggle-sidebar', () => {
                    this.toggle()
                })
            }
        },

        mounted() {
            if (this.$slots['children'] != undefined) {
                this.hasChildren = true
            }
        },

        created() {
            this.listenForSidebarEvent()
        }
    }
</script>