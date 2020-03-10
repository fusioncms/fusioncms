<template>
    <renderless-dropdown :id="id">
        <div class="dropdown dropdown--right" slot-scope="props" :class="{'dropdown--open': props.isOpen}" v-click-outside="props.close">
            <a href="#" class="w-5 h-5 text-gray-700 hover:text-black inline-flex items-center justify-center" @click.prevent="props.toggle()">
                <fa-icon icon="ellipsis-h" class="fa-fw"></fa-icon>
            </a>

            <div class="dropdown__menu">
                <slot></slot>
            </div>
        </div>
    </renderless-dropdown>
</template>

<script>
    export default {
        name: 'p-actions',

        props: {
            id: {
                required: true
            }
        }
    }
</script>