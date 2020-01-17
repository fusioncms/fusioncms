<template>
	<div class="row">
		<portal to="actions">
            <router-link v-if="taxonomy.slug" :to="{ name: 'terms.index', params: { taxonomy: taxonomy.slug }}" class="button mr-3">Go Back</router-link>
            <button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save Term</button>
        </portal>

		<div class="content-container">
		    <form @submit.prevent="$parent.submit">
		        <p-card>
		        	<div class="row">
	            		<div class="col form-sidebar">
                            <div class="xxl:mr-10">
                                <!--  -->
                            </div>
                        </div>

                        <div class="col mb-6 form-content">
                            <div class="row">
                                <div class="col w-1/2">
                                    <p-input
                                        name="name"
                                        label="Name"
                                        v-model="form.name"
                                        :has-error="form.errors.has('name')"
                                        :error-message="form.errors.get('name')">
                                    </p-input>
                                </div>

                                <div class="col w-1/2">
                                    <p-slug
                                        name="slug"
                                        label="Slug"
                                        monospaced
                                        v-model="form.slug"
                                        :has-error="form.errors.has('slug')"
                                        :error-message="form.errors.get('slug')"
                                        :watch="form.name">
                                    </p-slug>
                                </div>
                            </div>
                        </div>
                    </div>

		            <div v-if="sections.body.length > 0">
		                <!-- Loop through each section -->
		                <div v-for="(section, index) in sections.body" :key="section.handle">
		                    <div class="row">
		                        <div class="col form-sidebar">
		                            <div class="xxl:mr-10">
		                                <h3>{{ section.name }}</h3>
		                                <p class="text-sm">{{ section.description }}</p>
		                            </div>
		                        </div>

		                        <div class="col form-content">
		                            <!-- Loop through each section field -->
		                            <div v-for="field in section.fields" :key="field.handle" class="form__group">
		                                <component
		                                    :is="field.type.id + '-fieldtype'"
		                                    :field="field"
		                                    v-model="form[field.handle]">
		                                </component>
		                            </div>
		                        </div>
		                    </div>
		                
		                    <hr v-if="index !== sections.body.length - 1">
		                </div>
		            </div>

		            <div v-else class="text-center">
		                <p>You should configure your Taxonomy with some sections and fields first <fa-icon class="text-emoji" :icon="['fas', 'hand-peace']"></fa-icon></p>
		                <router-link v-if="taxonomy.id" class="button items-center" :to="{ name: 'taxonomies.edit', params: { taxonomy: taxonomy.id }}"><fa-icon :icon="['fas', 'edit']" class="mr-2 text-sm"></fa-icon> Manage your taxonomy</router-link>
		            </div>
		        </p-card>
		    </form>
		</div>

		<div class="side-container">
	        <form @submit.prevent="$parent.submit">
	            <p-card>
	                <div class="row">
	                    <div class="col w-full">
	                        <p-select
	                            name="status"
	                            label="Status"
	                            :options="[
	                                {
	                                    'label': 'Enabled',
	                                    'value': 1,
	                                },
	                                {
	                                    'label': 'Disabled',
	                                    'value': 0,
	                                },
	                            ]"
	                            v-model="form.status"
	                            >
	                        </p-select>
	                    </div>
	                </div>
	            </p-card>

	            <p-card v-for="(section) in sections.sidebar" :key="section.handle" class="mt-6">
	                <h3>{{ section.name }}</h3>
	                <p class="text-sm">{{ section.description }}</p>

	                <div class="w-full">
	                    <!-- Loop through each section field -->
	                    <div v-for="field in section.fields" :key="field.handle" class="form__group">
	                        <component
	                            :is="field.type.id + '-fieldtype'"
	                            :field="field"
	                            v-model="form[field.handle]">
	                        </component>
	                    </div>
	                </div>
	            </p-card>
	        </form>
	    </div>
	</div>
</template>

<script>
	export default {
		props: {
			taxonomy: {
				type: Object,
				required: true,
			},

			form: {
				type: Object,
				required: true,
			}
		},

		computed: {
			sections() {
				return this.$parent.sections
			}
		}
	}
</script>