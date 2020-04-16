import CheckboxComponent from './Checkbox'
import CheckboxGroupComponent from './CheckboxGroup'

export default Vue => {
    Vue.component(CheckboxComponent.name, CheckboxComponent)
    Vue.component(CheckboxGroupComponent.name, CheckboxGroupComponent)
}