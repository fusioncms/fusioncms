<template>
    <div class="row flex-1 flex-wrap" v-if="quicklinks">
        <div class="col mb-6 w-full md:w-1/2 xl:w-1/3 xxl:w-1/4 xxxl:w-1/5" v-for="link in quicklinks" :key="link.handle">
            <router-link :to="link.admin_path" class="no-underline text-black hover:text-black bg-white rounded shadow hover:shadow-md p-3 flex h-full items-center">
                <span class="fa-layers fa-fw fa-3x mr-2 flex-no-shrink">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-primary-500"></fa-icon>
                    <fa-icon :icon="['far', (link.icon || 'pencil')]" class="fa-fw fa-inverse" transform="shrink-8"></fa-icon>
                </span>

                <div class="flex flex-col">
                    <span class="font-semibold text-lg">{{ link.name }}</span>
                    <span class="text-sm">{{ link.description }}</span>
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