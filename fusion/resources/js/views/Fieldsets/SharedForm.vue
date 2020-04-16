<template>
	<form-container>
		<portal to="actions">
			<div class="buttons">
				<router-link :to="{ name: 'fieldsets' }" class="button">Go Back</router-link>
				<button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
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

				<section-builder class="mt-6" v-model="sections" @input="$parent.sectionsChanged"></section-builder>
			</div>
		</div>

		<template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
					<p-slug
						name="handle"
						label="Handle"
						autocomplete="off"
						required
						delimiter="_"
						:watch="form.name"
						:has-error="form.errors.has('handle')"
						:error-message="form.errors.get('handle')"
						v-model="form.handle">
					</p-slug>
				</div>
            </div>

			<p-definition-list v-if="resource">
                <p-definition name="Created At">
                    {{ $moment(resource.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(resource.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>
            </p-definition-list>
		</template>
	</form-container>
</template>

<script>
    export default {
    	props: {
			resource: {
				required: false,
			},

    		form: {
    			type: Object,
    			required: true,
    		}
    	},

    	computed: {
    		sections: {
    			get: function() {
    				return this.$parent.sections
				},

    			set: function(section) {
    				this.$parent.sections = section
    			}
    		}
    	}
    }
</script>