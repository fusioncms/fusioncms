<template>
    <div>
        <div class="row">
            <div class="content-container">
                <settings-form v-if="ready" :section="section"></settings-form>
            </div>
        </div>

        <portal to="actions">
            <router-link :to="{ name: 'settings' }" class="button mr-3">Cancel</router-link>
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
            ready: false,
            section: ''
        }
    },

    filters: {
        capitalize: function (value) {
            _.capitalize(value)
        }
    },

    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.section = to.params.section
            vm.ready   = true
        })
    },
}
</script>