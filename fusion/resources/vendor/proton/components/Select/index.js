import SelectComponent from './Select'
import OptionComponent from './Option'

export default Vue => {
    Vue.component(SelectComponent.name, SelectComponent)
    Vue.component(OptionComponent.name, OptionComponent)
}