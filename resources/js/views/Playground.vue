<template>
    <div>
        <portal to="title">
            <app-title icon="robot">Playground</app-title>
        </portal>

        <div class="row">
            <div class="col w-full">
                <p-card>
                    <div class="flex">
                        <div class="mr-6 leading-none flex flex-col items-center justify-center w-20 border rounded p-2">
                            <a href="#" @click.prevent class="border bg-gray-200 text-gray-500 hover:text-gray-900 border-gray-200">
                                <fa-icon :icon="['fas', 'caret-up']" class="fa-fw"></fa-icon>
                            </a>

                            <div class="flex">
                                <a href="#" @click.prevent class="border bg-gray-200 text-gray-500 hover:text-gray-900 border-gray-200">
                                    <fa-icon :icon="['fas', 'caret-left']" class="fa-fw"></fa-icon>
                                </a>

                                <div class="w-5 bg-gray-200"></div>

                                <a href="#" @click.prevent class="border bg-gray-200 text-gray-500 hover:text-gray-900 border-gray-200">
                                    <fa-icon :icon="['fas', 'caret-right']" class="fa-fw"></fa-icon>
                                </a>
                            </div>

                            <a href="#" @click.prevent class="border bg-gray-200 text-gray-500 hover:text-gray-900 border-gray-200">
                                <fa-icon :icon="['fas', 'caret-down']" class="fa-fw"></fa-icon>
                            </a>
                        </div>


                    </div>

                    <div>

                        <draggable >
                        </draggable>

                    </div>
                </p-card>
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        head: {
            title() {
                return {
                    inner: 'Playground'
                }
            }
        },

        components: {
            draggable,
        },
    }
</script>