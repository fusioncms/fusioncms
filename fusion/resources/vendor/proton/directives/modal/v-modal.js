import EventBus from '../../support/eventbus'

function bind(el, binding, vnode) {
    el.addEventListener('click', (e) => {
        vnode.context.$proton.$emit('toggle-modal-' + binding.arg, binding.value)
    })
}

const directive = {
    bind
}

export default (typeof window !== 'undefined' ? directive : {})