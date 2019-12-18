<template>
    <div>
        <portal to="title">
            <app-title icon="cog">{{ section | capitalize }} Settings</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <settings-form v-if="section" ref="form" :section="section"></settings-form>
            </div>
        </div>

        <portal to="actions">
            <router-link :to="{ name: 'settings' }" class="button mr-3">Cancel</router-link>
            <button type="submit" @click.prevent="$refs.form.submit" class="button button--primary">Save Settings</button>
        </portal>
    </div>
</template>

<script>

    import SettingsForm from './SharedForm.vue'
    import _ from 'lodash'

    export default {
        head: {
            title() {
                return {
                    inner: _.startCase(this.section) + ' Settings' || 'Loading...'
                }
            }
        },

        components: {
            'settings-form': SettingsForm
        },

        filters: {
            capitalize: function(value) {
                return _.startCase(value)
            }
        },

        data() {
            return {
                section: ''
            }
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.section = to.params.section

                vm.$emit('updateHead')
            })
        },
    }
</script>