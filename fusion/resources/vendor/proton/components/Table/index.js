import TableComponent from './Table'
import ActionsComponent from './Actions'
import StatusComponent from './Status'

export default Vue => {
    Vue.component(TableComponent.name, TableComponent)
    Vue.component(ActionsComponent.name, ActionsComponent)
    Vue.component(StatusComponent.name, StatusComponent)
}