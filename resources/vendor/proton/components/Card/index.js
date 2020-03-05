import CardComponent from './Card'
import CardBodyComponent from './CardBody'

export default Vue => {
    Vue.component(CardComponent.name, CardComponent)
    Vue.component(CardBodyComponent.name, CardBodyComponent)
}