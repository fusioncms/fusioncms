<template>
	<div class="card h-full">
		<div v-if="hasHeader" class="flex items-center justify-between border-b border-gray-200 p-3">
			<p-button @click="$emit('reject')" theme="warning"><fa-icon :icon="['fas', 'times']" class="mr-2"></fa-icon> Reject</p-button>
			<p-button @click="$emit('accept')" theme="info">Accept <fa-icon :icon="['fas', 'check']" class="ml-2"></fa-icon></p-button>
		</div>

		<div v-if="selection.length > 0">
			<p-sortable-list v-model="selection" class="sortable-list">
				<div class="w-full p-3">
					<p-sortable-item v-for="file in selection" :key="file.id">
						<div class="flex items-center py-2">
							<div class="w-1/12">
								<p-sortable-handle class="cursor-move">
									<fa-icon icon="ellipsis-v" class="handle fa-fw text-gray-400"></fa-icon>
								</p-sortable-handle>
							</div>
							<div class="w-3/12">
								<p-img v-if="file.type == 'image'" :src="file.url + '?w=50&h=50&fit=crop'" background-color="white" :width="50" :height="50"></p-img>
								<p-img v-else :src="'/vendor/fusion/img/' + file.type + '-large.svg'" background-color="white" :width="50" :height="50"></p-img>
							</div>
							<div class="w-6/12">
								<div>{{ file.name }}</div>
							</div>
							<div class="w-2/12 text-right">
								<p-button @click="remove(file.id)" theme="danger"><fa-icon :icon="['fas', 'trash']"></fa-icon></p-button>
							</div>
						</div>
					</p-sortable-item>
				</div>
			</p-sortable-list>

			<div v-if="addLimit <= 0" class="text-sm italic text-danger-600 text-center">
				File limit reached
			</div>
		</div>

		<div v-else class="h-full flex flex-col justify-center items-center text-5xl text-gray-300">
			<fa-icon :icon="['far', 'copy']" class="fa-fw fa-3x"></fa-icon>
			<span class="text-lg py-2 text-gray-500">Select some files...</span>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			selection: {
				get() {
					return this.value
				},

				set(value) {
					this.$emit('input', value)
				}
			},

			addLimit() {
				return this.limit - this.selection.length
			},
		},

		props: {
			value: {
				type: Array,
				required: true
			},

			limit: {
				type: Number,
				default: Infinity
			},

			hasHeader: {
				type: Boolean,
				default: true
			}
		},

		methods: {
			remove(id) {
				this.selection = _.filter(this.selection, (item) => { return item.id !== id })
			}
		}
	}
</script>