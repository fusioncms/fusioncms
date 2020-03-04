import RenderlessButtonComponent from './Button.vue'
import RenderlessDropdownComponent from './Dropdown.vue'
import RenderlessTableComponent from './Table.vue'

export default Vue => {
    Vue.component(RenderlessButtonComponent.name, RenderlessButtonComponent)
    Vue.component(RenderlessDropdownComponent.name, RenderlessDropdownComponent)
    Vue.component(RenderlessTableComponent.name, RenderlessTableComponent)
}