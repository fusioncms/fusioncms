<template>
    <div>
        <portal to="title">
            <app-title icon="fill-drip">Themes</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-upload
                    name="file-upload"
                    ref="upload"
                    accept="zip"
                    :multiple="false"
                    @input="upload"
                ></p-upload>
            </div>
        </div>

        <div class="row">
            <div class="col mb-6 md:w-1/2 xl:w-1/4" v-for="theme in themes" :key="theme.name">
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

        <portal to="actions">
            <router-link :to="{ name: 'themes.settings' }" class="button mr-3">Go Back</router-link>
        </portal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            themes: [],
        }
    },

    methods: {
        setAsActive(themeSlug) {
            axios
                .patch(`/api/theme/${themeSlug}`)
                .then(() => {
                    this.themes.forEach((theme) => {
                        theme.active = theme.slug === themeSlug
                    })
                })
        },

        refresh() {
            axios.all([
                axios.get('/api/themes'),
            ]).then(axios.spread(function (themes) {
                this.themes = themes.data.data
            }.bind(this)))
        },

        upload(files) {
            if (typeof files == 'undefined') {
                return;
            }

            const formData = new FormData()

            formData.append('_method', 'POST')
            formData.append('file-upload', files)

            axios.post('/api/themes', formData).then(() => {
                toast('Theme successfully uploaded!', 'success')

                this.$refs.upload.remove()
                this.refresh()
            })
        },
    },

    beforeRouteEnter(to, from, next) {
        next(function(vm) {
            vm.refresh()
        })
    },
}
</script>
