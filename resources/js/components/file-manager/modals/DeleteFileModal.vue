<template>
    <p-modal name="delete" title="Delete permanently?">
        <p>This file will be permanently deleted. <strong>Be advised this action can not be undone.</strong></p>

        <p>Any existing links to this file (if not removed) may result in errors.</p>

        <template v-slot:footer>
            <p-button v-modal:delete>Cancel</p-button>
            <p-button theme="danger" @click="submit" class="mr-1" v-modal:delete>Delete</p-button>
        </template>
    </p-modal>
</template>

<script>
    export default {
        name: 'delete-file-modal',

        props: {
            file: {
                required: true,
            },
        },

        methods: {
            submit() {
                let vm = this

                axios.delete('/api/files/' + this.file.id).then(() => {
                    toast(vm.file.name + ' was successfully deleted.', 'success')

                    vm.$router.push({name: 'file-manager.index'})
                })
            },
        }
    }
</script>
