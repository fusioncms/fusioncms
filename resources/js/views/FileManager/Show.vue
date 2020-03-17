<template>
    <div>
        <portal to="title">
            <app-title icon="image">{{ loaded ? file.name : '' }}</app-title>
        </portal>

        <div class="row" v-if="loaded" :key="file.name">
            <div class="content-container">
                <p-card>
                    <div class="flex items-center justify-center">
                        <div v-if="file.type == 'image'">
                            <p-img
                                :src="fileSrc"
                                :alt="file.description"
                                background-color="#ffffff"
                                class="rounded">
                            </p-img>
                        </div>

                        <div v-else-if="file.type == 'video'" class="w-full">
                            <video ref="player" controls crossorigin>
                                <source :src="file.url" :type="file.mimetype" size="576">
                            </video>
                        </div>

                        <div v-else>
                            <p-img
                                :src="'/img/' + file.type + '-small.svg'"
                                background-color="#ffffff"
                                :width="200"
                                :height="200"
                                :alt="file.description">
                            </p-img>

                            <div class="text-center px-6 py-3 rounded border border-gray-400 bg-gray-200 text-gray-800">
                                No preview available
                            </div>
                        </div>
                    </div>
                </p-card>

                <p-card v-if="file.type == 'video'" class="mt-6 text-center text-sm text-gray-800">
                    If you intend on serving this video on your website, it's highly recommended that you use a 3rd party service such as <a href="">Youtube</a> or <a href="">Vimeo</a>.
                </p-card>
            </div>

            <div class="side-container">
                <p-card class="mb-6">
                    <form v-if="form" @submit.prevent="submit" enctype="multipart/form-data">
                        <portal to="actions">
                            <p-button theme="danger" class="mr-4" v-modal:delete>Delete</p-button>

                            <p-button v-modal:move-file>Move</p-button>
                            <p-button v-modal:replace-file>Replace</p-button>
                            <p-button @click.prevent="download" class="mr-4">Download</p-button>

                            <p-button @click.prevent="back">Go Back</p-button>
                            <button type="submit" @click.prevent="submit" class="button button--primary">Save</button>
                        </portal>

                        <p-input
                            name="name"
                            label="Name"
                            autocomplete="off"
                            autofocus
                            placeholder="Name"
                            :has-error="form.errors.has('name')"
                            :error-message="form.errors.get('name')"
                            v-model="form.name">
                        </p-input>

                        <p-textarea
                            name="description"
                            label="Description"
                            help="Describing your file isn't mandatory but is incredibly useful for accessibility."
                            placeholder="Description"
                            :has-error="form.errors.has('description')"
                            :error-message="form.errors.get('description')"
                            v-model="form.description">
                        </p-textarea>
                    </form>
                </p-card>

                <p-card class="mb-6">
                    <p-input
                        name="share"
                        readonly
                        label="Share"
                        class="text-sm"
                        :value="file.url">
                    </p-input>
                </p-card>

                <p-card class="text-sm" v-if="file">
                    <div class="flex justify-between">
                        <label class="form__label">Size</label>
                        <p>{{ file.bytes | bytes }}</p>
                    </div>

                    <div class="flex justify-between">
                        <label class="form__label">Mimetype</label>
                        <p>{{ file.mimetype }}</p>
                    </div>

                    <div class="flex justify-between" v-if="file.width && file.height">
                        <label class="form__label">Dimensions</label>
                        <p>{{ file.width }} x {{ file.height }}</p>
                    </div>

                    <div class="flex justify-between">
                        <label class="form__label">Last Modified</label>
                        <p>{{ $moment(file.created_at.date).format('L') }}</p>
                    </div>
                </p-card>
            </div>
        </div>

        <portal to="modals">
            <move-file-modal></move-file-modal>

            <replace-file-modal :file="file" @replaced="replacement => file = replacement"></replace-file-modal>

            <delete-file-modal :file="file"></delete-file-modal>
        </portal>
    </div>
</template>

<script>
    import Plyr                       from 'plyr'
    import Form                       from '../../forms/Form'
    import FileHelperMixin            from '../../mixins/filehelper'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        head: {
            title() {
                return {
                    inner: this.file.name || 'Loading...'
                }
            }
        },

        mixins: [ FileHelperMixin ],

        data() {
            return {
                file: {},
                form: null,
                player: null,
                loaded: false,
            }
        },

        computed: {
            fileSrc(file) {
                return this.file.url + '?w=1500&h=1500&fit=max&t=' + this.$moment.utc(this.file.updated_at)
            }
        },

        watch: {
            file: {
                handler(value) {
                    this.$nextTick(() => {
                        this.player = new Plyr(this.$refs.player, {
                            title: this.file.name,
                            ratio: '16:9',
                            controls: [
                                'play-large', // The large play button in the center
                                'restart', // Restart playback
                                'play', // Play/pause playback
                                'progress', // The progress bar and scrubber for playback and buffering
                                'current-time', // The current time of playback
                                'duration', // The full duration of the media
                                'mute', // Toggle mute
                                'volume', // Volume control
                                'captions', // Toggle captions
                                'settings', // Settings menu
                                'pip', // Picture-in-picture (currently Safari only)
                                'airplay', // Airplay (currently Safari only)
                                'fullscreen', // Toggle fullscreen
                            ],
                            settings: ['quality', 'loop'],
                        })
                    })
                },
                deep: true
            },
        },

        methods: {
            ...mapActions({
                toggleSelection: 'filemanager/toggleFileSelection',
            }),

            getFile(to, from, next) {
                axios.get('/api/files/' + to.params.uuid)
                    .then((response) => {
                        this.file   = response.data.data
                        this.loaded = true
                        this.form   = new Form({
                            name: this.file.name,
                            description: this.file.description
                        })

                        this.toggleSelection(this.file.id)

                        this.$emit('updateHead')

                        this.$nextTick(() => {
                            this.player = new Plyr(this.$refs.player, {
                                title: this.file.name,
                                ratio: '16:9',
                                controls: [
                                    'play-large',   // The large play button in the center
                                    'restart',      // Restart playback
                                    'play',         // Play/pause playback
                                    'progress',     // The progress bar and scrubber for playback and buffering
                                    'current-time', // The current time of playback
                                    'duration',     // The full duration of the media
                                    'mute',         // Toggle mute
                                    'volume',       // Volume control
                                    'captions',     // Toggle captions
                                    'settings',     // Settings menu
                                    'pip',          // Picture-in-picture (currently Safari only)
                                    'airplay',      // Airplay (currently Safari only)
                                    'fullscreen',   // Toggle fullscreen
                                ],
                                settings: ['quality', 'loop'],
                            })
                        })
                    })
            },

            submit() {
                this.form.patch(`/api/files/${this.file.id}`)
                    .then((response) => {
                        this.file.name = this.form.name

                        toast('The file\'s information was successfully updated', 'success')
                    }).catch((error) => {
                        toast(error.response.data.message, 'danger')
                    })
            },

            back() {
                this.$router.push({name: 'file-manager.index'})
            },

            download() {
                axios({
                    url: '/api/files/' + this.file.uuid + '/download',
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', this.file.original);
                    document.body.appendChild(link);
                    link.click();
                })

                toast(this.file.original + ' downloaded', 'success')
            },
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.getFile(to, from, next)
            })
        },

        beforeRouteUpdate(to,from,next) {
            this.getFile(to, from, next)

            next()
        }
    }
</script>