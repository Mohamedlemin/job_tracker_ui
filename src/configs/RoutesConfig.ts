import React, { LazyExoticComponent } from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'


interface IRoute {
    key: string;
    path: string;
    component: LazyExoticComponent<any>;
    meta?: any
}

export const publicRoutes: IRoute[] = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes: IRoute[] = [
    {
        key: 'dashboard.default',
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        component: React.lazy(() => import('views/app-views/dashboards/default')),
    }, {
        key: "clients.list",
        path: `${APP_PREFIX_PATH}/clients`,
        component: React.lazy(() => import('views/app-views/clients/List'))
    }
]