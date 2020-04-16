let EventBusPlugin = {}

EventBusPlugin.install = function(Vue) {
    let EventBus = new Vue

    Object.defineProperty(Vue.prototype, '$proton', {
        get() {
            return EventBus
        },
    })
}

export default EventBusPlugin