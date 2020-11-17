import 'regenerator-runtime/runtime';
import Component from '@vanilla-jsx/component';

const Root = Component((_, ctx) => {
    window.addEventListener('hashchange', () => ctx.render());

    return async () => {
        if (location.hash === '#/cn/web-components') {
            const { default: Page } = await import('./cn/web-components.js');
            return <Page></Page>;
        } else if (location.hash === '#/cn/canvas') {
            const { default: Page } = await import('./cn/canvas');
            return <Page></Page>;
        } if (location.hash === '#/cn/jsx') {
            const { default: Page } = await import('./cn/jsx');
            return <Page></Page>;
        } if (location.hash === '#/cn/component') {
            const { default: Page } = await import('./cn/component');
            return <Page></Page>;
        } else if (location.hash === '#/cn') {
            const { default: Page } = await import('./cn/jsx-runtime');
            return <Page></Page>;
        } else if (location.hash === '#/web-components') {
            const { default: Page } = await import('./web-components.js');
            return <Page></Page>;
        } else if (location.hash === '#/component') {
            const { default: Page } = await import('./component');
            return <Page></Page>;
        } else {
            const { default: Page } = await import('./jsx-runtime');
            return <Page></Page>;
        }
    }
});

document.body.append(<Root />);
