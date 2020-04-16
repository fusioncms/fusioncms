import DefinitionListComponent from './DefinitionList'
import DefinitionComponent from './Definition'

export default Vue => {
    Vue.component(DefinitionListComponent.name, DefinitionListComponent)
    Vue.component(DefinitionComponent.name, DefinitionComponent)
}