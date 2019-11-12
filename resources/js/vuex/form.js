export default {
  namespaced: true,

  state: {
    preventNavigation: false
  },

  getters: {
    preventNavigation: state => state.preventNavigation
  },

  mutations: {
    setPreventNavigation: (state, preventNavigation) => {
      state.preventNavigation = preventNavigation
    }
  }
}