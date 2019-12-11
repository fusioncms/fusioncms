<template>
    <div class="row flex-1 flex-wrap" v-if="links.length">
        <div class="col mb-6 w-full md:w-1/2 xl:w-1/3 xxl:w-1/4 xxxl:w-1/5" v-for="link in links" :key="link.handle">
            <router-link :to="link.admin_path" class="no-underline text-black hover:text-black bg-white rounded shadow hover:shadow-md flex h-full overflow-hidden min-h-28" :class="!link.description ? 'items-center' : ''">
                <div class="flex flex-grow-0 flex-shrink-0 items-center justify-center w-28 mr-3 h-full border-r border-dashed border-gray-200">
                    <span class="fa-layers fa-fw fa-4x flex-shrink-0">
                        <fa-icon :icon="['fas', 'circle']" class="fa-fw text-primary-500"></fa-icon>
                        <fa-icon :icon="['far', (link.icon || 'pencil')]" class="fa-fw fa-inverse" transform="shrink-8"></fa-icon>
                    </span>
                </div>                

                <div class="flex flex-col items-start p-3 h-full">
                    <div class="font-semibold text-lg">{{ link.name }}</div>
                    <div class="text-sm leading-tight">{{ link.description }}</div>
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