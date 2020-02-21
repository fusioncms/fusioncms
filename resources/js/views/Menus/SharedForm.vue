<template>
    <div class="row">
        <div class="content-container">
            <form @submit.prevent="submit">
                <p-tabs replace>
                    <p-tab name="Settings">
                        <div class="row">
                            <div class="side-container">
                                <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                    <h3>General</h3>
                                    <p class="text-sm">What will this menu be called?</p>
                                </div>
                            </div>

                            <div class="content-container">
                                <p-input
                                    name="name"
                                    label="Name"
                                    help="What this menu will be called."
                                    autocomplete="off"
                                    autofocus
                                    required
                                    :has-error="form.errors.has('name')"
                                    :error-message="form.errors.get('name')"
                                    v-model="form.name">
                                </p-input>

                                <p-slug
                                    name="handle"
                                    label="Handle"
                                    help="A developer-friendly variant of the menu's name."
                                    autocomplete="off"
                                    monospaced
                                    required
                                    delimiter="_"
                                    :watch="form.name"
                                    :has-error="form.errors.has('handle')"
                                    :error-message="form.errors.get('handle')"
                                    v-model="form.handle">
                                </p-slug>

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
                            </div>
                        </div>
                    </p-tab>

                    <p-tab name="Fields">
                        <section-builder v-model="form.fieldset.sections" @input="$emit('sectionBuilderInput')"></section-builder>
                    </p-tab>
                </p-tabs>

                <portal to="actions">
                    <router-link :to="{ name: 'menus' }" class="button mr-3">Go Back</router-link>
                    <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save Menu</button>
                </portal>
            </form>
        </div>
    </div>
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