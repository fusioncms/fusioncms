<template>
    <div class="inbox__response-list">
        <div class="inbox__response-list__pagination">
            <a href="#" @click.prevent="firstPage" class="text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded"><fa-icon :icon="['fas', 'angle-double-left']" class="fa-fw"></fa-icon></a>
            <a href="#" @click.prevent="prevPage" class="text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded"><fa-icon :icon="['fas', 'angle-left']" class="fa-fw"></fa-icon></a>

            <p-select class="m-0 w-full px-4" name="page" filterable v-model="page" :options="pageOptions"></p-select>

            <a href="#" @click.prevent="nextPage" class="text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded"><fa-icon :icon="['fas', 'angle-right']" class="fa-fw"></fa-icon></a>
            <a href="#" @click.prevent="lastPage" class="text-gray-700 hover:text-gray-900 text-lg m-1 p-3 hover:bg-gray-100 rounded"><fa-icon :icon="['fas', 'angle-double-right']" class="fa-fw"></fa-icon></a>
        </div>

        <div class="absolute w-full pin-t p-2 text-sm flex justify-center items-center bg-gray-900 text-gray-100 rounded-b" v-if="loading">
            <fa-icon :icon="['fas', 'circle-notch']" class="fa-spin mr-3"></fa-icon> Loading responses...
        </div>

        <a href="#" @click.prevent="select(response)" class="lg:border-r-4 block hover:bg-gray-100 text-gray-700 hover:text-gray-900" v-for="response in responses" :key="response.id" :class="{'border-primary-400': isSelected(response), 'border-gray-200': ! isSelected(response)}">
            <div class="px-4 py-6 border-b border-gray-200">
                <div class="flex">

                    <div class="mr-3 flex flex-col">
                        <fa-icon :icon="['far', 'star']" fixed-width class="mb-2"></fa-icon>
                        <fa-icon :icon="['far', 'check-circle']" fixed-width></fa-icon>
                    </div>

                    <div class="w-full">
                        <div class="flex justify-between items-center mb-2">
                            <b>{{ response.identifiable_email_address }}</b>
                            <span class="block text-gray-600 text-sm">{{ $moment(response.created_at).format('L') }}</span>
                        </div>

                        <div class="text-gray-800">
                            Re: {{ response.form.name }}
                        </div>
                    </div>
                </div>
            </div>
        </a>

        <div v-if="responses.length == 0 && ! loading" class="text-center p-6 leading-relaxed text-gray-600">
            <p>
                This form's inbox is empty.<br>
                <b>Try checking back at a later time.</b>
            </p>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import { mapActions, mapGetters} from 'vuex'

    export default {
        name: 'response-list',

        computed: {
            ...mapGetters({
                totalPages: 'inbox/getTotalPages',
                responses: 'inbox/getResponses',
                response: 'inbox/getResponse',
                loading: 'inbox/getLoading',
            }),

            page: {
                set(page) {
                    this.$store.commit('inbox/setPage', page)
                },

                get() {
                    return this.$store.getters['inbox/getPage']
                }
            },

            pageOptions() {
                let options = []

                for (let page = 1; page <= this.totalPages; page++) {
                    options.push({
                        label: page.toString(),
                        value: page
                    })
                }

                return options
            }
        },

        watch: {
            page() {
                this.fetchResponses()
            },
        },

        methods: {
            ...mapActions({
                prevPage: 'inbox/prevPage',
                nextPage: 'inbox/nextPage',
                firstPage: 'inbox/firstPage',
                lastPage: 'inbox/lastPage',
                jumpPage: 'inbox/jumpPage',
            }),

            fetchResponses() {
                this.$store.dispatch('inbox/fetchResponses')
            },

            select(response) {
                this.$store.dispatch('inbox/selectResponse', response)
            },

            isSelected(response) {
                if (this.response) {
                    return this.response.id == response.id
                }

                return false
            }
        },
    }
</script>