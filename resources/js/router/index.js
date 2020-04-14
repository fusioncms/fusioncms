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
            path: '/fieldsets/:fieldset/edit',
            component: () => import('../views/Fieldsets/Edit'),
            name: 'fieldsets.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/taxonomies',
            component: () => import('../views/Taxonomies/Index'),
            name: 'taxonomies',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/taxonomies/create',
            component: () => import('../views/Taxonomies/Create'),
            name: 'taxonomies.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/taxonomies/:taxonomy/edit',
            component: () => import('../views/Taxonomies/Edit'),
            name: 'taxonomies.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/menus',
            component: () => import('../views/Menus/Index'),
            name: 'menus',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/menus/create',
            component: () => import('../views/Menus/Create'),
            name: 'menus.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/menus/:menu/edit',
            component: () => import('../views/Menus/Edit'),
            name: 'menus.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/menus/:menu/nodes',
            component: () => import('../views/Nodes/Index'),
            name: 'menu.nodes',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/menus/:menu/nodes/:node/edit',
            component: () => import('../views/Nodes/Edit'),
            name: 'menu.nodes.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
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
            path: '/matrices/:matrix/edit',
            component: () => import('../views/Matrices/Edit'),
            name: 'matrices.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/extensions',
            component: () => import('../views/Extensions/Index'),
            name: 'extensions',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/extensions/:extension/edit',
            component: () => import('../views/Extensions/Edit'),
            name: 'extensions.edit',
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
            path: '/collections/:collection/:id/edit',
            component: () => import('../views/Collections/Edit'),
            name: 'entries.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/taxonomies/:taxonomy',
            component: () => import('../views/Terms/Index'),
            name: 'terms.index',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/taxonomies/:taxonomy/create',
            component: () => import('../views/Terms/Create'),
            name: 'terms.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/taxonomies/:taxonomy/:id/edit',
            component: () => import('../views/Terms/Edit'),
            name: 'terms.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/forms',
            component: () => import('../views/Forms/Index'),
            name: 'forms',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/forms/create',
            component: () => import('../views/Forms/Create'),
            name: 'forms.create',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/forms/:form/edit',
            component: () => import('../views/Forms/Edit'),
            name: 'forms.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            },
        },
        {
            path: '/inbox',
            component: () => import('../views/Inbox/Index'),
            name: 'inbox',
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
            path: '/users/:user/edit',
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
            path: '/roles/:role/edit',
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
            path: '/files/:uuid',
            component: () => import('../views/FileManager/Show'),
            name: 'file-manager.show',
            meta: {
                requiresAuth: true,
                layout: 'admin',
            }
        },
        {
            path: '/logs',
            component: () => import('../views/Logs/Index'),
            name: 'logs.index',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },
        {
            path: '/telescope',
            name: 'telescope',
            beforeEnter() { location.href = '/telescope/exceptions' },
        },

        {
            path: '/importer',
            component: () => import('../views/Importer/Index'),
            name: 'importer',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/importer/create',
            component: () => import('../views/Importer/Create'),
            name: 'importer.create',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/importer/:importer/edit',
            component: () => import('../views/Importer/Edit'),
            name: 'importer.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/importer/:importer/view',
            component: () => import('../views/Importer/View'),
            name: 'importer.view',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/importer/:importer/mapping',
            component: () => import('../views/Importer/Mapping'),
            name: 'importer.mapping',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/backups',
            component: () => import('../views/Backups/Index'),
            name: 'backups',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/mailables',
            component: () => import('../views/Mailables/Index'),
            name: 'mailables',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/mailables/:mailable/edit',
            component: () => import('../views/Mailables/Edit'),
            name: 'mailables.edit',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/styleguide',
            component: () => import('../views/Styleguide/Index'),
            name: 'styleguide',
            meta: {
                requiresAuth: true,
                layout: 'admin'
            }
        },

        {
            path: '/styleguide/tables',
            component: () => import('../views/Styleguide/Tables'),
            name: 'styleguide.tables',
            meta: {
                requiresAuth: true,
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
