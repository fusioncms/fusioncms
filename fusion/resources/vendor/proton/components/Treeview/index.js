import TreeviewComponent from './Treeview'
import TreeviewNodeComponent from './TreeviewNode'

export default Vue => {
    Vue.component(TreeviewComponent.name, TreeviewComponent)
    Vue.component(TreeviewNodeComponent.name, TreeviewNodeComponent)
}