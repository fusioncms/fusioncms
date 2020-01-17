<template>
    <div class="row p-0">
        <form class="col col--flush w-full lg:w-1/2" @submit.prevent="add">
            <p-input text="text" placeholder="Label" v-model="option.label" ref="label"></p-input>
            <p-input text="text" placeholder="Value" v-model="option.value"></p-input>

            <p-button class="w-full" @click.prevent="add" type="submit">Add</p-button>

            <p class="mt-6 text-center text-sm text-gray-600">Add and arrange as many options as you need.</p>
        </form>

        <div class="col col--flush w-full lg:w-1/2">
            <p-sortable-list v-model="options">
                <div slot-scope="{ items: items }">
                    <p-sortable-item v-for="(option, index) in items" :key="option.value">
                        <div class="flex bg-white shadow">
                            <form v-if="isEditing(index)" class="flex justify-center items-center pl-3 py-1" @submit.prevent="update">

                                <input text="text" placeholder="Label" class="flex-1" v-model="editing.label" ref="edit">
                                <input text="text" placeholder="Value" class="flex-1" v-model="editing.value">

                                <button class="p-2 text-gray-400 focus:outline-none" @click.prevent="resetEditing"><fa-icon icon="times"></fa-icon></button>
                                <button class="p-2 text-gray-400 focus:outline-none" @click.prevent="update" type="submit"><fa-icon icon="check"></fa-icon></button>
                            </form>

                            <div v-else class="flex flex-1 items-center">
                                <p-sortable-handle class="cursor-move inline-block">
                                    <fa-icon icon="ellipsis-v" class="handle fa-fw text-gray-400 mr-3"></fa-icon>
                                </p-sortable-handle>

                                <div class="mr-3 flex-1">
                                    <input
                                        type="checkbox"
                                        class="mr-3"
                                        :value="option.value"
                                        v-model="option.checked"
                                        :disabled="metLimit(option)"
                                    >

                                    <b>{{ option.label }}</b> <span class="ml-3 text-xs text-gray-600 bg-gray-200 px-2 py-1">{{ option.value }}</span>
                                </div>

                                <button class="p-2 text-gray-400 focus:outline-none" @click.prevent="edit(index)"><fa-icon icon="pencil-alt"></fa-icon></button>
                                <button class="p-2 text-gray-400 focus:outline-none" @click.prevent="destroy(index)"><fa-icon icon="trash-alt"></fa-icon></button>
                            </div>

                        </div>
                    </p-sortable-item>
                </div>
            </p-sortable-list>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                limit: 1,
                editing: {
                    index: null,
                    checked: null,
                    label: null,
                    value: null,
                },

                option: {
                    checked: false,
                    label: '',
                    value: '',
                },

                options: [],
            }
        },

        props: ['value'],

        computed: {
            defaults() {
                return _.filter(this.options, ['checked', true])
            },
        },

        watch: {
            options(value) {
                this.$emit('input', value)
            },

            value(value) {
                this.options = value
            },
        },

        methods: {
            add() {
                this.options.push({
                    checked: false,
                    label: this.option.label,
                    value: this.option.value || this.option.label,
                })

                this.resetOption()
            },

            edit(index) {
                this.editing.index = index
                this.editing.checked = this.options[index].checked
                this.editing.label = this.options[index].label
                this.editing.value = this.options[index].value
            },

            update() {
                this.options.splice(this.editing.index, 1, {
                    label: this.editing.label,
                    value: this.editing.value,
                    checked: this.editing.checked,
                })

                this.resetEditing()
            },

            destroy(index) {
                let value = this.options[index].value
                let defaultIndex = _.indexOf(this.defaults, value)

                if (defaultIndex !== -1) {
                    this.defaults.splice(defaultIndex, 1)
                }
                this.options.splice(index, 1)
            },

            isEditing(index) {
                return this.editing.index == index
            },

            resetOption() {
                this.option.label = ''
                this.option.value = ''
                this.option.checked = false

                this.$nextTick(function() {
                    this.$refs.label.$el.focus()
                })
            },

            resetEditing() {
                this.editing.index = null
                this.editing.label = null
                this.editing.value = null
                this.editing.checked = null

                this.$nextTick(function() {
                    this.$refs.label.$el.focus()
                })
            },

            metLimit(option) {
                return this.defaults.length >= this.limit && _.findIndex(this.defaults, ['value', option.value]) === -1
            },
        },

        created() {
            this.options = this.value || []
        },
    }
</script>
