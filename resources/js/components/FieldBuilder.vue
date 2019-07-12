<template>
    <div>
        <div class="row">
            <div class="col w-full">
                <h3>Fields</h3>
                <p v-if="fields.length == 0">Add a field to get started.</p>
            </div>
        </div>

        <div class="row" v-if="fields.length > 0">
            <p-sortable-list v-model="fields">
                <div class="col w-full">
                    <p-sortable-item v-for="(field, index) in fields" :key="field.handle" class="mb-3 w-full">
                        <div class="section__field">
                            <div>
                                <p-sortable-handle class="cursor-move inline-block">
                                    <fa-icon icon="ellipsis-v" class="handle fa-fw text-grey-light mr-3"></fa-icon>
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
            <div class="row">
                <div class="col w-1/4" v-for="fieldtype in fieldtypes" :key="fieldtype.handle">
                    <p-button class="w-full items-center justify-start" @click.prevent="add(fieldtype)" v-modal:edit-field v-modal:add-field><fa-icon :icon="fieldtype.icon" class="fa-fw mr-3 text-sm text-grey-dark"></fa-icon> {{ fieldtype.name }}</p-button>
                </div>
            </div>

            <template slot="footer">
                <p-button v-modal:add-field>Close</p-button>
            </template>
        </p-modal>

        <p-modal name="edit-field" title="Edit Field" extra-large>
            <field-editor v-model="field"></field-editor>
        </p-modal>
    </div>
</template>

<script>
    export default {
        name: 'field-builder',

        props: ['value'],

        data() {
            return {
                fieldtypes: {},
                active: null,
                fields: [],
                total: 0,
            }
        },

        computed: {
            field() {
                let field = _.find(this.fields, (field) => {
                    return field.id == this.active
                })

                if (typeof field !== 'undefined') {
                    return field
                }

                return {}
            },
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
            add(fieldtype) {
                this.total++

                let field = {
                    type: fieldtype,
                    name: 'Field ' + this.total,
                    handle: 'field_' + this.total,
                    help: '',
                    options: {},
                    order: 99,
                }

                this.fields.push(field)
                this.active = field.id
            },

            remove(index) {
                this.fields.splice(index, 1)
            },

            edit(index) {
                this.active = this.fields[index].id
            }
        },

        mounted() {
            this.fields = this.value || []
            this.total = this.value.length || 0

            axios.all([
                axios.get('/api/fieldtypes'),
            ]).then(axios.spread(function (fieldtypes) {
                this.fieldtypes = fieldtypes.data.data
            }.bind(this)))
        },
    }
</script>
