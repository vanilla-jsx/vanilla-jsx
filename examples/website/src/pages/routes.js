const zhCn = [
    {
        path: '/zh-cn/',
        component: () => import('./zh-cn/jsx-runtime')
    },
    {
        path: '/zh-cn/component',
        component: () => import('./zh-cn/component')
    },
    {
        path: '/zh-cn/web-components',
        component: () => import('./zh-cn/web-components')
    },
]

export default [
    {
        path: '/',
        component: () => import('./en-us/jsx-runtime')
    },
    {
        path: '/component',
        component: () => import('./en-us/component')
    },
    {
        path: '/web-components',
        component: () => import('./en-us/web-components')
    },
    ...zhCn
]