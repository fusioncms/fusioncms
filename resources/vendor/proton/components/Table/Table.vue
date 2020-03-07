<template>
    <div class="datatable card">
        <p-loader v-if="loading"></p-loader>

        <div class="card__body">
            <div class="flex items-center justify-between">
                <div class="text-sm text-gray-600">
                    <div v-if="pagination.totalPages > 1 && records.length">
                        On page <b>{{ pagination.currentPage }}</b> of <b>{{ pagination.totalPages }}</b>
                    </div>
                </div>

                <div class="w-full md:max-w-80">
                    <div class="toolbar" v-if="! noSearch">
                        <div class="toolbar__group toolbar__group--grow">
                            <div class="field__control">
                                <input type="text" class="field__input" name="search" v-model="search" placeholder="I'm looking for..." aria-label="Search" :aria-controls="id">
                            </div>
                        </div>

                        <div class="toolbar__group">
                            <button class="button button--primary button--icon" @click="getRecords">
                                <fa-icon :icon="['fas', 'search']" class="icon"></fa-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="records.length">
            <table :id="id" class="table" aria-live="polite">
                <thead>
                    <tr>
                        <th v-for="(column, index) in displayable" :key="column[primaryKey] || index" :class="{'sortable': isSortable(column)}" @click.prevent="isSortable(column) && sortRecordsBy(column)">
                            <span :class="{'text-gray-500': (sort.key !== column), 'text-gray-800': (sort.key === column)}">
                                <span v-if="isSortable(column)">{{ column_names[column] || column }}</span>
                                <span v-else>{{ column_names[column] || column }}</span>

                                <div class="inline" v-if="isSortable(column)">
                                    <fa-icon icon="sort" class="fa-fw" v-if="sort.key !== column"></fa-icon>
                                    <fa-icon icon="sort-up" class="fa-fw" v-if="sort.order === 'asc' && sort.key === column"></fa-icon>
                                    <fa-icon icon="sort-down" class="fa-fw" v-if="sort.order === 'desc' && sort.key === column"></fa-icon>
                                </div>
                            </span>
                        </th>

                        <th v-if="hasActions">&nbsp;</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(record, index) in records" :key="record[primaryKey] || index">
                        <td v-for="column in displayable" :key="column">
                            <slot :name="column" :record="record">
                                {{ record[column] }}
                            </slot>
                        </td>

                        <td class="actions" v-if="hasActions">
                            <slot name="actions" :record="record"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="card__body" v-if="this.pagination.totalPages > 1">
                <p-pagination
                    @input="changePage($event)"
                    :total="this.pagination.totalPages"
                    :value="this.pagination.currentPage"
                ></p-pagination>
            </div>
        </div>

        <div v-else>
            <slot name="empty-state">
                <div class="card__body text-center">
                    <h3>No results found.</h3>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import axios from 'axios'
    import queryString from 'query-string'

    export default {
        name: 'p-table',

        data() {
            return {
                loading: true,
                displayable: [],
                column_names: [],
                sortable: [],
                records: [],
                search: '',

                pagination: {
                    totalRecords: 0,
                    currentPage: 1,
                    totalPages: 0,
                    perPage: this.perPage,
                },

                sort: {
                    key: this.sortBy,
                    order: this.sortIn,
                },
            }
        },

        computed: {
            columns() {
                let columns = []

                _.forEach(this.displayable, (option) => {
                    columns.push({
                        'label': this.column_names[option],
                        'value': option,
                    })
                })

                return columns
            },

            hasActions() {
                return !!this.$slots.actions || !!this.$scopedSlots.actions
            },
        },

        props: {
            id: {
                required: true,
                type: String,
            },

            noRecords: {
                required: false,
                type: String,
                default: 'No records to display',
            },

            endpoint: {
                required: true,
                type: String,
            },

            sortBy: {
                required: false,
                type: String,
                default: 'id',
            },

            sortIn: {
                required: false,
                type: String,
                default: 'asc',
            },

            noSearch: {
                required: false,
                type: Boolean,
                default: false,
            },

            primaryKey: {
                required: false,
                type: String,
            },
        },

        watch: {
            endpoint() {
                this.getRecords()
            },

            search: _.debounce(function(value) {
                this.pagination.currentPage = 1

                this.getRecords()
            }, 150)
        },

        methods: {
            getRecords() {
                this.loading = true

                return axios.get(`${this.endpoint}?${this.getQueryParameters()}`).then((response) => {
                    this.records = response.data.records.data
                    this.displayable = response.data.displayable
                    this.sortable = response.data.sortable
                    this.column_names = response.data.column_names
                    this.pagination.totalRecords = response.data.records.total
                    this.pagination.totalPages = response.data.records.last_page

                    this.loading = false
                })
            },

            isSortable(column) {
                return _.includes(this.sortable, column)
            },

            getQueryParameters() {
                return queryString.stringify({
                    page: this.pagination.currentPage,
                    orderBy: this.sort.key,
                    orderDirection: this.sort.order,
                    search: this.search
                })
            },

            sortRecordsBy(column) {
                this.sort.key = column
                this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc'

                this.getRecords()
            },

            changePage(page) {
                this.pagination.currentPage = page

                this.getRecords()
            },

            destroy(id) {
                axios.delete(`${this.endpoint}/${id}`).then(() => {
                    this.getRecords()
                })
            },

            listenForEvents() {
                this.$proton.$on('refresh-datatable-' + this.id, (data) => {
                    this.getRecords()
                })
            }
        },

        created() {
            this.getRecords()

            this.listenForEvents()
        }
    }
</script>
