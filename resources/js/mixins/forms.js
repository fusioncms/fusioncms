import store from '../vuex'
import ConfirmModal from '../components/Modals/ConfirmModal'

export default {
  beforeRouteLeave(to, from, next) {
    if (store.state.form.preventNavigation) {
      console.log('Navigation prevented')

      store.commit('form/setConfirmModalVisible', true)
      store.commit('form/setConfirmModalCallback', next)

      // if (confirm('You have unsaved changes! Are you sure you want to leave? All changes will be discarded.')) {
      //   next()
      // }
    } else {
      next()
    }
  }
}