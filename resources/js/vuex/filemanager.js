import _ from 'lodash'

export default {
    namespaced: true,

    state: {
        files: [],
        directories: [],
        selected: {
            files: [],
            directories: [],
        },
        currentDirectory: null,
        search: '',
        display: 'everything',
        sort: 'name',
        direction: 'asc',
        view: 'grid',
    },

    getters: {
        getFiles(state) {
            return state.files
        },

        getDirectories(state) {
            return state.directories
        },

        getView(state) {
            return state.view
        },

        getSearch(state) {
            return state.search
        },

        getCurrentDirectory(state) {
            return state.currentDirectory
        },

        getDisplay(state) {
            return state.display
        },

        getSort(state) {
            return state.sort
        },

        getDirection(state) {
            return state.direction
        },

        getSelectedFiles(state) {
            return state.selected.files
        },

        hasSelection(state) {
            return (state.selected.files.length + state.selected.directories.length) > 0
        },
    },

    mutations: {
        setFiles(state, files) {
            state.files = files
        },

        setDirectories(state, directories) {
            state.directories = directories
        },

        setView(state, view) {
            state.view = view
        },

        setSearch(state, query) {
            state.search = query
        },

        setDisplay(state, display) {
            state.display = display
        },

        setSort(state, sortBy) {
            state.sort = sortBy
        },

        setDirection(state, direction) {
            state.direction = direction
        },

        addFile(state, file) {
            state.files.push(file)
        },

        toggleFileSelection(state, file) {
            state.selected.files = _.xor(state.selected.files, [file])
        },

        clearFileSelection(state) {
            state.selected.files = []
        },

        removeFiles(state, files) {
            _.each(files, function(id) {
                let index = _.findIndex(state.files, function(file) {
                    return file.id == id
                })

                state.files.splice(index, 1)
            })
        },

        clearFiles(state) {
            state.files = []
        },
    },

    actions: {
        setFiles(context, files) {
            context.commit('setFiles', files)
        },

        addFile(context, file) {
            context.commit('addFile', file)
        },

        toggleFileSelection(context, file) {
            context.commit('toggleFileSelection', file)
        },

        clearFiles(context) {
            context.commit('clearFiles')
        },

        removeFiles(context, files) {
            context.commit('removeFiles', files)
        },

        isFileSelected(context, file) {
            return _.includes(context.state.files.selected, file)
        },

        clearFileSelection(context) {
            context.commit('clearFileSelection')
        },

        fetchFilesAndDirectories: _.throttle(function(context) {
            let params = {
                sort: context.state.sort,
                direction: context.state.direction,
            }
            
            if (context.state.display !== 'everything') {
                params.filter = context.state.display
            }
            
            if (context.state.search !== '') {
                params.search = context.state.search
            }
            
            axios.all([
                axios.get('/api/files', {params: params}),
                axios.get('/api/directories', {params: params}),
            ]).then(axios.spread(function (files, directories) {
                context.commit('setFiles', files.data.data)
                context.commit('setDirectories', directories.data.data)
            }))
        }, 500),
        

        fetchFiles() {
            // 
        },

        fetchDirectories() {
            // 
        },

        setSearch(context, query) {
            context.commit('setSearch', query)
        },

        setDisplay(context, display) {
            context.commit('setDisplay', display)
        },

        setSort(context, sortBy) {
            context.commit('setSort', sortBy)
        },

        setDirection(context, direction) {
            context.commit('setDirection', direction)
        },

        setDirectories(context, directories) {
            context.commit('setDirectories', directories)
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
    }
}