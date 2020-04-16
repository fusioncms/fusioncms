import TabComponent from './Tab'
import TabsComponent from './Tabs'

export default Vue => {
    Vue.component(TabsComponent.name, TabsComponent)
    Vue.component(TabComponent.name, TabComponent)
}