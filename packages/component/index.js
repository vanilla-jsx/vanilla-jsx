module.exports = function (constructor) {
    return (props) => {
        const component = document.createElement('vanilla-component')
        const shadow = component.attachShadow({ mode: 'open' });

        let renderLock = false;
        const ctx = {
            render: () => {
                renderLock = false;
            }
        }

        const render = constructor(props, ctx);

        const run = async () => {
            requestAnimationFrame(run);
            if (!renderLock) {
                renderLock = true;
                const activeElement = shadow.activeElement;
                shadow.innerHTML = '';
                while(shadow.hasChildNodes()) {
                    shadow.removeChild(shadow.firstChild);
                }
                shadow.append(await render());
                if (activeElement) {
                    activeElement.focus();
                }
            }
        }
        run();
        return component;
    };
}
