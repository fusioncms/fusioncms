<template>
	<div class="content-container">
		<form @submit.prevent="$parent.submit">
			<p-card>
			    <div class="row">
			        <div class="side-container">
			            <div class="xxl:mr-10">
			                <h3>General</h3>
			                <p class="text-sm">What will this fieldset be called?</p>
			            </div>
			        </div>

			        <div class="content-container">
			            <p-input
			                name="name"
			                label="Name"
			                help="What this fieldset will be called."
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
			                help="A developer-friendly variant of the fieldset's name."
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
			</p-card>

			<section-builder class="mt-6" v-model="sections" @input="$parent.sectionsChanged"></section-builder>

			<portal to="actions">
			    <router-link :to="{ name: 'fieldsets' }" class="button mr-3">Go Back</router-link>
			    <button type="submit" @click.prevent="$parent.submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save Fieldset</button>
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