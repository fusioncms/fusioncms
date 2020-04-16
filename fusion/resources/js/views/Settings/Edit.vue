<template>
    <div>
        <portal to="title">
            <app-title icon="cog">{{ section | capitalize }} Settings</app-title>
        </portal>

        <div class="row">
            <div class="col w-full">
                <div class="card">
                    <div class="card__body">
                        <settings-form v-if="section" ref="form" :section="section"></settings-form>
                    </div>
                </div>
            </div>
        </div>

        <portal name="setting-actions" to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'settings' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="$refs.form.submit" class="button button--primary">Save</button>
            </div>
        </portal>
    </div>
</template>

<script>
    import SettingsForm from './SharedForm.vue'

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