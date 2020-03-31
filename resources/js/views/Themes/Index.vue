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
                    @input="verifyUpload"
                ></p-upload>
            </div>
        </div>

        <div class="row">
            <div class="col mb-6 md:w-1/2 xl:w-1/4" v-for="theme in themes" :key="theme.name">
                <div class="card">
                    <img class="w-full rounded-t shadow" :src="theme.preview" :alt="theme.name">

                    <div class="card__body">
                        <div class="font-bold text-xl mb-2">{{ theme.name }}</div>
                        <p class="text-gray-800 text-base">{{ theme.description }}</p>

                        <div class="w-full border-t-2 border-gray-200 pt-3">
                            <p-button class="w-full" v-if="! theme.active" @click="setAsActive(theme.slug)">Set as active</p-button>
                            <p class="text-center" v-else>Currently Active</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <portal to="actions">
            <router-link :to="{ name: 'themes.settings' }" class="button">Go Back</router-link>
        </portal>

        <p-modal name="confirm" title="Confirm override" key="confirm_modal" v-model="confirmModal">
            <p>Are you sure you want to override this theme? The existing theme will be discarded.</p>
            <template slot="footer">
                <p-button @click="submitUpload" type="button" class="button button--primary">Yes, please!</p-button>
                <p-button @click="cancelUpload" type="button" class="mr-3">Leave and Discard Changes</p-button>
            </template>
        </p-modal>
    </div>
</template>

<script>
export default {
    head: {
        title() {
            return {
                inner: 'Themes'
            }
        }
    },

    data() {
        return {
            themes: [],
            confirmModal: false,
            uploadForm: null
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
                this.themes       = themes.data.data
                this.uploadForm   = null
                this.confirmModal = false
            }.bind(this)))
        },

        submitUpload() {
            axios.post('/api/themes', this.uploadForm).then((response) => {
                toast('Theme successfully uploaded!', 'success')

                this.confirmModal = false
                this.$refs.upload.remove()
                this.refresh()
            })
        },

        confirmUpload() {
            this.confirmModal = true
        },

        cancelUpload() {
            this.confirmModal = false
            this.$refs.upload.remove()
        },

        verifyUpload(files) {
            if (typeof files == 'undefined') {
                return;
            }

            // Create upload form..
            this.uploadForm = new FormData()
            this.uploadForm.append('_method', 'POST')
            this.uploadForm.append('file-upload', files)

            axios.post('/api/themes/verify', this.uploadForm).then((response) => {
                this.submitUpload()
            }).catch((error) => {
                if (error.response.data.errors['file-upload'][0] == 'A Theme with matching name already exists.') {
                    this.confirmUpload()
                } else {
                    toast(error.response.data.message, 'failed')

                    this.$refs.upload.remove()
                    this.$refs.upload.setError(error.response.data.errors['file-upload'][0])
                }
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
