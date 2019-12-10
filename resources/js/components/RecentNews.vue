<template>
    <div class="card">
        <div class="card__body">
            <h2>Fusion News</h2>
        </div>

        <div class="card__body">
            <a href="#" class="flex mb-3 border border-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white rounded-lg p-3 overflow-hidden" v-for="entry in feed" :key="entry.id">
                <div class="bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col">
                    <span class="block text-center font-bold text-3xl leading-none">{{ $moment(entry.date_published).format('DD') }}</span>
                    <span class="block text-center text-sm text-gray-600">{{ $moment(entry.date_published).format('MMM Y') }}</span>
                </div>

                <div>
                    <span class="block font-bold tracking-wide">Update</span>
                    <span class="block">{{ entry.title }}</span>
                </div>
            </a>
        </div>

        <!-- <table v-if="feed.length">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="entry in feed" :key="entry.id">
                    <td>{{ entry.title }}</td>
                    <td><a :href="entry.url">Read More</a></td>
                </tr>
            </tbody>
        </table> -->

        <!-- <div class="card__body">
            <div class="text-center mb-4 bg-gray-100 text-gray-800 rounded p-3">
                The Fusion news feed will be implemented at launch.
            </div>

            <div class="flex mb-6">
                <div class="bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col">
                    <span class="block text-center font-bold text-3xl leading-none">28</span>
                    <span class="block text-center text-sm text-gray-600">Dec 2019</span>
                </div>

                <div>
                    <span class="block font-bold text-gray-700 tracking-wide">Releases</span>
                    <p>FusionCMS 6.0.0 is now open to the public.</p>
                </div>
            </div>

            <div class="flex mb-6">
                <div class="bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col">
                    <span class="block text-center font-bold text-3xl leading-none">28</span>
                    <span class="block text-center text-sm text-gray-600">Nov 2019</span>
                </div>

                <div>
                    <span class="block font-bold text-gray-700 tracking-wide">Releases</span>
                    <p>FusionCMS 5.13.4 is now available.</p>
                </div>
            </div>

            <div class="flex mb-6">
                <div class="bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col">
                    <span class="block text-center font-bold text-3xl leading-none">28</span>
                    <span class="block text-center text-sm text-gray-600">Oct 2019</span>
                </div>

                <div>
                    <span class="block font-bold text-gray-700 tracking-wide">Releases</span>
                    <p>FusionCMS 5.13.3 is now available.</p>
                </div>
            </div>

            <div class="flex mb-6">
                <div class="bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col">
                    <span class="block text-center font-bold text-3xl leading-none">28</span>
                    <span class="block text-center text-sm text-gray-600">Sep 2019</span>
                </div>

                <div>
                    <span class="block font-bold text-gray-700 tracking-wide">Releases</span>
                    <p>FusionCMS 5.13.2 is now available.</p>
                </div>
            </div>

            <div class="flex">
                <div class="bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col">
                    <span class="block text-center font-bold text-3xl leading-none">28</span>
                    <span class="block text-center text-sm text-gray-600">Aug 2019</span>
                </div>

                <div>
                    <span class="block font-bold text-gray-700 tracking-wide">Releases</span>
                    <p>FusionCMS 5.13.1 is now available.</p>
                </div>
            </div>
        </div> -->
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