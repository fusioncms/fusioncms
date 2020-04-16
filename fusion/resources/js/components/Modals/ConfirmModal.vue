<template>
    <p-modal name="confirm" title="Changes not saved" key="confirm_modal" v-model="modalVisible">
        <p>Are you sure you want to leave this page? Any unsaved changes will be discarded.</p>
        <template slot="footer">
            <p-button @click="closeModal" type="button" class="button button--primary">Cancel and Stay</p-button>
            <p-button @click="runCallback" type="button" class="mr-3">Leave and Discard Changes</p-button>
        </template>
    </p-modal>
</template>

<script>
    import store from '../../vuex'
    export default {
        name: 'confirm-modal',
        computed: {
            modalVisible: {
                get() {
                    return store.state.form.confirmModalVisible 
                },
                set(value) {
                    store.commit('form/setConfirmModalVisible', value)
                }
            }
        },

        methods: {
            closeModal() {
                this.modalVisible = false
            },

            runCallback() {
                store.state.form.confirmModalCallback()
                this.closeModal()
            }
        }
    }
</script>
