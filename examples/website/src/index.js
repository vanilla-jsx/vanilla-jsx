import "regenerator-runtime/runtime";

import routes from './pages/routes';

const Container = ({children}) => {
    return <>
        <nav class="app-nav no-badge">
            <ul>
                <li>
                    Translations
                    <ul>
                        <li>
                            <a href={location.hash.replace('#/zh-cn/', '#/')} title=" English">
                                <img
                                    class="emoji"
                                    src="https://github.githubassets.com/images/icons/emoji/uk.png"
                                    alt="uk"
                                />
                                English
                            </a>
                        </li>
                        <li>
                            <a href={location.hash.replace('#/', '#/zh-cn/')} title=" 中文">
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
        {children}
    </>
}

const Root = () => {
    const refs = {};

    const renderPage = async () => {
        for (let index = 0; index < routes.length; index++) {
            const route = routes[index];

            if (route.path === location.hash.slice(1)) {
                const { root } = refs;

                while(root.hasChildNodes()) {
                    root.removeChild(root.firstChild);
                }

                const { default: Page } = await route.component();

                root.append(<Container><Page /></Container>);

                return false;
            }
        }
        location.replace('#/');
    }

    window.addEventListener("hashchange", () => renderPage());

    return <div ref={(e) => {
        refs.root = e;
        renderPage()
    }}></div>;
}

document.body.append(<Root />);
