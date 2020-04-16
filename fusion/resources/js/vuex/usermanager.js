export default {
	namespaced: true,

	state: {
		loading: true,
		users: [],
		roles: [],
		selected: [],
		search: '',
		role: null,
		sort: 'name',
		direction: 'asc',
		view: 'grid',
		currentPage: 1,
        totalPages: 1,
	},

	getters: {
        getLoading:   (state) => state.loading,
        getUsers:     (state) => state.users,
        getRoles:     (state) => state.roles,
        getSelected:  (state) => state.selected,
        
        getRole:      (state) => state.role,
        getSearch:    (state) => state.search,
        getSort:      (state) => state.sort,
        getDirection: (state) => state.direction,
        getView:      (state) => state.view,

        getCurrentPage: state => state.currentPage,
        getTotalPages:  state => state.currentPage,
    },

    mutations: {
    	setLoading(state, value) {
    		state.loading = value
    	},

    	setUsers(state, value) {
    		state.users = value
    	},
    	
    	addUser(state, value) {
    		state.users.push(value)
    	},

    	setRoles(state, value) {
    		state.roles = value
    	},

    	setSelected(state, value) {
    		state.users = value
    	},

    	toggleSelection(state, value) {
            state.selected = _.xor(state.selected, [value])
        },

        clearSelection(state) {
        	state.selected = []
        },

    	setSearch(state, value) {
    		state.search = value
    	},

    	setSort(state, value) {
    		state.sort = value
    	},

    	setDirection(state, value) {
    		state.direction = value
    	},

    	setRole(state, value) {
    		state.role = value
    	},

    	setView(state, value) {
    		state.view = value
    	},

    	setCurrentPage(state, value) {
    		state.currentPage = value
    	},

    	setTotalPages(state, value) {
    		state.totalPages = value
    	},
    },

    actions: {
    	setLoading(context, value) {
    		context.commit('setLoading', value)
    	},

    	setUsers(context, value) {
    		context.commit('setUsers', value)
    	},

    	addUser(context, value) {
    		context.commit('addUser', value)
    	},

    	setRoles(context, value) {
    		context.commit('setRoles', value)
    	},

    	setRole(context, value) {
    		context.commit('setRole', value)
    	},

    	setCurrentPage(context, value) {
            context.commit('setCurrentPage', value)
        },

        setTotalPages(context, value) {
            context.commit('setTotalPages', value)
        },

        toggleSelection(context, value) {
            context.commit('toggleSelection', value)
        },

        clearSelection(context) {
            context.commit('clearSelection')
        },

        setSearch(context, query) {
            context.commit('setSearch', query)
        },

        setRole(context, role) {
            context.commit('setRole', role)
        },

        setSort(context, sortBy) {
            context.commit('setSort', sortBy)
        },

        setDirection(context, direction) {
            context.commit('setDirection', direction)
        },

    	toggleView(context) {
            if (context.state.view === 'grid') {
                context.commit('setView', 'list')
            } else {
                context.commit('setView', 'grid')
            }
        },

        toggleDirection(context) {
            if (context.state.direction === 'asc') {
                context.commit('setDirection', 'desc')
            } else {
                context.commit('setDirection', 'asc')
            }
        },

        fetchUsers: _.throttle(function({ state, commit }) {
        	commit('setLoading', true)

            let endpoint = '/datatable/users'
        	let params   = {
                sort:    (state.direction === 'asc' ? '' : '-') + state.sort,
                page:    state.currentPage,
                perPage: state.perPage,
                filter: {},
            }

            if (state.role) {
                endpoint += `/${state.role}`
            }

            if (state.search !== '') {
                params['filter[search]'] = state.search
            }

        	axios.all([
        		axios.get(endpoint, { params: params }),
        		axios.get('/api/roles'),
        	]).then(axios.spread((users, roles) => {
        		commit('setUsers', users.data.records.data)
        		commit('setRoles', roles.data.data)
                commit('setTotalPages', users.data.records.data.last_page)
        		commit('setLoading', false)
        	}))
        }, 500),
    }
}