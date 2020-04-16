<template>
    <div class="card">
        <div class="card__header">
            <h3 class="card__title">Recent News</h3>
        </div>

        <div class="mt-6">
            <a :href="entry.url" target="_blank" class="mb-3 md:mx-6 md:my-3 flex text-gray-700 hover:text-black hover:bg-gray-100 border border-gray-300 text-gray-700 rounded overflow-hidden p-px" v-for="entry in feed" :key="entry.id">
                <div class="w-24 bg-white text-gray-800 flex-shrink-0 flex flex-col border-r border-gray-200">
                    <span class="block text-center text-sm text-white h-6 bg-danger-500 flex items-center justify-center rounded-t">{{ $moment(entry.date_published).format('MMM Y') }}</span>

                    <span class="flex-1 flex items-center justify-center font-bold text-3xl leading-none">{{ $moment(entry.date_published).format('DD') }}</span>
                </div>

                <div class="w-full p-3 bg-white">
                    <span class="block font-bold text-gray-700 tracking-wide text-sm">Update</span>
                    <span class="block">{{ entry.title }}</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            feed: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    }
</script>