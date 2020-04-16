<template>
    <div class="row" v-if="links.length">
        <div class="col w-full md:w-1/3 xl:w-1/4 xxl:w-1/5 h-22" v-for="link in links" :key="link.handle">
            <router-link :to="link.admin_path" class="no-underline text-black hover:text-black bg-white rounded p-px border border-gray-300 hover:border-gray-400 flex h-full overflow-hidden min-h-28" :class="!link.description ? 'items-center' : ''">
                <div class="flex flex-grow-0 flex-shrink-0 items-center justify-center w-28 mr-2 h-full border-r border-dashed border-gray-300">
                    <span class="fa-layers fa-fw fa-4x flex-shrink-0">
                        <fa-icon :icon="['fas', 'circle']" class="fa-fw text-primary-500"></fa-icon>
                        <fa-icon :icon="['fas', (link.icon || 'pencil-alt')]" class="fa-fw fa-inverse" transform="shrink-8"></fa-icon>
                    </span>
                </div>

                <div class="flex flex-col items-start p-2 h-full">
                    <div class="font-semibold text-lg text-gray-900">{{ link.name }}</div>
                    <div class="text-sm leading-normal text-gray-700">{{ link.description }}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            links: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    }
</script>