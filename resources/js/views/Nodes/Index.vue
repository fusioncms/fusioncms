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
                    <div class="w-full flex justify-between items-center border rounded px-3 py-2 mb-1" v-for="node in nodes" :key="node.id">
                        <div class="flex items-center">
                            <p-checkbox name="select" class="mr-6"></p-checkbox>

                            <div class="mr-6 text-gray-400">
                                <fa-icon :icon="['fas', 'grip-lines']" class="fa-fw"></fa-icon>
                            </div>

                            <div>
                                <fa-icon class="fa-fw text-xs mr-3" :class="{'text-success-500': node.status, 'text-danger-500': ! node.status}" :icon="['fas', 'circle']"></fa-icon>
                                <router-link :to="{ name: 'menu.nodes.edit', params: {menu: node.menu_id, node: node.id} }">{{ node.name }}</router-link>
                                <fa-icon v-if="node.new_window" class="fa-fw text-gray-500 text-xs" :icon="['fas', 'external-link-alt']"></fa-icon>
                                <span class="ml-6 text-xs px-2 py-1 bg-gray-200 text-gray-600 leading-none">custom</span>
                            </div>
                        </div>

                        <div style="min-width: 150px;" class="text-right draggable__actions">
                            <p-dropdown right>
                                <fa-icon :icon="['fas', 'bars']"></fa-icon>

                                <template slot="options">
                                    <p-dropdown-item @click.prevent :to="{ name: 'menu.nodes.edit', params: {menu: node.menu_id, node: node.id} }">Edit</p-dropdown-item>
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

                    <!-- <data-table></data-table> -->
                </p-card>
            </div>

            <div class="side-container">
                <p-card>
                    <h3>Custom URL</h3>

                    <div>
                        <p-input name="name" label="Name" v-model="form.name"></p-input>

                        <p-input name="url" label="URL" v-model="form.url"></p-input>

                        <p-toggle name="new_window" v-model="form.new_window"
                            label="Open link in new window"
                            help="Whether or not this link should open in a new window."
                        ></p-toggle>

                        <p-button theme="primary" @click.prevent="submit('custom')">Add</p-button>
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
                form: new Form({
                    name: '',
                    url: '',
                    new_window: false,
                }),
            }
        },

        methods: {
            submit(type) {
                let vm = this

                this.form.post('/api/menus/' + this.menu.id + '/nodes').then((response) => {
                    vm.fetchNodes().then((response) => {
                        vm.reset()

                        toast('Menu node successfully added', 'success')
                    })
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },

            fetchNodes() {
                return axios.get('/api/menus/' + this.menu.id).then((response) => {
                    this.nodes = response.data.data.nodes
                })
            },

            reset() {
                this.form.name = ''
                this.form.url  = ''
                this.form.new_window = false
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