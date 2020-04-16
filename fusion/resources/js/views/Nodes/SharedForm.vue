<template>
    <form-container>
		<portal to="actions">
			<div class="buttons">
				<router-link v-if="menu.id" :to="{ name: 'menu.nodes', params: {menu: menu.id} }" class="button">Go Back</router-link>
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
                    name="url"
                    label="URL"
                    help="The URL of the node."
                    autocomplete="off"
                    required
                    :has-error="form.errors.has('url')"
                    :error-message="form.errors.get('url')"
                    v-model="form.url">
                </p-input>

                <p-tabs v-if="fields.body.length > 0">
                    <p-tab v-for="section in sections.body" :key="section.handle" :name="section.name">
                        <div v-for="field in section.fields" :key="field.handle" class="form__group">
                            <component
                                :is="field.type.id + '-fieldtype'"
                                :field="field"
                                v-model="form[field.handle]"
                            >
                            </component>
                        </div>
                    </p-tab>
                </p-tabs>
            </div>
        </div>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <p-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </p-toggle>

                    <p-select
                        name="new_window"
                        label="Open link where"
                        help="Determine where the link should open."
                        :options="[
                            {
                                'label': 'New Window',
                                'value': 1,
                            },
                            {
                                'label': 'Same Window',
                                'value': 0,
                            },
                        ]"
                        v-model="form.new_window">
                    </p-select>
                </div>
            </div>

			<div class="card" v-for="(section) in sections.sidebar" :key="section.handle">
                <div class="card__header">
                    <h3 class="card__title">{{ section.name }}</h3>
                    <p v-if="section.description" class="card__subtitle">{{ section.description }}</p>
                </div>

                <div class="card__body">
                    <!-- Loop through each section field -->
                    <component
                        :is="field.type.id + '-fieldtype'"
                        :field="field"
                        v-model="form[field.handle]"
                        v-for="field in section.fields" :key="field.handle">
                    </component>
                </div>
            </div>

			<p-definition-list v-if="node">
                <p-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': node.status, 'text-danger-500': ! node.status}"></fa-icon> {{ node.status ? 'Enabled' : 'Disabled' }}
                </p-definition>

                <p-definition name="Created At">
                    {{ $moment(node.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(node.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>
            </p-definition-list>
        </template>
    </form-container>
</template>

<script>
    export default {
        props: {
            node: {
                type: Object,
            },

            nodes: {
                type: Array,
                required: true,
            },

            menu: {
                type: Object,
                required: true,
            },

            form: {
                type: Object,
                required: true,
            },

            submit: {
                required: true,
            },
        },

        computed: {
            sections() {
                let body = []
                let sidebar = []

                if (this.menu.fieldset) {
                    body = _.filter(this.menu.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.menu.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            },

            fields() {
                let body = []
                let sidebar = []

                if (this.menu.fieldset) {
                    body = _.filter(this.menu.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    body = _.flatMap(body, function(section) {
                        return section.fields
                    })

                    sidebar = _.filter(this.menu.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })

                    sidebar = _.flatMap(sidebar, function(section) {
                        return section.fields
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            }
        },
    }
</script>