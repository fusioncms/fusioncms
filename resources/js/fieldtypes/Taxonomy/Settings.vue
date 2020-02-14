<template>
    <div>
        <p-select
            name="settings.model"
            label="Taxonomy"
            help="The taxonomy from which to show terms."
            autocomplete="off"
            v-model="value.model"
            :options="taxonomies"
        >
        </p-select>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'taxonomy-fieldtype-settings',

        mixins: [fieldtype],

        data() {
            return {
                taxonomies: [
                    {
                        label: 'No',
                        value: 0,
                    },
                    {
                        label: 'Yes',
                        value: 1,
                    }
                ],
            }
        },

        methods: {
            fetchTaxonomies() {
                axios.get('/api/taxonomies').then((response) => {
                    this.taxonomies = _.map(response.data.data, function(taxonomy) {
                        return {
                            label: taxonomy.name,
                            value: taxonomy.id
                        }
                    })
                })
            }
        },

        mounted() {
            this.fetchTaxonomies()
        }
    }
</script>