<template>
    <div>
        <portal to="title">
            <app-title icon="image">{{ loaded ? file.name : '' }}</app-title>
        </portal>

        <div class="row" v-if="loaded">
            <div class="content-container">
                <p-card>
                    <div class="flex items-center justify-center">
                        <div v-if="isImage">
                            <p-img
                                src="/img/placeholder-large.svg"
                                background-color="#ffffff"
                                :lazySrc="file.url + '?w=1500&h=1500&fit=max'"
                                :alt="file.description"
                                class="rounded">
                            </p-img>
                        </div>

                        <div v-else-if="isVideo" class="w-full">
                            <video ref="player" playsinline controls>
                                <source :src="file.url" :type="file.mimetype">
                            </video>
                        </div>

                        <div v-else>
                            <p-img
                                src="/img/placeholder-large.svg"
                                background-color="#ffffff"
                                :alt="file.description"
                                class="rounded">
                            </p-img>

                            <div class="text-center px-6 py-3 rounded border border-grey-light bg-grey-lighter text-grey-darker">
                                No preview available
                            </div>
                        </div>
                    </div>
                </p-card>

                <p-card v-if="isVideo" class="mt-6 text-center text-sm text-grey-darker">
                    If you intend on serving this video on your website, it's highly recommended that you use a 3rd party service such as <a href="">Youtube</a> or <a href="">Vimeo</a>.
                </p-card>
            </div>

            <div class="side-container">
                <p-card class="mb-6">
                    <form @submit.prevent="submit" enctype="multipart/form-data">
                        <portal to="actions">
                            <p-button theme="danger" class="mr-4">Delete</p-button>

                            <p-button>Move</p-button>
                            <p-button>Replace</p-button>
                            <p-button @click.prevent="download" class="mr-4">Download</p-button>
                            
                            <p-button @click.prevent="goBack">Go Back</p-button>
                            <button type="submit" @click.prevent="submit" class="button button--primary">Save</button>
                        </portal>

                        <p-input
                            name="name"
                            v-model="name"
                            label="Name">
                        </p-input>
                        
                        <p-textarea
                            name="description"
                            v-model="description"
                            label="Description"
                            help="Describing your file isn't mandatory but is incredibly useful for accessibility.">
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
                        <p>{{ bytes }}</p>
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
                        <p>{{ moment(file.created_at.date).format('L') }}</p>
                    </div>
                </p-card>
            </div>
        </div>
    </div>
</template>

<script>
    import Plyr from 'plyr'

    export default {
        data() {
            return {
                file: {},
                name: '',
                description: '',
                player: null,
                loaded: false,
            }
        },

        computed: {
            isImage() {
                return _.startsWith(this.file.mimetype, 'image')
            },

            isVideo() {
                return _.startsWith(this.file.mimetype, 'video')
            },

            bytes() {
                let bytes = this.file.bytes
                let thresh = 1000

                if (Math.abs(bytes) < thresh) {
                    return bytes + ' B'
                }

                let index = -1
                let units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
                
                do {
                    bytes /= thresh
                    ++index
                } while (Math.abs(bytes) >= thresh && index < units.length - 1)

                return bytes.toFixed(1) + ' ' + units[index]
            },
        },

        methods: {
            getFile(to, from, next) {
                let vm = this

                axios.get('/api/files/' + to.params.uuid).then((response) => {    
                    vm.file = response.data.data
                    vm.name = vm.file.name
                    vm.description = vm.file.description
                    vm.loaded = true

                    vm.$nextTick(() => {
                        vm.player = new Plyr(vm.$refs.player)
                    })
                })
            },

            submit() {
                axios.patch('/api/files/' + this.file.id, {
                    name: this.name,
                    description: this.description,
                }).then((response) => {
                    this.file.name = this.name

                    toast('The file\'s information was successfully updated', 'success')
                }).catch((error) => {
                    toast(error.response.data.message, 'danger')
                })
            },

            goBack() {
                this.$router.go(-1)
            },

            download() {
                let vm = this

                axios({
                    url: '/api/files/' + this.file.uuid + '/download',
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', vm.file.original);
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