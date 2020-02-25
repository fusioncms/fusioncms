import SortableHandleComponent from './SortableHandle'
import SortableItemComponent from './SortableItem'
import SortableListComponent from './SortableList'

export default Vue => {
    Vue.component(SortableHandleComponent.name, SortableHandleComponent)
    Vue.component(SortableItemComponent.name, SortableItemComponent)
    Vue.component(SortableListComponent.name, SortableListComponent)
}