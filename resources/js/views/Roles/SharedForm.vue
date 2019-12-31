<template>
	<div class="content-container">
	    <form @submit.prevent="$parent.submit" @input.once="form.onFirstChange">
	        <p-card>
	            <div class="row">
	                <div class="col form-sidebar">
	                    <div class="xl:mr-10">
	                        <h3>Basic Information</h3>
	                        <p class="text-sm">What is the name and description of this role?</p>
	                    </div>
	                </div>

	                <div class="col form-content">
	                    <p-input
	                        name="name"
	                        label="Name"
	                        autocomplete="off"
	                        :has-error="form.errors.has('name')"
	                        :error-message="form.errors.get('name')"
	                        autofocus
	                        required
	                        v-model="form.name">
	                    </p-input>

	                    <p-slug
	                        name="slug"
	                        label="Slug"
	                        autocomplete="off"
	                        :has-error="form.errors.has('slug')"
	                        :error-message="form.errors.get('slug')"
	                        required
	                        :watch="form.name"
	                        v-model="form.slug">
	                    </p-slug>

	                    <p-input
	                        name="description"
	                        label="Description"
	                        autocomplete="off"
	                        :has-error="form.errors.has('description')"
	                        :error-message="form.errors.get('description')"
	                        required
	                        v-model="form.description">
	                    </p-input>
	                </div>
	            </div>

	            <hr>

	            <div class="row">
	                <div class="col form-sidebar">
	                    <div class="xl:mr-10">
	                        <h3>Attributes</h3>
	                        <p class="text-sm">Assign any additional attribute values for your role.</p>
	                    </div>
	                </div>

	                <div class="col form-content">
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
	        </p-card>

	        <portal to="actions">
	            <router-link :to="{ name: 'roles' }" class="button mr-3">Go Back</router-link>
	            <button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save Role</button>
	        </portal>
	    </form>
	</div>
</template>

<script>
    export default {
    	props: {
    		form: {
    			type: Object,
    			required: true,
    		},
    		flags: {
    			type: Array,
    			required: true
    		}
    	}
    }
</script>