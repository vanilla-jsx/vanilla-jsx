const routes = [
    {
        path: '/',
        component: () => import('./index.mdx')
    },
    {
        path: '/Lowercase',
        component: () => import('./Lowercase.mdx')
    },
    {
        path: '/Kebabcase',
        component: () => import('./Kebabcase.mdx')
    },
    {
        path: '/PascalCase',
        component: () => import('./PascalCase.mdx')
    },
    {
        path: '/mdx',
        component: () => import('./mdx.mdx')
    },
    {
        path: '/component',
        component: () => import('./component')
    },
]

export default routes.map((ele) => {
    const basePath = '/zh-cn';
    return {
        ...ele,
        path: `${basePath}${ele.path}`,
        component: async () => {
            const { default: Page } = await ele.component();
            return {
                default: () => <>
                    <aside class="sidebar">
                        <h1 class="app-name">
                            <a class="app-name-link" href={`#${basePath}/`}>
                                Vanilla-jsx
                            </a>
                        </h1>
                        <div class="sidebar-nav">
                            <ul>
                                <li>
                                    <p>准备开始</p>
                                    <ul>
                                        <li>
                                            <a href={`#${basePath}/`}>快速入门</a>
                                        </li>
                                        <li>
                                            <a href={`#${basePath}/Lowercase`}>小写标签表示 HTML Tag</a>
                                        </li>
                                        <li>
                                            <a href={`#${basePath}/Kebabcase`}>中横线连接表示 WebComponents</a>
                                        </li>
                                        <li>
                                            <a href={`#${basePath}/PascalCase`}>大驼峰表示 FunctionExec</a>
                                        </li>
                                        {/* <li>
                                            <a href={`#${basePath}/component`}>@vanilla-jsx/component</a>
                                        </li> */}
                                    </ul>
                                </li>
                                <li>
                                    <p>进阶</p>
                                    <ul>
                                        <li>
                                            <a href={`#${basePath}/mdx`}>在 Markdown 中使用 - @vanilla-jsx/mdx-loader</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="https://github.com/vanilla-jsx/vanilla-jsx" target="_blank">Github 仓库</a>
                                </li>
                                <li>
                                    <a href="https://github.com/vanilla-jsx/vanilla-jsx/tree/main/examples/website" target="_blank">本站点源码</a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <div class="content">
                        <div class="markdown-section">
                            <Page />
                        </div>
                    </div>
                </>
            }
        }
    }
})