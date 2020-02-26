import DropdownComponent from './Dropdown'
import DropdownItemComponent from './DropdownItem'
// import DropdownLinkComponent from './DropdownLink'
import DropdownDividerComponent from './DropdownDivider'
import RenderlessDropdownComponent from './RenderlessDropdown'

export default Vue => {
    Vue.component(DropdownComponent.name, DropdownComponent)
    Vue.component(DropdownItemComponent.name, DropdownItemComponent)
    // Vue.component(DropdownLinkComponent.name, DropdownLinkComponent)
    Vue.component(DropdownDividerComponent.name, DropdownDividerComponent)
    Vue.component(RenderlessDropdownComponent.name, RenderlessDropdownComponent)
}