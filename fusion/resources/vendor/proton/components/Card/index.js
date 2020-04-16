import CardComponent from './Card'
import CardBodyComponent from './CardBody'
import CardHeaderComponent from './CardHeader'

export default Vue => {
    Vue.component(CardComponent.name, CardComponent)
    Vue.component(CardBodyComponent.name, CardBodyComponent)
    Vue.component(CardHeaderComponent.name, CardHeaderComponent)
}