<template>
    <div>
        <p-checkbox-group :label="field.name" :help="field.help">
            <p-checkbox
                v-for="term in taxonomy.terms"
                :key="term.id"
                :name="field.handle"
                :id="term.id"
                :native-value="term.id"
                @input="$emit('input', $event)">
                    {{ term.name }}
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
                default: '',
            },
        },

        created() {
            axios.get('/api/taxonomies/' + this.field.settings.taxonomy).then((response) => {
                this.taxonomy = response.data.data
            })
        }
    }
</script>