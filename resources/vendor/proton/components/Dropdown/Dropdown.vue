<template>
    <renderless-dropdown class="mr-3 mb-3">
        <div slot-scope="props">
            <button class="button" @click="props.toggle()" data-reference><slot></slot> <fa-icon icon="angle-down" class="fa-fw ml-3"></fa-icon></button>

            <div class="dropdown__menu" v-show="props.isOpen" data-popper>
                <slot name="menu"></slot>
            </div>
        </div>
    </renderless-dropdown>
</template>

<script>
    export default {
        name: 'p-dropdown',
    }
</script>
