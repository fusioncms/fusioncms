import Router from 'vue-router'
import Vue from 'vue'
import { before, resolve, after } from './hooks'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: window.config.path,
    routes: [
        {
            path: '/',
            component: () => import('../views/Dashboard'),
            name: 'dashboard',
            meta: {
                requiresAuth: true,
                layout: 'admin',
                permission: 'access.admin'
            }
        },

        {
            path: '/login',
            component: () => import('../views/Auth/Login'),
            name: 'login',
            meta: {
                requiresAuth: false,
                layout: 'error'
            }
        },

        {
            path: '/personal-token',
            component: () => import('../views/Passport/Personal'),
            name: 'passport.personal',
            meta: {
                requiresAuth: true,
                layout: 'error'
            }
        },

        {
            path: '/insight',
            component: () => import('../views/SEO/Insight'),
            name: 'insight',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            },
        },

        {
            path: '/fieldsets',
            component: () => import('../views/Fieldsets/Index'),
            name: 'fieldsets',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/fieldsets/create',
            component: () => import('../views/Fieldsets/Create'),
            name: 'fieldsets.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/fieldsets/edit/:fieldset',
            component: () => import('../views/Fieldsets/Edit'),
            name: 'fieldsets.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/matrices',
            component: () => import('../views/Matrices/Index'),
            name: 'matrices',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/matrices/create',
            component: () => import('../views/Matrices/Create'),
            name: 'matrices.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/matrices/edit/:matrix',
            component: () => import('../views/Matrices/Edit'),
            name: 'matrices.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/pages/:page',
            component: () => import('../views/Pages/Edit'),
            name: 'pages.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/collections/:collection',
            component: () => import('../views/Collections/Index'),
            name: 'entries.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/collections/:collection/create',
            component: () => import('../views/Collections/Create'),
            name: 'entries.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/collections/:collection/edit/:id',
            component: () => import('../views/Collections/Edit'),
            name: 'entries.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/users',
            component: () => import('../views/Users/Index'),
            name: 'users',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/users/create',
            component: () => import('../views/Users/Create'),
            name: 'users.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/users/edit/:user',
            component: () => import('../views/Users/Edit'),
            name: 'users.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/users/:role',
            component: () => import('../views/Users/Index'),
            name: 'users.role',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/roles',
            component: () => import('../views/Roles/Index'),
            name: 'roles',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/roles/create',
            component: () => import('../views/Roles/Create'),
            name: 'roles.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/roles/edit/:role',
            component: () => import('../views/Roles/Edit'),
            name: 'roles.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/permissions',
            component: () => import('../views/Permissions'),
            name: 'permissions',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/settings',
            component: () => import('../views/Settings/Index'),
            name: 'settings',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/settings/cache',
            component: () => import('../views/Settings/Cache'),
            name: 'settings.cache',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/settings/fieldtypes',
            component: () => import('../views/Settings/Fieldtypes'),
            name: 'settings.fieldtypes',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/settings/:section',
            component: () => import('../views/Settings/Edit'),
            name: 'setting.section',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/themes',
            component: () => import('../views/Themes/Index'),
            name: 'themes.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/themes/settings',
            component: () => import('../views/Themes/Settings'),
            name: 'themes.settings',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/files',
            component: () => import('../views/FileManager/Index'),
            name: 'file-manager.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/files/preview/:uuid',
            component: () => import('../views/FileManager/Show'),
            name: 'file-manager.show',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/telescope',
            name: 'telescope',
            beforeEnter() { location.href = '/telescope/exceptions' },
        },

        {
            path: '/playground',
            component: () => import('../views/Playground'),
            name: 'playground',
            meta: {
                layout: 'admin'
            }
        },

        {
            path: '*',
            component: () => import('../views/404'),
            name: '404',
            meta: {
                layout: 'error'
            }
        },
    ],
})

router.beforeEach(before)
router.beforeResolve(resolve)
router.afterEach(after)

export default router
