<template>
    <div class="inbox__filter-sidebar">
        <div class="card h-full">
            <div class="card__body">
                <div class="list">
                    <div class="list" v-if="forms.length == 0">
                        <span class="list--separator pt-0">Inboxes</span>

                        <span class="px-2 text-gray-600 leading-loose">No forms available.</span>
                    </div>

                    <div class="list" v-else>
                        <span class="list--separator pt-0">Forms</span>
                        <a v-for="form in forms" :key="form.handle" href="#" class="list--item leading-loose" :class="{'router-link-active': isSelected(form)}" @click.prevent="select(form)"><fa-icon :icon="['fas', 'inbox']" fixed-width class="mr-2"></fa-icon> {{ form.name }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'filter-sidebar',

        computed: {
            ...mapGetters({
                forms: 'inbox/getForms',
                form: 'inbox/getForm',
            })
        },

        methods: {
            ...mapActions({
                select: 'inbox/selectForm'
            }),

            isSelected(form) {
                if (this.form) {
                    return this.form.id == form.id
                }

                return false
            },
        }
    }
</script>