<template>
	<form-container>
		<portal to="actions">
			<div class="buttons">
				<router-link v-if="taxonomy.slug" :to="{ name: 'terms.index', params: {taxonomy: taxonomy.slug} }" class="button">Go Back</router-link>
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

				<p-tabs v-if="sections.body.length > 0">
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

                <div v-if="sections.body.length == 0 && taxonomy.id" class="text-center">
                    <p>Things are looking a little empty here!</p>
                    <router-link class="button" :to="{ name: 'taxonomies.edit', params: { taxonomy: taxonomy.id }}">Configure your taxonomy</router-link>
                </div>
			</div>
		</div>

		<template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <p-slug
                        name="slug"
                        label="Slug"
                        monospaced
                        autocomplete="off"
                        required
                        :watch="form.name"
                        :has-error="form.errors.has('slug')"
                        :error-message="form.errors.get('slug')"
                        v-model="form.slug">
                    </p-slug>

                    <p-toggle
                        name="status"
                        label="Status"
                        v-model="form.status"
                        :true-value="1"
                        :false-value="0">
                    </p-toggle>
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

			<p-definition-list v-if="term">
                <p-definition name="Status">
                    <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': term.status, 'text-danger-500': ! term.status}"></fa-icon> {{ term.status ? 'Enabled' : 'Disabled' }}
                </p-definition>

                <p-definition name="Created At">
                    {{ $moment(term.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(term.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>
            </p-definition-list>
		</template>
	</form-container>
</template>

<script>
	export default {
		props: {
			taxonomy: {
				type: Object,
				required: true,
			},

			term: {
				required: false,
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

                if (this.taxonomy.fieldset) {
                    body = _.filter(this.taxonomy.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.taxonomy.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            },
		}
	}
</script>