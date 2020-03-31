import store from '../vuex'

export default {
  beforeRouteLeave(to, from, next) {
    if (store.state.form.preventNavigation) {
      store.commit('form/setConfirmModalVisible', true)
      store.commit('form/setConfirmModalCallback', next)
    } else {
      next()
    }
  }
}