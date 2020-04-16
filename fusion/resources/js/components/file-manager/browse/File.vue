<template>
	<div :class="[ view == 'grid' ? 'gallery-wrapper' : 'gallery-wrapper--row' ]">
		<div
            class="gallery-item"
            :class="{ 'gallery-item--selected selectable--selected': isSelected, 'selectable': isSelectable }"
            @dblclick="$emit('dblclick')"
            :data-selection="file.id"
            :draggable="isDraggable">

			<p-img
				src="/vendor/fusion/img/image-large.svg"
				background-color="white"
				class="gallery-image"
				:lazySrc="fileSrc"
				:width="100"
				:height="100"
				:alt="file.description"
				:draggable="false">
			</p-img>
		</div>

		<quick-edit
			:file="file"
			:endpoint="'/api/files/' + file.id">
		</quick-edit>

		<div class="gallery-subtitle">
			<span>{{ file.bytes | bytes }}</span>
			<span>{{ file.extension }}</span>
		</div>

		<div class="gallery-text" v-if="view == 'list'">
			{{ file.mimetype }}
		</div>

		<div class="gallery-text" v-if="view == 'list'">
			{{ $moment(file.updated_at).format('MMM Do, YYYY') }}
		</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
		name: 'file-manager-file',

		components: {
			'quick-edit': require('../Actions/QuickEdit.vue').default
		},

		mixins: [
		    require('../../../mixins/filehelper').default
		],

		props: {
			file: {
				type: Object,
				required: true,
			},

			isDraggable: {
            	type: Boolean,
            	default: true
            },

            isSelectable: {
            	type: Boolean,
            	default: true
            }
		},

		computed: {
            ...mapGetters({
                selected: 'filemanager/getSelectedFiles',
                view:     'filemanager/getView',
            }),

            isSelected() {
                return _.includes(this.selected, this.file.id)
            },

			fileSrc() {
				switch(this.file.type) {
					case 'image':
						return `${this.file.url}?w=100&h=100&fit=crop&t=${this.$moment.utc(this.file.updated_at)}`
					default:
						return `/vendor/fusion/img/${this.file.type}-large.svg`
				}
			}
        }
    }
</script>