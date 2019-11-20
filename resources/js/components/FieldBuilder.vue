<template>
    <div>
        <div class="row">
            <div class="col mb-6 w-full">
                <h3>Fields</h3>
                <p v-if="fields.length == 0">Add a field to get started.</p>
            </div>
        </div>

        <div class="row" v-if="fields.length > 0">
            <p-sortable-list v-model="fields" class="sortable-list">
                <div class="col mb-6 w-full">
                    <p-sortable-item v-for="(field, index) in fields" :key="field.handle" class="mb-3 w-full">
                        <div class="section__field">
                            <div>
                                <p-sortable-handle class="cursor-move inline-block">
                                    <fa-icon icon="ellipsis-v" class="handle fa-fw text-gray-400 mr-3"></fa-icon>
                                </p-sortable-handle>

                                <fa-icon :icon="['far', field.type.icon]" class="fa-fw mr-3"></fa-icon>
                                <span class="mr-6 font-bold">{{ field.name }}</span>
                                <span class="mr-6 font-mono text-xs">{{ field.handle }}</span>
                                <span class="font-mono text-xs uppercase">{{ field.type.name }}</span>
                            </div>

                            <div>
                                <p-dropdown right>
                                    <fa-icon icon="bars"></fa-icon>
                                    
                                    <template slot="options">
                                        <p-dropdown-item @click.prevent="edit(index)" v-modal:edit-field>Edit</p-dropdown-item>
                                        <p-dropdown-item @click.prevent="remove(index)">Delete</p-dropdown-item>
                                    </template>
                                </p-dropdown>
                            </div>
                        </div>
                    </p-sortable-item>
                </div>
            </p-sortable-list>
        </div>

        <div class="row">
            <div class="col w-full">
                <p-button v-modal:add-field>Add Field</p-button>
            </div>
        </div>

        <p-modal name="add-field" title="Add Field" extra-large>
            <div class="row -mb-6">
                <div class="col w-1/2 lg:w-1/6" v-for="fieldtype in fieldtypes" :key="fieldtype.handle">
                    <p-button class="w-full items-center justify-start mb-6" @click.prevent="add(fieldtype)" v-modal:edit-field v-modal:add-field>
                        <fa-icon :icon="fieldtype.icon" class="fa-fw mr-3 text-sm text-gray-600"></fa-icon> {{ fieldtype.name }}
                    </p-button>
                </div>
            </div>

            <template slot="footer">
                <p-button v-modal:add-field>Close</p-button>
            </template>
        </p-modal>

        <p-modal name="edit-field" title="Edit Field" extra-large>
            <field-editor v-model="tempField" :fieldHandles="sectionFieldHandles"></field-editor>
            <template slot="footer">
                <p-button class="ml-2" v-modal:edit-field>Cancel</p-button>
                <p-button class="button--primary" v-if="!tempField.has_errors" @click.prevent="save()" v-modal:edit-field>Save</p-button>
            </template>
        </p-modal>
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        name: 'field-builder',

        props: ['value', 'fieldHandles', 'id'],

        data() {
            return {
                fieldtypes: {},
                active: null,
                fields: [],
                tempField: {}
            }
        },

        computed: {
            field: {
                get: function() {
                    let field = _.find(this.fields, (field) => {
                        field.has_errors = false
                        return field.handle == this.active
                    })

                    if (typeof field !== 'undefined') {
                        return field
                    }

                    return {}
                },

                set: function(value) {
                    return value
                }      
            },

            sectionFieldHandles() {
                if(this.field.handle) {
                    let handles = _.pull(this.fieldHandles, this.field.handle)
                    return handles
                }

                return this.fieldHandles
            },

            total() {
                return (this.fields.length + 1)
            }
        },

        watch: {
            fields(value) {
                this.$emit('input', value)
            },

            value(value) {
                if (value.length) {
                    this.fields = value
                }
            },
        },

        methods: {
            add(fieldtype, additional = {}) {
                let field = {
                    type: fieldtype,
                    name: additional.name || 'Field ' + this.total,
                    handle: additional.handle || this.getUniqueHandle('field_' + this.total),
                    help: additional.help || '',
                    settings: additional.settings ? _.cloneDeep(additional.settings, true) : _.cloneDeep(fieldtype.settings, true),
                    order: additional.order || 99,
                }

                this.fields.push(field)
                this.active = field.handle

                this.tempField = _.cloneDeep(this.field, true)
            },

            remove(index) {
                this.fields.splice(index, 1)
            },

            edit(index) {
                this.active = this.fields[index].handle

                this.tempField = _.cloneDeep(this.field, true)
            },

            save() {
                let index = _.findIndex(this.fields, (old_field) => {
                    return old_field.handle == this.field.handle})
                this.fields.splice(index, 1, this.tempField)
            },

            getUniqueHandle(handle) {
                while(this.fieldHandles.includes(handle)) {
                    handle = handle + '-1'
                }
                return handle
            }
        },

        mounted() {
            this.fields = this.value || []

            axios.all([
                axios.get('/api/fieldtypes'),
            ]).then(axios.spread(function (fieldtypes) {
                this.fieldtypes = fieldtypes.data.data
            }.bind(this)))
        },

        created() {
            let vm = this

            this.$bus.$on('add-field-' + this.id, (adding) => {
                console.log('adding field event fired', adding)

                let index = _.findIndex(vm.fields, function(field) {
                    return field.handle == adding.handle
                })

                if (index == -1) {
                    vm.add(adding.fieldtype, adding)
                }
            })

            this.$bus.$on('remove-field-' + this.id, (handle) => {
                let index = _.findIndex(this.fields, function(field) {
                    return field.handle == handle
                })

                if (index > -1) {
                    this.remove(index)
                }
            })
        },

        beforeDestroy() {
            this.$bus.$off('add-field-' + this.id, (field) => {
                let index = _.findIndex(this.fields, function(field) {
                    return field.handle == handle
                })

                if (index == -1) {
                    this.add(field.fieldtype, field)
                }
            })

            this.$bus.$off('remove-field-' + this.id, (handle) => {
                let index = _.findIndex(this.fields, function(field) {
                    return field.handle == handle
                })

                if (index > -1) {
                    this.remove(index)
                }
            })
        }
    }
</script>
