export default {
    namespaced: true,

    state: {
        mappingOptions: [],
        formMappings: {}
    },

    getters: {
        getMappingOptions(state) {
            return state.mappingOptions
        },

        getFormMappings(state) {
            return state.formMappings
        },

        getFormMappings(state) {
            return state.formMappings
        }
    },

    mutations: {
        setMappingOptions(state, value) {
            state.mappingOptions = value
        },

        setFormMapping(state, value) {
            state.formMappings = _.assign({ [value.handle]: value }, state.formMappings)
            //state.formMappings[value.handle] = value
        },

        setFormMappings(state, value) {
            state.formMappings = value
        }
    },

    actions: {
        setMappingOptions(context, value) {
            context.commit('setMappingOptions', value)
        },

        setFormMapping(context, value) {
            context.commit('setFormMapping', value)
        },

        setFormMappings(context, value) {
            context.commit('setFormMappings', value)
        }
    }
}