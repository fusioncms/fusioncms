<template>
    <div>
        <div class="toolbar mb-3">
            <div class="toolbar__group toolbar__group--grow" v-if="! noSearch">
                <div class="field__group w-full">
                    <div class="field__group--prepend">
                        <fa-icon icon="search" class="fa-fw text-gray-400"></fa-icon>
                    </div>

                    <input type="text" class="field__input" name="search" v-model="search" placeholder="Search" aria-label="Search" :aria-controls="id" autocomplete="off">
                </div>
            </div>

            <div class="toolbar__group">
                <p-dropdown id="sorting-options" right>
                    <fa-icon icon="sort-amount-down" class="fa-fw mr-2"></fa-icon> Sort

                    <template v-slot:menu>
                        <p-dropdown-link v-for="(column, index) in sortable" :key="column + '-sort' || index + '-sort'" @click.prevent="sortRecordsBy(column, sort.order)">
                            <div class="flex justify-between w-full items-center">
                                <span>{{ column_names[column] || column }}</span>
                                <fa-icon class="icon" icon="check" v-if="sort.key === column"></fa-icon>
                            </div>
                        </p-dropdown-link>

                        <p-dropdown-divider />

                        <p-dropdown-link @click.prevent="sortRecordsBy(sort.key, 'asc')">
                            <div class="flex justify-between w-full items-center">
                                <span>Ascending</span>
                                <fa-icon class="icon" icon="check" v-if="sort.order === 'asc'"></fa-icon>
                            </div>
                        </p-dropdown-link>

                        <p-dropdown-link @click.prevent="sortRecordsBy(sort.key, 'desc')">
                            <div class="flex justify-between w-full items-center">
                                <span>Descending</span>
                                <fa-icon class="icon" icon="check" v-if="sort.order === 'desc'"></fa-icon>
                            </div>
                        </p-dropdown-link>
                    </template>
                </p-dropdown>
            </div>
        </div>

        <div class="table__wrapper" v-if="records.length">
            <table :id="id" class="table" aria-live="polite">
                <thead>
                    <tr>
                        <th
                            v-for="(column, index) in displayable"
                            :key="column[primaryKey] || index"
                            :class="{
                                'sortable': isSortable(column),
                            }"
                            @click.prevent="isSortable(column) && sortRecordsBy(column)"
                        >
                            <span :class="{'text-gray-500': (sort.key !== column), 'text-gray-800': (sort.key === column)}">
                                <span>{{ column_names[column] || column }}</span>

                                <div class="inline" v-if="isSortable(column)">
                                    <fa-icon icon="sort" class="fa-fw" v-if="sort.key !== column"></fa-icon>
                                    <fa-icon icon="sort-up" class="fa-fw" v-if="sort.order === 'asc' && sort.key === column"></fa-icon>
                                    <fa-icon icon="sort-down" class="fa-fw" v-if="sort.order === 'desc' && sort.key === column"></fa-icon>
                                </div>
                            </span>
                        </th>

                        <th v-if="hasActions" class="w-20">&nbsp;</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(record, index) in records" :key="record[primaryKey] || index">
                        <td
                            v-for="column in displayable"
                            :key="column"
                        >
                            <span class="column__label">{{ column_names[column] || column }}</span>
                            <span>
                                <slot :name="column" :record="record">
                                    {{ record[column] }}
                                </slot>
                            </span>
                        </td>

                        <td class="actions" v-if="hasActions">
                            <slot name="actions" :record="record"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-6" v-if="this.pagination.totalPages > 1">
            <p-pagination
                @input="changePage($event)"
                :total="this.pagination.totalPages"
                :value="this.pagination.currentPage"
            ></p-pagination>
        </div>

        <div class="card" v-if="! records.length">
            <slot name="empty-state">
                <div class="card__body text-center">
                    <h3 class="m-0">No results found.</h3>
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
                return _.map(this.displayable, (option) => {
                    columns.push({
                        'label': this.column_names[option],
                        'value': option,
                    })
                })
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
            }, 300)
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
                let params = {
                    sort:    (this.sort.order === 'desc' ? '-' : '') + this.sort.key,
                    page:    this.pagination.currentPage,
                    perPage: this.pagination.perPage,
                }

                if (this.search !== '') {
                    params['filter[search]'] = this.search
                }

                return queryString.stringify(params)
            },

            sortRecordsBy(column, order = false) {
                this.sort.key = column

                if (! order) {
                    this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc'
                } else {
                    this.sort.order = order
                }

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
