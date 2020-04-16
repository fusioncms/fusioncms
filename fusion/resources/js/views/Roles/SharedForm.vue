<template>
	<form-container>
        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'roles' }" class="button">Go Back</router-link>
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

				<p-textarea
					name="description"
					label="Description"
					autocomplete="off"
					:has-error="form.errors.has('description')"
					:error-message="form.errors.get('description')"
					required
					v-model="form.description"
					:rows="2">
				</p-textarea>
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

					<p-select
	                    name="special"
	                    label="Special Flag"
	                    :options="flags"
	                    autocomplete="off"
	                    :has-error="form.errors.has('special')"
	                    :error-message="form.errors.get('special')"
	                    required
	                    v-model="form.special">
	                </p-select>
				</div>
			</div>

			<p-definition-list v-if="role">
                <p-definition name="Created At">
                    {{ $moment(role.created_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

                <p-definition name="Updated At">
                    {{ $moment(role.updated_at).format('Y-MM-DD, hh:mm a') }}
                </p-definition>

				<p-definition name="Special Flag">
                    {{ special }}
                </p-definition>
            </p-definition-list>
		</template>
	</form-container>
</template>

<script>
    export default {
    	props: {
			role: {
				type: Object,
				required: false,
			},

    		form: {
    			type: Object,
    			required: true,
			},

    		flags: {
    			type: Array,
    			required: true
			},

			submit: {
                required: true,
            },
		},

		computed: {
			special() {
				if (this.role.special) {
					return _.startCase(this.role.special)
				}

				return 'None';
			}
		}
    }
</script>