import store from '../vuex'

export default {
  beforeRouteLeave(to, from, next) {
    if (store.state.form.preventNavigation) {
      console.log('Navigation prevented')
    } else {
      next()
    }
  }
}