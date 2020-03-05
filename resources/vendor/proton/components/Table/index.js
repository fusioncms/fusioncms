import TableComponent from './Table'
import ActionsComponent from './Actions'

export default Vue => {
    Vue.component(TableComponent.name, TableComponent)
    Vue.component(ActionsComponent.name, ActionsComponent)
}