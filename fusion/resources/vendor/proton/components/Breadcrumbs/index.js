import BreadcrumbDividerComponent from './Divider'
import BreadcrumbsComponent from './Breadcrumbs'
import BreadcrumbComponent from './Breadcrumb'

export default Vue => {
    Vue.component(BreadcrumbDividerComponent.name, BreadcrumbDividerComponent)
    Vue.component(BreadcrumbsComponent.name, BreadcrumbsComponent)
    Vue.component(BreadcrumbComponent.name, BreadcrumbComponent)
}