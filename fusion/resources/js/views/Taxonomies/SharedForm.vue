<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'taxonomies' }" class="button">Go Back</router-link>
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

                <p-input
                    name="description"
                    label="Description"
                    help="Give a short description of what this taxonomy will organize and store."
                    autocomplete="off"
                    required
                    :has-error="form.errors.has('description')"
                    :error-message="form.errors.get('description')"
                    v-model="form.description">
                </p-input>

                <p-tabs>
                    <p-tab name="General">
                        <p-select
                            name="fieldset"
                            label="Fieldset"
                            help="What fieldset would you like to attach?"
                            :options="fieldsets"
                            :has-error="form.errors.has('fieldset')"
                            :error-message="form.errors.get('fieldset')"
                            v-model="form.fieldset">
                        </p-select>
                    </p-tab>

                    <p-tab name="Route">
                        <p-input
                            name="route"
                            label="Route"
                            help="When the URI matches this pattern..."
                            autocomplete="off"
                            monospaced
                            :has-error="form.errors.has('route')"
                            :error-message="form.errors.get('route')"
                            v-model="form.route">
                        </p-input>

                        <p-input
                            name="template"
                            label="Template"
                            help="Render this template"
                            autocomplete="off"
                            monospaced
                            :has-error="form.errors.has('template')"
                            :error-message="form.errors.get('template')"
                            v-model="form.template">
                        </p-input>
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

            <div class="card">
                <div class="card__body">
                    <icon-picker
                        name="icon"
                        label="Icon"
                        placeholder="Search icons..."
                        help="Choose an icon that best represents your taxonomy."
                        :has-error="form.errors.has('icon')"
                        :error-message="form.errors.get('icon')"
                        required
                        v-model="form.icon">
                    </icon-picker>

                    <p-toggle
                        name="sidebar"
                        label="Show in Sidebar"
                        v-model="form.sidebar"
                        :true-value="1"
                        :false-value="0">
                    </p-toggle>
                </div>
            </div>

            <p-definition-list v-if="taxonomy">
                <p-definition name="Created At">
                    {{ $moment(taxonomy.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(taxonomy.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>
            </p-definition-list>
        </template>
    </form-container>
</template>

<script>
    import pluralize from 'pluralize'

    export default {
        props: {
            form: {
                type: Object,
                required: true,
            },

            taxonomy: {
                type: Object,
                required: false,
            },

            submit: {
                required: true,
            },

            fieldsets: {
                required: true,
            },
        },
    }
</script>