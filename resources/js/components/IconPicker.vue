<template>
	<div class="form__group">
		<div class="w-full">
			<label
				class="form__label"
				:for="name"
				v-if="label"
				v-html="label">
			</label>

			<div class="flex w-full" v-click-outside="close">
				<button
					style="height: 42px; width: 42px;"
					class="p-2 flex items-center justify-center rounded border border-gray-400 text-gray-600 mr-3 text-2xl focus:outline-none"
					:class="{'pattern-checkers': ! selected}"
					@click.prevent="open">
					<fa-icon v-if="selected" :icon="['fas', selected]" fixed-width></fa-icon>
				</button>
				
				<div class="flex-1">
					<div class="form__group relative">
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
							@keydown.esc="close"
							ref="search"
						>

						<div v-show="isOpen" class="form__select-dropdown overflow-y-scroll" style="height: 500px;" ref="dropdown" @keydown.esc="close">
							<div v-for="category in filtered" :key="category.label">
								<div class="px-4 pt-4">
									<div class="border-b">
										<span class="leading-relaxed text-xs tracking-wider font-semibold uppercase">{{ category.label }}</span>
									</div>
								</div>

								<div class="px-3 py-4 text-2xl">
									<a href="#" @click.prevent="select(icon)" class="inline-flex bg-white p-2 m-1 rounded border-2 border-gray-300 text-gray-600 hover:text-gray-900" v-for="icon in category.icons" :key="icon">
										<fa-icon :icon="['fas', icon]" fixed-width></fa-icon>

										<span class="text-xs ml-2">{{ icon }}</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="form__control--meta" v-if="help || errorMessage">
				<div class="form__help">
					<span v-if="help" v-html="help"></span>
					<span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
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
                type: String,
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

			value(value) {
				this.selected = value
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
                this.close()
			},

			open() {
				this.isOpen = true

				this.$nextTick(() => {
					this.$refs.search.focus()
                    this.setupPopper()
                })
			},

			close() {
				if (this.isOpen) {
					this.search = ''
					this.isOpen = false
					
					this.$nextTick(() => {
						this.$refs.search.blur()
					})
                }
			},

			setupPopper() {
                if (this.popper === undefined) {
                    this.popper = new Popper(this.$refs.search, this.$refs.dropdown, {
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
		},
		
		mounted() {
			if (this.value) {
				this.selected = this.value
			}
		}
	}
</script>