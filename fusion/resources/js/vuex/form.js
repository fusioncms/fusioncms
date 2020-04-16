export default {
  namespaced: true,

  state: {
    preventNavigation: false,
    confirmModalVisible: false,
    confirmModalCallback: null
  },

  getters: {
    preventNavigation: state => state.preventNavigation,
    confirmModalVisible: state => state.confirmModalVisible,
    confirmModalCallback: state => state.confirmModalCallback
  },

  mutations: {
    setPreventNavigation: (state, preventNavigation) => {
      state.preventNavigation = preventNavigation
    },

    setConfirmModalVisible: (state, confirmModalVisible) => {
      state.confirmModalVisible = confirmModalVisible
    },

    setConfirmModalCallback: (state, confirmModalCallback) => {
      state.confirmModalCallback = confirmModalCallback
    }
  }
}