import DropdownComponent from './Dropdown'
import DropdownItemComponent from './DropdownItem'
import DropdownLinkComponent from './DropdownLink'
import DropdownDividerComponent from './DropdownDivider'

export default Vue => {
    Vue.component(DropdownComponent.name, DropdownComponent)
    Vue.component(DropdownItemComponent.name, DropdownItemComponent)
    Vue.component(DropdownLinkComponent.name, DropdownLinkComponent)
    Vue.component(DropdownDividerComponent.name, DropdownDividerComponent)
}