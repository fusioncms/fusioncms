<template>
    <div class="bg-white p-4 shadow">
        <router-link :to="`/category-groups/${$route.params.category_group_id}/categories`">
            <fa-icon icon="arrow-left"></fa-icon>
            Back
        </router-link>

        <h3>Category</h3>

        <form @submit.prevent="updateCategory">
            <p-input
                v-model="categoryForm.data.name"
                placeholder="Name"
            ></p-input>

            <p-textarea
                v-model="categoryForm.data.description"
                placeholder="Description"
            ></p-textarea>

            <div class="flex justify-between">
                <p-button type="button" @click="deleteCategory">Delete</p-button>
                <p-button theme="primary" type="submit">Save</p-button>
            </div>
        </form>
    </div>
</template>

<script>
import Form from '../../../forms/Form'

export default {
    data() {
        return {
            categoryForm: new Form({
                category_group_id: parseInt(this.$route.params.category_group_id),
                name: null,
                description: null,
            }),
        }
    },

    mounted() {
        axios.get(`/api/categories/${this.$route.params.category_id}`).then(({data}) => {
            this.categoryForm.data.name = data.data.name
            this.categoryForm.data.description = data.data.description
        })
    },

    methods: {
        updateCategory() {
            this.categoryForm.patch(`/api/categories/${this.$route.params.category_id}`).then(() => {
                toast('Updated Category')
            })
        },

        deleteCategory() {
            axios.delete(`/api/categories/${this.$route.params.category_id}`).then(() => {
                this.$router.push(`/category-groups/${this.$route.params.category_group_id}/categories`)
            })
        },
    }
}
</script>

<style scoped>

</style>
