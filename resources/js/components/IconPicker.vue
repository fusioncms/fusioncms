<template>
	<div class="mb-6">
		<div class="flex w-full">
			<div class="form__group">
				<label for="search" class="form__label">&nbsp;</label>

				<div style="height: 42px; width: 42px;" class="p-2 flex items-center justify-center rounded border text-gray-600 mr-3 text-2xl">
					<fa-icon v-if="selected" :icon="selected" fixed-width></fa-icon>
				</div>
			</div>
			
			<div class="flex-1">
				<div class="form__group">
					<label
						class="form__label"
						:for="name"
						v-if="label"
						v-html="label">
					</label>

					<input
						class="form__control"
						:class="{'form__error': hasError}"
						:id="name"
						:name="name"
						type="text"
						:placeholder="placeholder"
						:readonly="readonly"
						:disabled="disabled"
						:autocomplete="autocomplete"
						:autofocus="autofocus"
						v-model="search"
						@focus="open"
						@blur="close"
						ref="search"
					>

					<div class="form__control--meta" v-if="help || errorMessage">
						<div class="form__help">
							<span v-if="help" v-html="help"></span>
							<span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
						</div>
					</div>
				</div>

				<div v-show="isOpen" class="card bg-gray-900 text-gray-400 overflow-auto z-10 mt-3" style="width: 548px; height: 500px;" ref="preview">
					<div v-for="category in filtered" :key="category.label">
						<div class="px-4 pt-4">
							<div class="border-b">
								<span class="leading-relaxed text-xs tracking-wider font-semibold uppercase">{{ category.label }}</span>
							</div>
						</div>

						<div class="px-3 py-4 text-2xl">
							<a href="#" @click.prevent="select(icon)" class="inline-flex p-2 m-1 bg-gray-900 rounded border-2 border-gray-600 text-gray-500 hover:text-gray-400" v-for="icon in category.icons" :key="icon">
								<fa-icon :icon="['far', icon]" fixed-width></fa-icon>

								<span class="text-xs ml-2">{{ icon }}</span>
							</a>
						</div>
					</div>
				</div>

			</div>
		</div>		
	</div>
</template>

<script>
	import _ from 'lodash'
	import Popper from 'popper.js'
	import icons from '../../metadata/fontawesome.js'

	export default {	
		data () {
			return {
				search: '',
				selected: '',
				filtered: icons,
				isOpen: false,
			};
		},


		props: {
			name: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: [String, Number],
                default: '',
            },
            type: {
                type: String,
                default: 'text',
            },
            required: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            monospaced: {
                type: Boolean,
                default: false,
            },
            hasError: {
                required: false,
                type: Boolean,
                default: false,
            },
            errorMessage: {
                required: false,
                type: String,
                default: '',
            },
            autocomplete: {
                required: false,
                type: String,
                default: '',
            },
            autofocus: {
                required: false,
                type: Boolean,
                default: false,
            },
		},

		computed: {
			fontawesome() {
				return icons
			},
		},

		watch: {
			search(value) {
				this.filter(value)
			},
		},

		methods: {
			filter: _.throttle(function(search) {
				let fontawesome = _.cloneDeep(this.fontawesome)

				_.map(fontawesome, (category) => {
					category['icons'] = category.icons.filter((icon) => {
						return icon.toLowerCase().startsWith(search.toLowerCase())
					})

					return category
				})

				fontawesome = _.filter(fontawesome, (category) => {
					return category.icons.length
				})

				this.filtered = fontawesome
			}, 250),

			select(icon) {
				this.$emit('input', icon)
                this.selected = icon
                // this.close()
			},

			open() {
				this.isOpen = true

				this.$nextTick(() => {
                    this.setupPopper()
                })
			},

			close() {
				if (this.isOpen) {
                    this.resetSearch()
                    
                    this.isOpen = false
                }
			},

			resetSearch() {
				this.search = ''
			},

			setupPopper() {
                if (this.popper === undefined) {
                    this.popper = new Popper(this.$refs.search, this.$refs.preview, {
                        placement: 'bottom'
                    })
                } else {
                    this.popper.scheduleUpdate()
                }
            },
		},

		beforeDestroy() {
            if (this.popper) {
                this.popper.destroy()
            }
        }
	}
</script>