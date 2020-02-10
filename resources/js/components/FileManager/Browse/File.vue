<template>
	<div class="gallery-wrapper flex-auto">
		<div
            class="gallery-item"
            :class="{ 'gallery-item--selected': isSelected }"
            @dblclick="$emit('dblclick')"
            :data-file="file.id"
            :draggable="true">

			<p-img
				src="/img/image-large.svg"
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

		<div class="flex flex-col text-center text-xs text-gray-600 mt-2 font-mono">
			<span>{{ file.bytes | bytes }}</span>
			<span>{{ file.extension }}</span>
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
			}
		},

		computed: {
            ...mapGetters({
                selected: 'filemanager/getSelectedFiles'
            }),

            isSelected() {
                return _.includes(this.selected, this.file.id)
            },

			type() {
				return (_.split(this.file.mimetype, '/', 1))[0]
			},

			fileSrc() {
				switch(this.type) {
					case 'image':
						return `${this.file.url}?w=100&h=100&fit=crop&t=${this.$moment.utc(this.file.updated_at)}`
					case 'audio':
					case 'video':
						return `/img/${this.type}-large.svg`
					case 'application':
					case 'text':
						return '/img/document-large.svg'
					default:
						return '/img/misc-large.svg'
				}
			}
        },
        methods:{
        	foo(){
        		console.log('click')
        	}
        }
    }
</script>