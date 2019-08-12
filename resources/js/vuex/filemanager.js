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
    },

    getters: {
        getFiles(state) {
            return state.files
        },

        getDirectories(state) {
            return state.directories
        },

        getSelectedFiles(state) {
            return state.selected.files
        },
    },

    mutations: {
        setFiles(state, files) {
            state.files = files
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
    }
}