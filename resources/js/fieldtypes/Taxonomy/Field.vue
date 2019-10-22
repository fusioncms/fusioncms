<template>
    <div>
        <p-checkbox-group :label="field.name" :help="field.help">
            <p-checkbox
                v-for="term in taxonomy.terms"
                :key="term.id"
                :name="field.handle"
                :id="term.id"
                :native-value="term.id"
                v-model="values"
                @input="$emit('input', values)"
            >
                <template>
                    {{ term.name }}
                </template>
            </p-checkbox>
        </p-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: 'taxonomy-fieldtype',

        data() {
            return {
                taxonomy: {},
                values: [],
            }
        },

        computed: {
            term() {
                if (this.taxonomy.name) {
                    return this.taxonomy.name.toLowerCase()
                } else {
                    return 'term'
                }
            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: function() {
                    return []
                },
            },
        },

        mounted() {
            axios.get('/api/taxonomies/' + this.field.settings.taxonomy).then((response) => {
                this.taxonomy = response.data.data
            })

            if(! this.value) {
                this.$emit('input', [])
            }

            this.values = _.cloneDeep(this.value)
        },
    }
</script>