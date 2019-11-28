<template>
    <div>
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

export default {
    components: {
        'settings-form': SettingsForm
    },

    data() {
        return {
            section: ''
        }
    },

    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.section = to.params.section
        })
    },
}
</script>