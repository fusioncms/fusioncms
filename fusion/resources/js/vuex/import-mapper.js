export default {
    namespaced: true,

    state: {
        mappingOptions: [],
        formMappings: {},
        origMappings: {},
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
        },

        getOrigMappings(state) {
            return state.origMappings
        }
    },

    mutations: {
        setMappingOptions(state, value) {
            state.mappingOptions = value
        },

        setFormMapping(state, value) {
            state.formMappings = _.assign({ [value.handle]: value }, state.formMappings)
        },

        setFormMappings(state, value) {
            state.formMappings = value
        },

        setOrigMappings(state, value) {
            state.origMappings = value
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
        },

        setOrigMappings(context, value) {
            context.commit('setOrigMappings', value)
        }
    }
}