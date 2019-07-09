<template>
    <div class="bg-white p-4 shadow">
        <div class="mb-4">
            <p-button theme="primary" @click="categoryModal = true">
                Add Category
            </p-button>
        </div>

        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th></th>
            </tr>
            </thead>

            <tr v-if="!categories.length">
                <td colspan="2" class="text-center">No categories.</td>
            </tr>

            <tr v-for="category in categories">
                <td>{{ category.name }}</td>
                <td>{{ category.description }}</td>
                <td>
                    <router-link :to="`/category-groups/${$route.params.category_group_id}/categories/${category.id}`" class="inline-block mr-4">
                        <fa-icon icon="pencil"></fa-icon>
                    </router-link>
                    <a href="#" @click.prevent="deleteCategory(category)">
                        <fa-icon icon="trash"></fa-icon>
                    </a>
                </td>
            </tr>
        </table>

        <p-modal v-model="categoryModal" name="category-group-modal" title="Create Category" no-footer>
            <form @submit.prevent="createCategory">
                <p-input placeholder="Name" v-model="newCategoryForm.data.name"></p-input>
                <p-textarea placeholder="Description" v-model="newCategoryForm.data.description"></p-textarea>

                <div class="text-right">
                    <p-button type="submit" theme="primary">Create</p-button>
                </div>
            </form>
        </p-modal>
    </div>
</template>

<script>
import Form from '../../../forms/Form'

export default {
    data() {
        return {
            categories: [],

            categoryModal: false,
            newCategoryForm: new Form({
                category_group_id: null,
                name: null,
                description: null,
            }),
        }
    },

    mounted() {
        this.getCategories()
    },

    methods: {
        getCategories() {
            axios.get('/api/categories', {
                params: {
                    category_group_id: this.$route.params.category_group_id,
                },
            }).then(({data}) => {
                this.categories = data.data
            })
        },

        createCategory() {
            this.newCategoryForm.data.category_group_id = this.$route.params.category_group_id

            this.newCategoryForm.post('/api/categories').then(() => {
                this.newCategoryForm.reset()
                this.categoryModal = false
                this.getCategories()
            })
        },

        deleteCategory(category) {
            axios.delete(`/api/categories/${category.id}`).then(() => {
                this.getCategories()
            })
        },
    }
}
</script>

<style scoped>

</style>
