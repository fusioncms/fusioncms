<script>
    import { Sortable } from '@shopify/draggable'

    export default {
        name: 'p-sortable-list',

        props: {
            value: {
                required: true,
            },

            itemClass: {
                type: String,
                default: 'sortable-list-item',
            },

            handleClass: {
                type: String,
                default: 'sortable-list-handle',
            },
        },

        provide() {
            return {
                sortableListItemClass: this.itemClass,
                sortableListHandleClass: this.handleClass,
            }
        },

        methods: {
            move(items, oldIndex, newIndex) {
                const itemsRemovedArray = [
                    ...items.slice(0, oldIndex),
                    ...items.slice(oldIndex + 1, items.length)
                ]

                return [
                    ...itemsRemovedArray.slice(0, newIndex),
                    items[oldIndex],
                    ...itemsRemovedArray.slice(newIndex, itemsRemovedArray.length)
                ]
            }
        },

        mounted() {
            new Sortable(this.$el, {
                draggable: `.${this.itemClass}`,
                handle: `.${this.handleClass}`,
                mirror: {
                    constrainDimensions: true,
                },
            }).on('sortable:stop', ({ oldIndex, newIndex }) => {
                this.$emit('input', this.move(this.value, oldIndex, newIndex))
            })
        },

        render() {
            return this.$scopedSlots.default({
                items: this.value
            })
        }
    }
</script>
