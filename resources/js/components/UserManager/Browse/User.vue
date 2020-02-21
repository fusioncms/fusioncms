<template>
	<div :class="[ view == 'grid' ? 'gallery-wrapper' : 'gallery-wrapper--row' ]">
		<div
            class="gallery-item"
            :class="{ 'gallery-item--selected selectable--selected': isSelected, 'selectable': isSelectable }"
            @dblclick="$emit('dblclick')"
            :data-selection="user.id">

            <div class="h-full w-full text-gray-300 flex items-center justify-center">
            	<fa-icon :icon="['fas', 'user']" class="fa-fw" :class="[ view == 'grid' ? 'fa-3x' : 'fa-2x']"></fa-icon>
            </div>
		</div>

		<div class="gallery-subtitle">
			<span>{{ user.name }}</span>
		</div>

		<div class="gallery-text" v-if="view == 'list'">
			<span v-if="user.roles.length">{{ user.roles[0].name }}</span>
			<span v-else>--</span>
		</div>

		<div class="gallery-text" v-if="view == 'list'">
			{{ $moment(user.created_at).format('MMM Do, YYYY') }}
		</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
		name: 'user-manager-user',

		props: {
			user: {
				type: Object,
				required: true,
			},

            isSelectable: {
            	type: Boolean,
            	default: true
            }
		},

		computed: {
            ...mapGetters({
                selected: 'usermanager/getSelected',
                view:     'usermanager/getView',
            }),

            isSelected() {
                return _.includes(this.selected, this.user.id)
            },
        }
    }
</script>