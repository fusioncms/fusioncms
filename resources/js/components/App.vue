<template>
    <div class="h-full flex" v-cloak>
        <transition name="fade" mode="out-in" appear>
            <component :is="layout">
                <router-view></router-view>
            </component>
        </transition>

        <file-manager-modal></file-manager-modal>
        <edit-file-modal></edit-file-modal>
        <edit-directory-modal></edit-directory-modal>
        <select-directory-modal></select-directory-modal>
    </div>
</template>

<script>
    import FileManagerModal from './Modals/FileManagerModal'
    import EditFileModal from './Modals/EditFileModal'
    import EditDirectoryModal from './Modals/EditDirectoryModal'
    import SelectDirectoryModal from './Modals/SelectDirectoryModal'

    export default {
        name: 'app',

        components: {
            FileManagerModal,
            EditFileModal,
            EditDirectoryModal,
            SelectDirectoryModal,
        },

        props: {
            user: {
                type: Object,
                required: false,
                default: null
            }
        },

        computed: {
            layout() {
                return (this.$route.meta.layout || 'default') + '-layout'
            }
        },

        created() {
            this.$store.commit('user/setUser', this.user)

            this.$store.dispatch('auth/authorize', {
                guestNext: { name: 'login', query: { redirect: location.pathname } },
                adminNext: { name: 'dashboard' }
            })
        }

    }
</script>
