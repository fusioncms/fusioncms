import store from '../vuex'

export default {
  beforeRouteLeave(to, from, next) {
    if (store.state.form.preventNavigation) {
      console.log('Navigation prevented')
      if (confirm('You have unsaved changes! Are you sure you want to leave? All changes will be discarded.')) {
        next()
      }
    } else {
      next()
    }
  }
}