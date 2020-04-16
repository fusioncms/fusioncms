import PaneComponent from './Pane'
import PaneTitleComponent from './Title'
import PaneSubtitleComponent from './Subtitle'

export default Vue => {
    Vue.component(PaneComponent.name, PaneComponent)
    Vue.component(PaneTitleComponent.name, PaneTitleComponent)
    Vue.component(PaneSubtitleComponent.name, PaneSubtitleComponent)
}