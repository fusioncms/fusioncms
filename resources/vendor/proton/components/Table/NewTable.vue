<template>
    <renderless-table :data="data" :columns="columns">
        <div>
            <div class="p-6">
                <div class="toolbar">
                    <div class="toolbar__group toolbar__group--grow">
                        <div class="field__control">
                            <input type="text" class="field__input" name="search">
                        </div>
                    </div>

                    <div class="toolbar__group">
                        <button class="button button--icon button--primary"><fa-icon icon="search"></fa-icon></button>
                    </div>
                </div>
            </div>

            <table class="table border-b border-gray-300">
                <thead>
                    <tr>
                        <th v-for="column in columns" :key="column">
                            {{ column }}
                            <fa-icon icon="sort" class="fa-fw"></fa-icon>
                        </th>

                        <th v-if="hasActionsSlot">
                            &nbsp;
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(record, index) in data" :key="index">
                        <td v-for="column in columns" :key="index + column">
                            {{ record[column] }}
                        </td>

                        <td v-if="hasActionsSlot" class="actions">
                            <slot name="actions"></slot>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="p-6 flex justify-between items-center">
                <div class="flex items-center">
                    <p class="text-sm text-gray-700">
                        Showing
                        <span class="font-bold">1</span>
                        to
                        <span class="font-bold">10</span>
                        of
                        <span class="font-bold">97</span>
                        results
                    </p>
                </div>

                <div class="buttons">
                    <div class="buttons__group">
                        <button class="button button--icon"><fa-icon icon="chevron-left" class="icon"></fa-icon></button>
                        <button class="button button--icon"><fa-icon icon="chevron-right" class="icon"></fa-icon></button>
                    </div>
                </div>
            </div>
        </div>
    </renderless-table>
</template>

<script>
    export default {
        name: 'p-table',

        props: {
            data: {
                required: false,
                default: () => {
                    return []
                }
            },

            columns: {
                required: false,
                default: () => {
                    return []
                }
            },
        },

        computed: {
            hasActionsSlot() {
                return !! this.$slots.actions
            }
        },
    }
</script>
