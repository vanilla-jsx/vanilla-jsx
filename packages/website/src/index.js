import Component from '@vanilla-jsx/component';

import ComponentPage from './component';
import JsxRuntimePage from './jsx-runtime';

const Root = Component((_, ctx) => {
    window.addEventListener('hashchange', () => ctx.render());

    return () => {
        if (location.hash === '#/component') {
            return <ComponentPage></ComponentPage>;
        } else {
            return <JsxRuntimePage></JsxRuntimePage>;
        }
    }
});

document.body.append(<Root />);
