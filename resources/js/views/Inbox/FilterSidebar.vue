<template>
    <div class="side-container" style="margin-bottom: 0 !important;">
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

                    <!-- <span class="list--separator">Folders</span>
                    <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'all'}" @click.prevent="inbox = 'all'"><fa-icon :icon="['fas', 'inbox']" fixed-width class="mr-2"></fa-icon> Inbox</a>
                    <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'starred'}" @click.prevent="inbox = 'starred'"><fa-icon :icon="['fas', 'star']" fixed-width class="mr-2"></fa-icon> Starred</a>
                    <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'closed'}" @click.prevent="inbox = 'closed'"><fa-icon :icon="['fas', 'check-circle']" fixed-width class="mr-2"></fa-icon> Closed</a>
                    <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'archived'}" @click.prevent="inbox = 'archived'"><fa-icon :icon="['fas', 'history']" fixed-width class="mr-2"></fa-icon> Archived</a>
                    <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'trash'}" @click.prevent="inbox = 'trash'"><fa-icon :icon="['fas', 'trash-alt']" fixed-width class="mr-2"></fa-icon> Trash</a> -->
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