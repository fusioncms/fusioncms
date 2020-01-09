import _ from 'lodash'

export default {
    namespaced: true,

    state: {
        loading: true,
        files: [],
        directories: [],
        selected: {
            files: [],
            directories: [],
        },
        currentDirectory: null,
        parentDirectory: null,
        search: '',
        display: 'everything',
        sort: 'name',
        direction: 'asc',
        view: 'grid',
        currentPage: 1,
        totalPages: 1,
        uploadProgress: 0,
        uploadsVisible: false,
        uploadsMinimized: false,
        fileUploads: [],
        dropzoneVisible: false
    },

    getters: {
        getLoading(state) {
            return state.loading
        },

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
        
        getParentDirectory(state) {
            return state.parentDirectory
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

        getSelectedDirectories(state) {
            return state.selected.directories
        },

        hasSelection(state) {
            return (state.selected.files.length + state.selected.directories.length) > 0
        },

        getCurrentPage(state) {
            return state.currentPage
        },

        getTotalPages(state) {
            return state.totalPages
        },

        getUploadProgress(state) {
            return state.uploadProgress
        },

        getUploadsVisible(state) {
            return state.uploadsVisible
        },

        getUploadsMinimized(state) {
            return state.uploadsMinimized
        },

        getFileUploads(state) {
            return state.fileUploads
        },

        getDropzoneVisible(state) {
            return state.dropzoneVisible
        }
    },

    mutations: {
        setLoading(state, loading) {
            state.loading = loading
        },

        setFiles(state, files) {
            state.files = files
        },

        setDirectories(state, directories) {
            state.directories = directories
        },

        setCurrentDirectory(state, directory) {
            state.currentDirectory = directory
        },

        setParentDirectory(state, directory) {
            state.parentDirectory = directory
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

        toggleDirectorySelection(state, directory) {
            state.selected.directories = _.xor(state.selected.directories, [directory])
        },

        clearDirectorySelection(state) {
            state.selected.directories = []
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

        setCurrentPage(state, page) {
            state.currentPage = page
        },

        setTotalPages(state, pages) {
            state.totalPages = pages
        },

        setUploadProgress(state, progress) {
            state.uploadProgress = progress
        },

        setUploadsMinimized(state, value) {
            state.uploadsMinimized = value
        },

        setUploadsVisible(state, value) {
            state.uploadsVisible = value
        },

        setFileUploads(state, files) {
            state.fileUploads  = files
        },

        addFileUpload(state, file) {
            state.fileUploads.push(file)
        },
        setDropzoneVisible(state, value) {
            state.dropzoneVisible = value
        },
    },

    actions: {
        setLoading(context, loading) {
            context.commit('setLoading', loading)
        },

        setFiles(context, files) {
            context.commit('setFiles', files)
        },

        setDirectory(context, directory) {
            context.commit('setDirectory', directory)
        },

        addFile(context, file) {
            context.commit('addFile', file)
        },

        toggleFileSelection(context, file) {
            context.commit('toggleFileSelection', file)
        },

        toggleDirectorySelection(context, directory) {
            context.commit('toggleDirectorySelection', directory)
        },

        clearFiles(context) {
            context.commit('clearFiles')
        },

        removeFiles(context, files) {
            context.commit('removeFiles', files)
        },

        isFileSelected(context, file) {
            console.log(context.state.selected.files, file)
            return false
            return _.includes(context.state.selected.files, file)
        },

        isDirectorySelect(context, directory) {
            return _.includes(context.state.selected.directories, directory)
        },

        clearFileSelection(context) {
            context.commit('clearFileSelection')
        },

        clearDirectorySelection(context) {
            context.commit('clearDirectorySelection')
        },

        fetchFilesAndDirectories: _.throttle(function(context) {
            context.commit('setLoading', true)

            let params = {
                sort: context.state.sort,
                direction: context.state.direction,
                page: context.state.currentPage,
            }

            if (context.state.currentDirectory !== null) {
                params.directory = context.state.currentDirectory
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

                context.commit('setTotalPages', files.data.meta.last_page)

                setTimeout(() => {
                    context.commit('setLoading', false)
                }, 25)
            }))
        }, 500),

        moveFileToDirectory({ commit, state }, payload) {
            commit('setLoading', true)

            axios.all([
                axios.post('/api/files/move', {
                    directory: payload.directory,
                    files:     payload.files
                })
            ]).then(axios.spread(function (directory) {
                commit('setLoading', false)

                // update file count
                _.find(state.directories, (o) => {
                    if (o.id == payload.directory) {
                        o.files_count += payload.files.length
                    }
                })
            }))
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

        setCurrentDirectory(context, directory) {
            context.commit('setCurrentDirectory', directory)
        },

        setParentDirectory(context, directory) {
            context.commit('setParentDirectory', directory)
        },

        setCurrentPage(context, page) {
            context.commit('setCurrentPage', page)
        },

        setTotalPages(context, pages) {
            context.commit('setTotalPages', pages)
        },

        setUploadProgress(context, progress) {
            context.commit('setUploadProgress', progress)
        },

        setUploadsVisible(context, value) {
            context.commit('setUploadsVisible', value)
        },

        setUploadsMinimized(context, value) {
            context.commit('setUploadsMinimized', value)
        },

        setFileUploads(context, files) {
            context.commit('fileUploads', files)
        },

        addFileUpload(context, file) {
            context.commit('addFileUpload', file)
        },

        setDropzoneVisible(context, value) {
            context.commit('setDropzoneVisible', value)
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