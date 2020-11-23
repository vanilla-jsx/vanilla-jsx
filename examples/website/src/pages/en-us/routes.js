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
        path: '/observer',
        component: () => import('./observer.mdx')
    },
    {
        path: '/jquery',
        component: () => import('./jquery.mdx')
    },
    {
        path: '/component',
        component: () => import('./component')
    },
]

export default routes.map((ele) => {
    const basePath = '';
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
                                    <p>Getting started</p>
                                    <ul>
                                        <li>
                                            <a href={`#${basePath}/`}>Quick start</a>
                                        </li>
                                        <li>
                                            <a href={`#${basePath}/Lowercase`}>Lowercase is HTML Tag</a>
                                        </li>
                                        <li>
                                            <a href={`#${basePath}/Kebabcase`}>Kebabcase is WebComponents</a>
                                        </li>
                                        <li>
                                            <a href={`#${basePath}/PascalCase`}>PascalCase is FunctionExec</a>
                                        </li>
                                        {/* <li>
                                            <a href={`#${basePath}/component`}>@vanilla-jsx/component</a>
                                        </li> */}
                                    </ul>
                                </li>
                                <li>
                                    <p>Advanced</p>
                                    <ul>
                                        <li>
                                            <a href={`#${basePath}/mdx`}>with Markdown - @vanilla-jsx/mdx-loader</a>
                                        </li>
                                        <li>
                                            <a href={`#${basePath}/observer`}>with Reactive - @vanilla-jsx/observer</a>
                                        </li>
                                        <li>
                                            <a href={`#${basePath}/jquery`}>with jQuery, but not selector</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="https://github.com/vanilla-jsx/vanilla-jsx" target="_blank">Github Repo</a>
                                </li>
                                <li>
                                    <a href="https://github.com/vanilla-jsx/vanilla-jsx/tree/main/examples/website" target="_blank">Website Source</a>
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