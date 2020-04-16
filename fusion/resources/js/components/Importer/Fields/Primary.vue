<template>
	<div class="row form__group items-end">
		<div class="col flex-1">
			<label v-text="mapping.name"/>
			<span v-if="required" class="text-xs text-warning-700 float-right">required</span>
			
			<div v-if="help" role="alert" class="border-l-4 px-4 bg-secondary-100 border-secondary-500 text-xs">
				<p v-html="help"></p>
			</div>
		</div>
		<div class="col flex-1">
			<p-select
                :name="mapping.handle + '-column'"
                :options="__mappingOptions"
                v-model="mapping.column">
            </p-select>
		</div>
		<div class="col flex-1">
			<div role="alert" class="border-l-4 px-4 bg-warning-100 border-warning-500 text-xs">
				<p>This is the primary ID used for modifying existing content. Leave blank for new records.</p>
			</div>
		</div>
	</div>
</template>

<script>
	import FieldMixin from '../Mixins/fields'

	export default {
		name: 'mapper-field-primary',
		mixins: [ FieldMixin ],

		computed: {
			__mappingOptions: function() {
				return _.slice(this.mappingOptions, 2)
			}
		}
	}
</script>