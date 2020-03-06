<template>
    <div class="datatable card">
        <p-loader v-if="loading"></p-loader>

        <div class="card__body">
            <div class="flex items-center justify-between">
                <div class="text-sm text-gray-600">
                    <div v-if="! noPagination && this.pagination.totalPages > 1 && records.length">
                        On page <b>{{ this.pagination.currentPage }}</b> of <b>{{ this.pagination.totalPages }}</b>
                    </div>
                </div>

                <div class="w-full md:max-w-80">
                    <div class="toolbar" v-if="! noSearch">
                        <div class="toolbar__group toolbar__group--grow">
                            <div class="field__control">
                                <input type="text" class="field__input" name="search" v-model="search" placeholder="I'm looking for..." aria-label="Search">
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
            <table class="table">
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
                        <th>&nbsp;</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(record, index) in records" :key="record[primaryKey] || index">
                        <td v-for="column in displayable" :key="column">
                            <slot :name="column" :record="record">
                                {{ record[column] }}
                            </slot>
                        </td>
                        <td class="actions" v-if="!noActions">
                            <slot name="actions" :record="record"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="card__body" v-if="! noPagination && this.pagination.totalPages > 1">
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
                filterable: [],
                records: [],
                search: '',

                pagination: {
                    totalRecords: 0,
                    currentPage: 1,
                    totalPages: 0,
                    perPage: this.perPage,
                },

                filter: {
                    column: this.sortBy,
                    operator: 'equals',
                    value: '',
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

            filters() {
                let filters = []

                _.forEach(this.filterable, (filter) => {
                    filters.push({
                        'label': this.column_names[filter],
                        'value': filter,
                    })
                })

                return filters
            }
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            title: {
                required: false,
                type: String,
                default: '',
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

            limits: {
                required: false,
                type: Array,
                default: function() {
                    return [
                    {
                        label: '1',
                        value: 1,
                    },
                    {
                        label: '5',
                        value: 5,
                    },
                    {
                        label: '10',
                        value: 10,
                    },
                    {
                        label: '25',
                        value: 25,
                    },
                    {
                        label: '50',
                        value: 50,
                    },
                    {
                        label: '100',
                        value: 100,
                    },
                    {
                        label: '500',
                        value: 500,
                    },
                    {
                        label: '1000',
                        value: 1000,
                    },
                ]}
            },

            perPage: {
                required: false,
                type: Number,
                default: 10,
            },

            noActions: {
                required: false,
                type: Boolean,
                default: false,
            },

            noSearch: {
                required: false,
                type: Boolean,
                default: false,
            },

            noFilters: {
                required: false,
                type: Boolean,
                default: false,
            },

            noPagination: {
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
                    this.filterable = response.data.filterable
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
                    limit: this.pagination.perPage,
                    page: this.pagination.currentPage,
                    orderBy: this.sort.key,
                    orderDirection: this.sort.order,
                    column: this.filter.column,
                    operator: this.filter.operator,
                    value: this.filter.value,
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

            changeLimit() {
                this.pagination.currentPage = 1

                this.getRecords()
            },

            destroy(id) {
                axios.delete(`${this.endpoint}/${id}`).then(() => {
                    this.getRecords()
                })
            },

            listenForEvents() {
                this.$proton.$on('refresh-datatable-' + this.name, (data) => {
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
