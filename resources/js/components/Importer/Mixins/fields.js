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

		defaultValue: {
			type: String,
			required: false,
			default: null
		},

		defaultOptions: {
			type: Array,
			required: false,
			default: () => {
				return []
			}
		}
	},

	computed: {
		...mapGetters({
			mappingOptions: 'mapper/getMappingOptions',
			mappings: 'mapper/getFormMappings'
		}),

		handle: function() {
			return _.kebabCase(this.name)
		},

		mapping: function() {
			return this.mappings[this.handle]
		}
	},

	methods: {
		...mapActions({
			setFormMapping: 'mapper/setFormMapping'
		})
	},

	created() {
		if (! _.has(this.mappings, this.handle)) {
			this.setFormMapping({
				name:     this.name,
				handle:   this.handle,
				column:   this.handle,
				required: this.required,
				default:  this.defaultValue
			})
		}
	}
}