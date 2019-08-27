<template>
    <div>
        <portal to="title">
            Categories
        </portal>

        <portal to="actions">
            <p-button theme="primary" @click="categoryGroupModal = true">
                Create Category Group
            </p-button>
        </portal>

        <div class="flex -mx-4" v-if="categoryGroups.data && categoryGroups.data.length">
            <div class="w-full sm:w-1/4 md:w-1/5 px-4">
                <div class="bg-white shadow rounded overflow-hidden">
                    <router-link :to="`/category-groups/${categoryGroup.id}/categories`" :class="`block py-2 px-4 ${$route.params.category_group_id === (categoryGroup.id + '') ? 'text-white bg-black hover:bg-gray-900 hover:text-white' : 'text-black hover:text-black hover:bg-gray-200'}`"
                                 v-for="categoryGroup in categoryGroups.data"
                                 :key="categoryGroup.id">
                        {{ categoryGroup.name }}
                    </router-link>
                </div>
            </div>

            <div class="w-full sm:w-3/4 md:w-4/5 px-4">
                <transition name="fade" mode="out-in" appear>
                    <router-view :key="$route.params.category_group_id"></router-view>
                </transition>
            </div>
        </div>

        <div class="text-center" v-else>
            <h3>No category groups</h3>

            <p-button theme="primary" @click="categoryGroupModal = true">
                Create Category Group
            </p-button>
        </div>

        <p-modal v-model="categoryGroupModal" name="category-group-modal" title="Create Category Group" no-footer>
            <form @submit.prevent="createCategoryGroup">
                <p-input placeholder="Name" v-model="newCategoryGroupForm.data.name"></p-input>
                <p-textarea placeholder="Description" v-model="newCategoryGroupForm.data.description"></p-textarea>

                <div class="text-right">
                    <p-button type="submit" theme="primary">Create</p-button>
                </div>
            </form>
        </p-modal>
    </div>
</template>

<script>
import Form from '../../forms/Form'

export default {
    data() {
        return {
            categoryGroups: {},

            categories: [],

            categoryGroupModal: false,
            newCategoryGroupForm: new Form({
                name: null,
                description: null,
            }),
        }
    },

    mounted() {
        this.getCategoryGroups()

        this.$bus.$on('categoryGroupDeleted', () => {
            this.getCategoryGroups(true)
        })
    },

    methods: {
        getCategoryGroups(forceChange = false) {
            axios.get('/api/category-groups').then(({data}) => {
                this.categoryGroups = data

                if ((!this.$route.params.category_group_id || forceChange) && data.data.length) {
                    this.$router.push(`/category-groups/${data.data[0].id}/categories`)
                }
            })
        },

        createCategoryGroup() {
            this.newCategoryGroupForm.post('/api/category-groups').then(({data}) => {
                this.newCategoryGroupForm.reset()
                this.categoryGroupModal = false

                let newCategoryGroup = data

                axios.get('/api/category-groups').then(({data}) => {
                    this.categoryGroups = data

                    this.$router.push(`/category-groups/${newCategoryGroup.id}/categories`)
                })
            })
        },
    },
}
</script>

<style scoped>

</style>
