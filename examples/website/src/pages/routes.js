import enUs from './en-us/routes';
import zhCn from './zh-cn/routes';
import playground from './playground';

export default [
    {
        path: '/playground',
        component: () => ({
            default: playground
        })
    },
    ...enUs,
    ...zhCn
]
