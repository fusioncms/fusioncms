<template>
    <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4">
            <div class="bg-white p-4 shadow">
                <h3>Group</h3>

                <form @submit.prevent="updateCategoryGroup">
                    <p-input
                        v-model="categoryGroupForm.data.name"
                        placeholder="Name"
                    ></p-input>

                    <p-textarea
                        v-model="categoryGroupForm.data.description"
                        placeholder="Description"
                    ></p-textarea>

                    <div class="flex justify-between">
                        <p-button type="button" @click="deleteCategoryGroup">Delete</p-button>
                        <p-button theme="primary" type="submit">Save</p-button>
                    </div>
                </form>
            </div>
        </div>

        <div class="w-full md:w-2/3 px-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Form from '../../forms/Form'

export default {
    data() {
        return {
            categoryGroupForm: new Form({
                name: null,
                description: null,
            }),
        }
    },

    mounted() {
        axios.get(`/api/category-groups/${this.$route.params.category_group_id}`).then(({data}) => {
            this.categoryGroupForm.data.name = data.data.name
            this.categoryGroupForm.data.description = data.data.description
        })
    },

    methods: {
        updateCategoryGroup() {
            this.categoryGroupForm.patch(`/api/category-groups/${this.$route.params.category_group_id}`).then(() => {
                toast('Category group updated')
            })
        },

        deleteCategoryGroup() {
            axios.delete(`/api/category-groups/${this.$route.params.category_group_id}`).then(() => {
                this.$bus.$emit('categoryGroupDeleted')
            })
        },
    },
}
</script>

<style scoped>

</style>
