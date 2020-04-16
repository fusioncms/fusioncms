<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'menus' }" class="button">Go Back</router-link>
                <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
            </div>
        </portal>

        <div class="card">
            <div class="card__body">
                <p-title
                    name="name"
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </p-title>

                <p-tabs>
                    <p-tab name="General">
                        <p-input
                            name="description"
                            label="Description"
                            help="Give a short description of what this menu will link to."
                            autocomplete="off"
                            required
                            :has-error="form.errors.has('description')"
                            :error-message="form.errors.get('description')"
                            v-model="form.description">
                        </p-input>
                    </p-tab>

                    <p-tab name="Fields">
                        <section-builder v-model="form.fieldset.sections" @input="$emit('sectionBuilderInput')"></section-builder>
                    </p-tab>
                </p-tabs>
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <p-slug
                        name="handle"
                        label="Handle"
                        monospaced
                        autocomplete="off"
                        required
                        :watch="form.name"
                        :has-error="form.errors.has('handle')"
                        :error-message="form.errors.get('handle')"
                        v-model="form.handle">
                    </p-slug>
                </div>
            </div>
        </template>
    </form-container>
</template>

<script>
    export default {
        props: {
            id: {
                type: Number,
                required: false,
                default: 0
            },

            form: {
                type: Object,
                required: true,
            },

            submit: {
                required: true,
            },
        },
    }
</script>