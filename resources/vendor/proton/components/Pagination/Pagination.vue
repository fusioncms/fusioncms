<template>
    <div class="flex items-center justify-between">
        <div class="buttons">
            <div class="buttons__group">
                <button class="button button--icon" @click="onClickPreviousPage"><fa-icon icon="chevron-left" class="icon"></fa-icon></button>
                <button class="button button--icon" @click="onClickNextPage"><fa-icon icon="chevron-right" class="icon"></fa-icon></button>
            </div>
        </div>

        <div class="buttons">
            <div class="buttons__group">
                <button class="button button--icon" :class="{ 'button--primary': isPageActive(page.name) }" v-for="page in pages" :key="page.name" @click="onClickPage(page.name)">{{ page.name }}</button>
            </div>
        </div>
    </div>

    <!-- <ul class="pagination">
        <li class="pagination--item">
            <button
                type="button"
                class="button"
                @click="onClickFirstPage"
                :disabled="isOnFirstPage"
            >
                First
            </button>
        </li>

        <li class="pagination--item">
            <button
                type="button"
                class="button"
                @click="onClickPreviousPage"
                :disabled="isOnFirstPage"
            >
                Previous
            </button>
        </li>

        <li v-for="page in pages" :key="page.name" class="pagination--item">
            <button
                type="button"
                class="button"
                @click="onClickPage(page.name)"
                :disabled="page.isDisabled"
                :class="{ active: isPageActive(page.name) }"
            >
                {{ page.name }}
            </button>
        </li>

        <li class="pagination--item">
            <button
                type="button"
                class="button"
                @click="onClickNextPage"
                :disabled="isOnLastPage"
            >
                Next
            </button>
        </li>

        <li class="pagination--item">
            <button
                type="button"
                class="button"
                @click="onClickLastPage"
                :disabled="isOnLastPage"
            >
                Last
            </button>
        </li>
    </ul> -->
</template>

<script>
    export default {
        name: 'p-pagination',

        props: {
            maxVisiblePages: {
                required: false,
                type: Number,
                default: 3,
            },

            total: {
                required: true,
                type: Number,
            },

            value: {
                required: true,
                type: Number,
            },
        },

        computed: {
            current: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', value)
                }
            },

            startPage() {
                let startPage = 1

                if (this.current === 1) {
                    return startPage
                }

                if (this.current === this.total) {
                    startPage = this.total - this.maxVisiblePages + 1
                } else {
                    startPage = this.current - 1
                }

                if (startPage === 0) {
                    startPage = 1
                }

                return startPage
            },

            endPage() {
                return Math.min(this.startPage + this.maxVisiblePages - 1, this.total)
            },

            pages() {
                const range = []

                for (let i = this.startPage; i <= this.endPage; i += 1) {
                    range.push({
                        name: i,
                        isDisabled: i === this.current
                    })
                }

                return range
            },

            isOnFirstPage() {
                return this.current === 1
            },

            isOnLastPage() {
                return this.current === this.total
            },
        },

        methods: {
            onClickFirstPage() {
                this.$emit('input', 1)
                this.$emit('first')
            },

            onClickPreviousPage() {
                let previousPage = this.current - 1

                if (previousPage >= 1) {
                    this.$emit('input', previousPage)
                    this.$emit('next')
                }
            },

            onClickPage(page) {
                if (this.current != page) {
                    this.$emit('input', page)
                }
            },

            onClickNextPage() {
                let nextPage = this.current + 1

                if (nextPage <= this.endPage) {
                    this.$emit('input', nextPage)
                    this.$emit('next')
                }
            },

            onClickLastPage() {
                this.$emit('input', this.total)
                this.$emit('last')
            },

            isPageActive(page) {
                return this.current === page
            },
        }
    }
</script>
