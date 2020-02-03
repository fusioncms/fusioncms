<template>
    <div>
        <portal to="title">
            <app-title icon="anchor">{{ menu.name }} Nodes</app-title>
        </portal>

        <portal to="actions">
            <div class="inline-block mr-4">
                <p-button>Uncheck All</p-button>
            </div>

            <p-button>Assign parent...</p-button>
            <p-button>Move before...</p-button>
            <p-button>Move after...</p-button>

            <div class="inline-block ml-4 mr-4">
                <p-button theme="danger">Delete</p-button>
            </div>

            <div class="inline-block">
                <router-link :to="{ name: 'menus' }" class="button mr-3">Go back</router-link>
            </div>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-card>
                    <div>
                        <div class="w-full flex justify-between items-center border rounded px-3 py-2 mb-1" v-for="index in 10" :key="index">
                            <div class="flex items-center">
                                <p-checkbox name="select" class="mr-6"></p-checkbox>

                                <div class="mr-6 text-gray-400">
                                    <fa-icon :icon="['fas', 'grip-lines']" class="fa-fw mr-3"></fa-icon>
                                    <fa-icon :icon="['fas', 'chevron-up']" class="fa-fw"></fa-icon>
                                    <fa-icon :icon="['fas', 'chevron-down']" class="fa-fw"></fa-icon>
                                </div>

                                <div>
                                    <a href="#" @click.prevent>Link Title {{ index }}</a>
                                    <span class="ml-6 text-xs px-2 py-1 bg-gray-200 text-gray-600 leading-none">custom</span>
                                </div>
                            </div>

                            <div style="min-width: 150px;" class="text-right draggable__actions">
                                <p-dropdown right>
                                    <fa-icon :icon="['fas', 'bars']"></fa-icon>

                                    <template slot="options">
                                        <p-dropdown-item>Edit</p-dropdown-item>
                                        <p-dropdown-item></p-dropdown-item>
                                        <p-dropdown-item>Assign parent...</p-dropdown-item>
                                        <p-dropdown-item>Move before...</p-dropdown-item>
                                        <p-dropdown-item>Move after...</p-dropdown-item>
                                        <p-dropdown-item></p-dropdown-item>
                                        <p-dropdown-item>Delete</p-dropdown-item>
                                    </template>
                                </p-dropdown>
                            </div>
                        </div>
                    </div>

                    <!-- <data-table></data-table> -->
                </p-card>
            </div>

            <div class="side-container">
                <p-card>
                    <h3>Custom URL</h3>

                    <div>
                        <p-input name="title" label="Title"></p-input>

                        <p-input name="url" label="URL"></p-input>

                        <p-toggle name="new_window"
                            label="Open link in new window"
                            help="Whether or not this link should open in a new window."
                        ></p-toggle>

                        <p-button theme="primary">Add</p-button>
                    </div>
                </p-card>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from '../../forms/Form'

    export default {
        head: {
            title() {
                return {
                    inner: this.menu.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                menu: {},
                nodes: [],
                form: new Form({}),
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/menus/' + to.params.menu).then((response) => {
                next(function(vm) {
                    vm.menu = response.data.data
                    vm.nodes = response.data.data.nodes

                    vm.$emit('updateHead')
                })
            })
        },

        beforeRouteUpdate(to, from, next) {
            axios.get('/api/menus/' + to.params.menu).then((response) => {
                this.menu = response.data.data
                this.nodes = response.data.data.nodes

                this.$emit('updateHead')
            })

            next()
        },
    }
</script>