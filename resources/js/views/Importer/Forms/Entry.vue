<template>
	<form @submit.prevent="submit">
		<p-card>
			<div class="row">
				<div class="col w-full xxl:w-2/3">
					<p-input
						name="name"
						label="Name"
						help="What this import feed be called."
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
						help="Unique identifier to index this import feed."
						autocomplete="off"
						required
						delimiter="_"
						:watch="form.name"
						:has-error="form.errors.has('handle')"
						:error-message="form.errors.get('handle')"
						v-model="form.handle">
					</p-slug>

					<p-input
						name="location"
						label="Location"
						help="File location import will reference."
						autocomplete="off"
						required
						:has-error="form.errors.has('location')"
						:error-message="form.errors.get('location')"
						v-model="form.location">
					</p-input>

					<p-select
                        name="module"
                        label="Module"
                        help="Which module do you wish to import to?"
                        :options="[
                            {
                                'label': 'Users',
                                'value': 'users',
                            }
                        ]"
                        :has-error="form.errors.has('module')"
                        :error-message="form.errors.get('module')"
                        v-model="form.module">
                    </p-select>

                    <p-checkbox-group
							label="Strategy"
							help="Strategy used when matching record is detected or missing from import (based on an unique identifier)."
							:has-error="form.errors.has('strategy')"
							:error-message="form.errors.get('strategy')">
						<p-checkbox name="create" id="create" native-value="Create" v-model="form.strategy">
							Create <span class="text-gray-500 italic">- Adds new elements if they do not already exist.</span>
						</p-checkbox>
						<p-checkbox name="update" id="update" native-value="Update" v-model="form.strategy">
							Update <span class="text-gray-500 italic">- Updates elements when matching record is found.</span>
						</p-checkbox>
						<p-checkbox name="disable" id="disable" native-value="Disable" v-model="form.strategy">
							Disable <span class="text-gray-500 italic">- Disables any elements that are missing from the import.</span>
						</p-checkbox>
						<p-checkbox name="delete" id="delete" native-value="Delete" v-model="form.strategy">
							Delete <span class="text-gray-500 italic">- Deletes any elements that are missing from the import.</span>
						</p-checkbox>
					</p-checkbox-group>


                    <!--
                    <p-toggle
                    	name="backup"
                    	label="Backup"
                    	help="Backup data before importing?"
                    	v-model="form.backup">
                    </p-toggle>
                	-->

				</div>
			</div>
		</p-card>
	</form>
</template>

<script>
	export default {
		props: {
			form: {
				type: Object,
				required: true
			}
		}
	}
</script>