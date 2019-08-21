window.proton = function() {
    return Vue.prototype.$proton
}

window.toast = function (message, level) {
    proton().$emit('toast', {
        message,
        level
    })
}