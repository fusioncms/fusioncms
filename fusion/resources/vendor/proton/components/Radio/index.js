import RadioComponent from './Radio'
import RadioGroupComponent from './RadioGroup'
import RenderlessRadioComponent from './RenderlessRadio'

export default Vue => {
    Vue.component(RadioComponent.name, RadioComponent)
    Vue.component(RadioGroupComponent.name, RadioGroupComponent)
    Vue.component(RenderlessRadioComponent.name, RenderlessRadioComponent)
}