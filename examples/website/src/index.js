import "regenerator-runtime/runtime";
import Component from "@vanilla-jsx/component";

const Root = Component((_, ctx) => {
    window.addEventListener("hashchange", () => ctx.render());

    return async () => {
        if (location.hash === "#/zh-cn/web-components") {
            const { default: Page } = await import("./zh-cn/web-components.js");
            return <Page></Page>;
        } else if (location.hash === "#/zh-cn/canvas") {
            const { default: Page } = await import("./zh-cn/canvas");
            return <Page></Page>;
        }
        if (location.hash === "#/zh-cn/jsx") {
            const { default: Page } = await import("./zh-cn/jsx");
            return <Page></Page>;
        }
        if (location.hash === "#/zh-cn/component") {
            const { default: Page } = await import("./zh-cn/component");
            return <Page></Page>;
        } else if (location.hash === "#/zh-cn/") {
            const { default: Page } = await import("./zh-cn/jsx-runtime");
            return <Page></Page>;
        } else if (location.hash === "#/web-components") {
            const { default: Page } = await import("./web-components.js");
            return <Page></Page>;
        } else if (location.hash === "#/component") {
            const { default: Page } = await import("./component");
            return <Page></Page>;
        } else {
            const { default: Page } = await import("./jsx-runtime");
            return <Page></Page>;
        }
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
                            <a href="#/" title=" English" class="active">
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
                <Root />
            </div>
        </div>
    </>
);
