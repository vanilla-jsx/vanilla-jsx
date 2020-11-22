import "regenerator-runtime/runtime";
import Component from "@vanilla-jsx/component";

import routes from './pages/routes';

import SourceCode from './components/SourceCode';

const Root = Component((_, ctx) => {
    window.addEventListener("hashchange", () => ctx.render());

    return async () => {
        for (let index = 0; index < routes.length; index++) {
            const route = routes[index];

            if (route.path === location.hash.slice(1)) {
                const { default: Page } = await route.component();
                return <Page></Page>;
            }
        }
        location.replace('#/');
    };
});

document.body.append(
    <>
        <nav class="app-nav no-badge">
            <ul>
                <li>
                    Translations
                    <ul>
                        <li>
                            <a href="#/" title=" English">
                                <img
                                    class="emoji"
                                    src="https://github.githubassets.com/images/icons/emoji/uk.png"
                                    alt="uk"
                                />
                                English
                            </a>
                        </li>
                        <li>
                            <a href="#/zh-cn/" title=" 中文">
                                <img
                                    class="emoji"
                                    src="https://github.githubassets.com/images/icons/emoji/cn.png"
                                    alt="cn"
                                />
                                中文
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <aside class="sidebar">
            <h1 class="app-name">
                <a class="app-name-link" href="#/">
                    Vanilla-jsx
                </a>
            </h1>
            <div class="sidebar-nav">
                <ul>
                    <li>
                        <p>Getting started</p>
                        <ul>
                            <li>
                                <a href="#/">Quick start</a>
                            </li>
                            <li>
                                <a href="#/component">@vanilla-jsx/component</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
        <div class="content">
            <div class="markdown-section">
                <SourceCode code={`
                    const a = <div>asdf</div>
                `} />
                <Root />
            </div>
        </div>
    </>
);
