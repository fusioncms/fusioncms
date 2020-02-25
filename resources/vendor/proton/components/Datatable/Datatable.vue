<template>
    <div class="datatable card">
        <p-loader v-if="loading"></p-loader>

        <div class="card__body">
            <h2 v-if="title">{{ title }}</h2>
            
            <form action="#" @submit.prevent="getRecords" v-if="! noFilters">
                <label for="column" class="form__label">Filter</label>

                <div class="row mb-0">
                    <div class="col sm:w-1/4">
                        <div class="relative">
                            <p-select name="column" v-model="filter.column" :options="filters">
                            </p-select>
                        </div>
                    </div>

                    <div class="col sm:w-1/4">
                        <div class="relative">
                            <p-select name="operator" v-model="filter.operator" :options="[
                                {
                                    'label': 'equals',
                                    'value': 'equals',
                                },
                                {
                                    'label': 'contains',
                                    'value': 'contains',
                                },
                                {
                                    'label': 'starts with',
                                    'value': 'starts_with',
                                },
                                {
                                    'label': 'ends with',
                                    'value': 'ends_with',
                                },
                                {
                                    'label': 'greater than',
                                    'value': 'greater_than',
                                },
                                {
                                    'label': 'lesser than',
                                    'value': 'lesser_than',
                                },
                            ]">
                            </p-select>
                        </div>
                    </div>

                    <div class="col sm:w-1/2">
                        <div class="input__group">
                            <input type="text" class="form__control" name="value" v-model="filter.value">

                            <div class="input__group--append">
                                <p-button type="submit">Submit</p-button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div class="row" style="margin-bottom: 0;" v-if="! noSearch">
                <div class="col sm:w-5/6">
                    <p-input
                        name="search"
                        label="Search"
                        v-model="search"
                    ></p-input>
                </div>

                <div class="col sm:w-1/6" v-if="! noPagination">
                    <label for="limit" class="form__label">Records Per Page</label>

                    <div class="relative">
                        <p-select name="limit" v-model="pagination.perPage" @change="changeLimit" :options="limits">
                        </p-select>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="records.length">
            <table>
                <thead>
                    <tr>
                        <th v-for="(column, index) in displayable" :key="column[primaryKey] || index">
                            <span class="sortable" v-if="isSortable(column)" @click="sortRecordsBy(column)">{{ column_names[column] || column }}</span>
                            <span v-else>{{ column_names[column] || column }}</span>

                            <div
                                class="arrow"
                                :class="{
                                    'arrow--asc': (sort.order === 'asc'),
                                    'arrow--desc': (sort.order === 'desc'),
                                }"
                                v-if="sort.key === column && isSortable(column)">
                            </div>
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
                        <td class="text-right" v-if="!noActions">
                            <slot name="actions" :record="record">
                                <a href="#" class="text-danger hover:text-danger-dark" @click.prevent="destroy(record.id)">Delete</a>
                            </slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        
            <div class="card__body text-right" v-if="! noPagination">
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
        name: 'p-datatable',

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
