<template>
    <div>
        <p-treeview-node v-for="(node, index) in items" :key="index" :node="node" :on-click="onClick" v-model="computedValue">
            <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope"><slot :name="slot" v-bind="scope"/></template>
        </p-treeview-node>
    </div>
</template>

<script>
    import TreeviewNode from './TreeviewNode'

    export default {
        name: 'p-treeview',

        components: {
            'p-treeview-node': TreeviewNode
        },

        data() {
            return {
                model: this.value,
            }
        },

        props: {
            items: {
                type: Array,
                required: true,
            },

            value: {
                type: Object,
                required: false,
            }
        },

        computed: {
            computedValue: {
                get() {
                    return this.model
                },

                set(value) {
                    this.model = value
                    this.$emit('input', value)
                }
            }
        },

        watch: {
            value(value) {
                this.model = value
            },
        },

        methods: {
            onClick(node) {
                this.$emit('click', node)
                this.computedValue = node
            }
        },
    }
</script>
