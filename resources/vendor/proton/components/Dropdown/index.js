import DropdownComponent from './Dropdown'
import DropdownItemComponent from './DropdownItem'
import RenderlessDropdownComponent from './RenderlessDropdown'

export default Vue => {
    Vue.component(DropdownComponent.name, DropdownComponent)
    Vue.component(DropdownItemComponent.name, DropdownItemComponent)
    Vue.component(RenderlessDropdownComponent.name, RenderlessDropdownComponent)
}