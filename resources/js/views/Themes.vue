<template>
    <div>
        <portal to="title">
            <app-title icon="palette">Themes</app-title>
        </portal>

        <div class="row">
            <div class="col w-full lg:w-1/2 xxl:w-1/3" v-for="theme in themes" :key="theme.name">
                <p-card no-body>
                    <img class="w-full rounded-t shadow" :src="theme.preview" :alt="theme.name">

                    <div class="card__body">
                        <div class="font-bold text-xl mb-2">{{ theme.name }}</div>
                        <p class="text-gray-800 text-base">{{ theme.description }}</p>
                        
                        <div class="w-full border-t-2 border-gray-200 pt-3">
                            <p-button class="w-full" v-if="! theme.active" @click="setAsActive(theme.slug)">Set as active</p-button>
                            <p class="text-center" v-else>Currently Active</p>
                        </div>
                    </div>
                </p-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            themes: [],
        }
    },

    mounted() {
        axios.get('/api/themes').then(({data}) => {
            this.themes = data.data
        })
    },

    methods: {
        setAsActive(themeSlug) {
            axios
                .put(`/api/themes/set-active/${themeSlug}`)
                .then(() => {
                    this.themes.forEach((theme) => {
                        theme.active = theme.slug === themeSlug
                    })
                })
        },
    },
}
</script>
