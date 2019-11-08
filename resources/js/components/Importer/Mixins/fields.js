import { mapGetters, mapActions } from 'vuex'

export default {
	props:  {
		name: {
			type: String,
			required: true
		},

        help: {
            type: String,
            required: false,
            default: ''
        },

		required: {
			type: Boolean,
			required: false,
			default: false
		},

		cast: {
			type: String,
			required: true
		},

		settings: {
			type: Object,
			equired: false,
			default: () => {
				return {}
			}
		}
	},

	computed: {
		...mapGetters({
			mappingOptions: 'mapper/getMappingOptions',
			formMappings:   'mapper/getFormMappings',
			origMappings:   'mapper/getOrigMappings'
		}),

		handle: function() {
			return _.kebabCase(this.name)
		},

		mapping: function() {
			return this.formMappings[this.handle]
		}
	},

	methods: {
		...mapActions({
			setFormMapping: 'mapper/setFormMapping'
		})
	},

	created() {
		if (_.has(this.origMappings, this.handle)) {
			this.setFormMapping(this.origMappings[this.handle])
		} else {
			this.setFormMapping({
				name:     this.name,
				handle:   this.handle,
				cast:     this.cast,
				column:   this.handle,
				required: this.required,
				default:  (_.has(this.settings, 'default') ? this.settings.default : null),
			})
		}
	}
}