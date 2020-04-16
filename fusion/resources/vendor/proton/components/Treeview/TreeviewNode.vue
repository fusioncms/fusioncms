<template>
    <ul class="treeview">
        <li class="flex-row">
            <div class="treeview--node" :class="{ 'treeview--node__folder': isFolder, 'treeview--node__selected': selected }">
                <a
                    class="treeview--toggle"
                    href="#"
                    @click.prevent="toggle"
                    v-if="isFolder">

                    <div class="treeview--icon" v-if="open">
                        <svg class="fill-current" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                    </div>

                    <div class="treeview--icon" v-else>
                        <svg class="fill-current" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                    </div>
                </a>

                <div v-else style="width: 24px; height: 16px;" class="pr-2"></div>

                <slot name="prepend" :node="node" :open="open"></slot>

                <span class="treeview--label" @click="onClick(node)">
                    <slot name="label" :node="node" :open="open">
                        {{ node.name }}
                    </slot>
                </span>

                <slot name="append" :node="node" :open="open"></slot>
            </div>

            <ul v-show="open" v-if="isFolder" class="treeview--children">
                <p-treeview-node
                    v-for="(child, index) in node.children"
                    :key="index"
                    :node="child"
                    :on-click="onClick"
                    v-model="value">
                    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope"><slot :name="slot" v-bind="scope"/></template>
                </p-treeview-node>
            </ul>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'p-treeview-node',

        props: {
            node: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
            },

            onClick: {
                required: true,
                type: Function
            },
        },

        data() {
            return {
                open: false,
            }
        },

        computed: {
            isFolder() {
                return this.node.children && this.node.children.length
            },

            selected() {
                return this.value === this.node
            }
        },

        methods: {
            toggle() {
                if (this.isFolder) {
                    this.open = ! this.open
                }
            },
        },
    }
</script>
