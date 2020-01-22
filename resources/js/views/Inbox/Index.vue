<template>
    <div class="h-full max-h-full">
        <portal to="title">
            <app-title icon="inbox">Inbox</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'forms' }" class="button">Manage Forms</router-link>
        </portal>

        <div class="row h-full">
            <filter-sidebar></filter-sidebar>

            <div class="content-container" style="margin-bottom: 0 !important;">
                <div class="card h-full flex flex-1">
                    <response-list v-if="$mq == 'sm' && ! response.id"></response-list>

                    <response-view v-if="$mq == 'sm' && response.id"></response-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import store from '../../vuex'
    import { mapGetters } from 'vuex'
    import ResponseList from './ResponseList.vue'
    import ResponseView from './ResponseView.vue'
    import FilterSidebar from './FilterSidebar.vue'

    export default {
        head: {
            title() {
                return {
                    inner: 'Inbox'
                }
            }
        },

        components: {
            'response-list': ResponseList,
            'response-view': ResponseView,
            'filter-sidebar': FilterSidebar,
        },

        computed: {
            ...mapGetters({
                response: 'inbox/getResponse'
            }),
        },

        beforeRouteEnter(to, from, next) {
            store.dispatch('inbox/fetchForms').then((response) => {
                if (store.getters['inbox/getForms'].length) {
                    store.dispatch('inbox/selectForm', _.head(store.getters['inbox/getForms']))
                }

                next()
            })
        },
    }
</script>