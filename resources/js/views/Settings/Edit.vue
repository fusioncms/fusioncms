<template>
    <div>
        <portal to="title">
            <app-title icon="cog">{{ section.name }} Settings</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <form @submit.prevent="submit" enctype="multipart/form-data">
                    <div class="col w-full xl:w-2/3 mx-auto">
                        <p-tabs>
                            <p-tab v-for="(settings, group, index) in groups" :key="group" :name="group" :active="index === 0">
                                <div v-for="setting in settings" :key="setting.handle" class="form__group">
                                    <p-input
                                        v-if="setting.type === 'text' || setting.type === 'number' || setting.type === 'email'"
                                        :name="setting.handle"
                                        :ref="setting.handle"
                                        :label="setting.name"
                                        :type="setting.type"
                                        :help="setting.description"
                                        v-model="setting.value"
                                    ></p-input>

                                    <p-select
                                        v-if="setting.type === 'select'"
                                        :name="setting.handle"
                                        :ref="setting.handle"
                                        :label="setting.name"
                                        :options="mapOptions(setting.options)"
                                        :help="setting.description"
                                        v-model="setting.value"
                                    ></p-select>

                                    <p-upload
                                        v-if="setting.type === 'file'"
                                        :name="setting.handle"
                                        :label="setting.name"
                                        :help="setting.description"
                                        v-model="setting.value"
                                        accept="json"
                                    ></p-upload>
                                </div>
                            </p-tab>
                        </p-tabs>
                    </div>

                    <portal to="actions">
                        <router-link :to="{ name: 'settings' }" class="button mr-3">Cancel</router-link>
                        <button type="submit" @click.prevent="submit" class="button button--primary">Save Settings</button>
                    </portal>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import FormData from 'form-data'

export default {
    data() {
        return {
            section: {},
            settings: {},
            groups: {},
        }
    },

    methods: {
        mapOptions(options) {
            let mapped = []

            for (let key in options) {
                if (options.hasOwnProperty(key)) {
                    mapped.push({
                        label: options[key],
                        value: key
                    })
                }
            }

            return mapped
        },

        submit() {
            const formData = new FormData()
            let vm = this

            formData.append('_method', 'PATCH')

            _.forEach(this.settings, function(setting) {
                formData.append(setting.handle, setting.value)
            })

            axios.post(`/api/settings/${this.section.handle}`, formData).then(() => {
                toast('Settings have been updated.', 'success')
                
                this.$router.push('/settings')
            })
        },
    },

    beforeRouteEnter(to, from, next) {
        axios.get('/api/settings/' + to.params.section).then((response) => {
            next(vm => {
                let settings = _.filter(response.data.data.items, function(item) {
                    return item.gui === true
                })

                vm.section = response.data.data.section
                vm.groups = _.groupBy(settings, 'group')
                vm.settings = settings
            })
        })
    },
}
</script>