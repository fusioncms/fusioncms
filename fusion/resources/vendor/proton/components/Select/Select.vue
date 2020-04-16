<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <input type="hidden" :value="value" :name="name">

        <div class="form__select" :class="{'form__select--open': isOpen, 'form__select--dark': dark}" v-click-outside="close">
            <button
                @click="toggle"
                type="button"
                class="form__select-button"
                :class="{'form__error': hasError}"
                :disabled="disabled"
                ref="button"
                @keydown.esc="close"
                @keydown.down.prevent="highlightNext"
                @keydown.up.prevent="highlightPrevious"
                @keydown.enter.prevent="selectHighlighted"
            >
                <span v-if="selected" v-html="selected.label || selected"></span>
                <span v-else class="form__select-placeholder" v-html="placeholder"></span>
                <!-- <span class="form__select-placeholder" v-html="placeholder + ' :: ' + (selected.label || selected)"></span> -->

                <div class="form__select-arrow">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </button>

            <div v-show="isOpen" class="form__select-dropdown" ref="dropdown">
                <input
                    type="search"
                    class="form__select-search"
                    v-model="search"
                    ref="search"
                    @keydown.esc="close"
                    @keydown.down="highlightNext"
                    @keydown.up="highlightPrevious"
                    @keydown.enter.prevent="selectHighlighted"
                    v-if="filterable"
                >

                <div class="form__select-controls" v-if="showControls">
                    <span>Press enter to select</span>
                    <span>↑ ↓ to navigate</span>
                    <span>esc to dismiss</span>
                </div>

                <ul class="form__select-options" v-show="filteredOptions.length > 0" ref="options">
                    <li class="form__select-option"
                        :class="{'form__select-option--selected': isSelected(option), 'form__select-option--highlighted': isHighlighted(index)}"
                        v-for="(option, index) in filteredOptions"
                        :key="index"
                        @click="select(option)"
                    >{{ option.label || option }}</li>
                </ul>

                <div
                    v-show="filteredOptions.length === 0"
                    class="form__select-search-empty"
                >
                    No results found for "{{ search }}"
                </div>
            </div>
        </div>

        <div class="form__control--meta" v-if="help || errorMessage">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
                <span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import Popper from 'popper.js'

    export default {
        name: 'p-select',

        data() {
            return {
                isOpen: false,
                search: '',
                highlighted: 0,
                model: this.value,
            }
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            value: {
                required: false,
                default: null,
            },

            label: {
                required: false,
                type: String,
            },

            help: {
                required: false,
                type: String,
            },

            placeholder: {
                required: false,
                type: String,
                default: 'Please select an option...',
            },

            required: {
                type: Boolean,
                default: false,
            },

            disabled: {
                type: Boolean,
                default: false,
            },

            hasError: {
                required: false,
                type: Boolean,
                default: false,
            },

            errorMessage: {
                required: false,
                type: String,
                default: '',
            },

            options: {
                required: false,
                type: Array,
                default: () => {
                    return []
                },
            },

            filterFunction: {
                required: false,
                default: null
            },

            filterable: {
                required: false,
                type: Boolean,
                default: false,
            },

            dark: {
                required: false,
                type: Boolean,
                default: false,
            },

            showControls: {
                required: false,
                type: Boolean,
                default: false,
            }
        },

        computed: {
            selected: {
                get: function () {
                    if (this.model === null) {
                        return this.model
                    }

                    if (typeof _.head(this.options) === 'object') {
                        let index = _.findIndex(this.options, (option) => {
                            if (typeof this.model === 'object') {
                                return option.value === this.model.value
                            }

                            return option.value === this.model
                        })

                        if (index === -1) {
                            return null
                        }

                        return this.options[index]
                    }

                    return this.model
                },
                
                set: function(selected) {
                    this.model = selected
                }
            },

            filteredOptions() {
                if (this.filterFunction == null) {
                    return this.options.filter((option) => {
                        let value = option.value || option
                        let label = option.label || option

                        return label.toLowerCase().startsWith(this.search.toLowerCase())
                    })
                }

                return this.filterFunction(this.search, this.options)
            }
        },

        watch: {
            search() {
                this.resetHighlighted()
            },

            value(value) {
                if (value !== null) {
                    this.select(value)
                }
            },
        },

        methods: {
            toggle() {
                this.isOpen ? this.close() : this.open()
            },

            open() {
                this.isOpen = true

                this.$nextTick(() => {
                    if (this.filterable) {
                        this.$refs.search.focus()
                    }

                    this.setupPopper()
                })
            },

            close() {
                if (this.isOpen) {
                    this.resetSearch()
                    this.resetHighlighted()
                    
                    this.isOpen = false
                    this.$refs.button.focus()
                }                
            },

            setupPopper() {
                if (this.popper === undefined) {
                    this.popper = new Popper(this.$refs.button, this.$refs.dropdown, {
                        placement: 'bottom'
                    })
                } else {
                    this.popper.scheduleUpdate()
                }
            },

            resetSearch() {
                this.search = ''
            },

            select(option) {
                let value = null

                if (typeof option === 'object') {
                    value = option['value']
                } else {
                    value = option
                }

                this.$emit('input', value)
                this.$emit('change', value)
                this.selected = option
                this.close()
            },

            selectHighlighted() {
                this.select(this.filteredOptions[this.highlighted])
            },

            isSelected(option) {
                if (option.value && (this.selected !== null)) {
                    return ((option.value === this.selected.value) || (option.value === this.selected))
                }

                return (option === this.selected)
            },

            isHighlighted(index) {
                return (index === this.highlighted)
            },

            resetHighlighted() {
                this.highlighted = 0

                this.scrollToHighlighted()
            },

            highlight(index) {
                this.highlighted = index

                if (this.highlighted > (this.filteredOptions.length - 1)) {
                    this.highlighted = 0
                }

                if (this.highlighted < 0) {
                    this.highlighted = this.filteredOptions.length - 1
                }

                this.scrollToHighlighted()
            },

            highlightNext() {
                this.highlight(this.highlighted + 1)
            },

            highlightPrevious() {
                this.highlight(this.highlighted - 1)
            },

            scrollToHighlighted() {
                this.$refs.options.children[this.highlighted].scrollIntoView({
                    block: 'nearest'
                })
            },
        },

        beforeDestroy() {
            if (this.popper) {
                this.popper.destroy()
            }
        }
    }
</script>
