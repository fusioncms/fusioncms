<template>
    <div class="tabs">
        <ul class="tab__list">
            <li v-for="(tab, index) in tabs" :key="index" class="tab flex-1 border-r border-gray-200" :class="{ 'tab--active': index == active }">
                <a href="#" class="tab__link flex justify-between items-center" @click.prevent="select(index, true)">
                    <span>{{ tab.name }} <span class="text-xs">({{ tab.placement }}, {{ linkCount(tab.links.length) }})</span></span>
                    <span @click.prevent="remove(index)" v-if="tabs.length > 1" class="flex items-center justify-center w-6 h-6 rounded hover:bg-black hover:text-white"><fa-icon icon="times" class="fa-xs"></fa-icon></span>
                </a>
            </li>

            <li class="tab">
                <a href="#" class="tab__link" @click.prevent="add"><fa-icon icon="plus" class="fa-fw text-xs"></fa-icon></a>
            </li>
        </ul>

        <div class="tab__panel" v-for="(tab, index) in tabs" :key="index" v-show="isSelected(index)">
            <div class="row">
                <div class="col mb-6 w-full lg:w-1/2">
                    <p-input
                        name="label"
                        label="Section Label"
                        v-model="tab.name"
                        required>
                    </p-input>
                </div>

                <div class="col mb-6 w-full lg:w-1/2">
                    <p-slug
                        name="handle"
                        label="Section Handle"
                        autocomplete="off"
                        delimiter="-"
                        :watch="tab.name"
                        v-model="tab.handle"
                        required>
                    </p-slug>
                </div>

                <div class="col mb-6 w-full lg:w-1/2">
                    <p-input name="description" label="Section Description" v-model="tab.description"></p-input>
                </div>

                <div class="col mb-6 w-full lg:w-1/2">
                    <p-select name="placement" label="Section Placement" v-model="tab.placement" :options="[
                        {
                            'label': 'Body',
                            'value': 'body',
                        },
                        {
                            'label': 'Sidebar',
                            'value': 'sidebar',
                        },
                    ]"></p-select>
                </div>
            </div>

            <div class="row">
                <div class="col mt-6 w-full">
                    <field-builder v-model="tab.links" @input="reorder(tab.links)" :fieldHandles="fieldHandles" :id="tab.handle"></field-builder>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
                total: 0,
                default: {
                    name: 'General',
                    handle: 'general',
                    description: '',
                    placement: 'body',
                    order: 0,
                    links: [],
                },
                tabs: [],
            }
        },

        computed: {
            fieldHandles() {
                let vm = this
                let links = _.map(this.tabs, 'links')
                links = _.flatten(links)
                links = _.concat(links)
                let handles = _.map(links, 'handle')
                return handles
            }
        },

        props: ['value', 'container'],

        watch: {
            tabs: {
                deep: true,
                handler(value){
                    if (this.total === 0) {
                        this.total = value.length
                    }
                    this.$emit('input', value)
                }
            },

            value(value) {
                if (! value.length) {
                    this.tabs.push(this.default)
                } else {
                    this.tabs = value
                }
            },
        },

        methods: {
            add() {
                this.total++

                this.tabs.push({
                    name: 'Section ' + this.total,
                    handle: 'tab-' + this.total,
                    description: '',
                    placement: 'body',
                    order: this.total,
                    links: [],
                })
            },

            remove(index) {
                if (index === 0 && this.tabs.length === 1) return

                const newIndex = index === 0 ? 1 : 0

                this.tabs.splice(index, 1)

                this.active = newIndex
            },

            select(index) {
                if (typeof this.tabs[index] === 'undefined') {
                    this.active = 0
                    return
                }

                this.selectedFieldtype = null
                this.active = index
            },

            isSelected(index) {
                return this.active == index
            },

            linkCount(count) {
                if (count > 1 || count == 0) {
                    return count + ' links'
                }

                return '1 field'
            },

            reorder(links) {
                _.each(links, function (field, order) {
                    field.order = order
                })
            }
        },

        mounted() {
            if (! this.tabs.length) {
                this.tabs.push(this.default)
            }
        }
    }
</script>