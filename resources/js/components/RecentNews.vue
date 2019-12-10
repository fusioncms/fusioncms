<template>
    <div class="card">
        <div class="card__body">
            <h2>Fusion News</h2>
        </div>

        <div class="card__body -mb-3">
            <a :href="entry.url" target="_blank" class="mb-3 flex text-gray-700 hover:text-black border border-gray-200 text-gray-700 rounded overflow-hidden" v-for="entry in feed" :key="entry.id">
                <div class="w-24 bg-gray-100 text-gray-700 p-3 flex-shrink-0 justify-center flex flex-col">
                    <span class="block text-center font-bold text-3xl leading-none">{{ $moment(entry.date_published).format('DD') }}</span>
                    <span class="block text-center text-sm text-gray-600">{{ $moment(entry.date_published).format('MMM Y') }}</span>
                </div>

                <div class="w-full p-3">
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