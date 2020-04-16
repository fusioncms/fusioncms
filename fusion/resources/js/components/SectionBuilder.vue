<template>
    <div class="tabs">
        <ul class="tab__list overflow-x-scroll">
            <li v-for="(section, index) in sections" :key="index" class="tab flex-shrink-0 flex-1 border-r border-gray-200" :class="{ 'tab--active': index == active }">
                <a href="#" class="tab__link flex justify-between items-center" @click.prevent="select(index, true)">
                    <span>{{ section.name }} <span class="text-xs">({{ section.placement }}, {{ fieldCount(section.fields.length) }})</span></span>
                    <span @click.prevent="remove(index)" v-if="sections.length > 1" class="flex items-center justify-center w-6 h-6 rounded hover:bg-black hover:text-white"><fa-icon icon="times" class="fa-xs"></fa-icon></span>
                </a>
            </li>

            <li class="tab">
                <a href="#" class="tab__link" @click.prevent="add"><fa-icon icon="plus" class="fa-fw text-xs"></fa-icon></a>
            </li>
        </ul>

        <div class="tab__panel" v-for="(section, index) in sections" :key="index" v-show="isSelected(index)">
            <div class="row">
                <div class="col mb-6 w-full lg:w-1/2">
                    <p-input
                        name="label"
                        label="Section Label"
                        v-model="section.name"
                        required>
                    </p-input>
                </div>

                <div class="col mb-6 w-full lg:w-1/2">
                    <p-slug
                        name="handle"
                        label="Section Handle"
                        autocomplete="off"
                        delimiter="-"
                        :watch="section.name"
                        v-model="section.handle"
                        required>
                    </p-slug>
                </div>

                <div class="col mb-6 w-full lg:w-1/2">
                    <p-input name="description" label="Section Description" v-model="section.description"></p-input>
                </div>

                <div class="col mb-6 w-full lg:w-1/2">
                    <p-select name="placement" label="Section Placement" v-model="section.placement" :options="[
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
                    <field-builder v-model="section.fields" @input="reorder(section.fields)" :id="section.handle"></field-builder>
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
                sections: [],
                default: {
                    name: 'General',
                    handle: 'general',
                    description: '',
                    placement: 'body',
                    order: 0,
                    fields: [],
                }
            }
        },

        props: {
            value: {
                type: Array,
                default: () => []
            }
        },

        watch: {
            sections: {
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
                    this.sections.push(this.default)
                } else {
                    this.sections = value
                }
            },
        },

        methods: {
            add() {
                this.total++

                this.sections.push({
                    name: 'Section ' + this.total,
                    handle: 'section-' + this.total,
                    description: '',
                    placement: 'body',
                    order: this.total,
                    fields: [],
                })
            },

            remove(index) {
                if (index === 0 && this.sections.length === 1) return

                const newIndex = index === 0 ? 1 : 0

                this.sections.splice(index, 1)

                this.active = newIndex
            },

            select(index) {
                if (typeof this.sections[index] === 'undefined') {
                    this.active = 0
                    return
                }

                this.selectedFieldtype = null
                this.active = index
            },

            isSelected(index) {
                return this.active == index
            },

            fieldCount(count) {
                if (count > 1 || count == 0) {
                    return count + ' fields'
                }

                return '1 field'
            },

            reorder(fields) {
                _.each(fields, function (field, order) {
                    field.order = order
                })
            }
        },

        mounted() {
            if (! this.sections.length) {
                this.sections.push(this.default)
            }
        }
    }
</script>