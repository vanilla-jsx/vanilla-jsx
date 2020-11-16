import Component from '@vanilla-jsx/component';

import ComponentPage from './component';
import JsxRuntimePage from './jsx-runtime';

import CnComponentPage from './cn/component';
import CnJsxRuntimePage from './cn/jsx-runtime';

const Root = Component((_, ctx) => {
    window.addEventListener('hashchange', () => ctx.render());

    return () => {
        if (location.hash === '#/cn/component') {
            return <CnComponentPage></CnComponentPage>;
        } else if (location.hash === '#/cn') {
            return <CnJsxRuntimePage></CnJsxRuntimePage>;
        } else if (location.hash === '#/component') {
            return <ComponentPage></ComponentPage>;
        } else {
            return <JsxRuntimePage></JsxRuntimePage>;
        }
    }
});

document.body.append(<Root />);
