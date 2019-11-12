import store from '../vuex'
import ConfirmModal from '../components/Modals/ConfirmModal'

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