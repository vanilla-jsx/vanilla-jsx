module.exports = function (constructor) {
    return (props) => {
        const component = document.createElement('vanilla-component')
        
        const shadow = component.attachShadow({ mode: 'open' });

        const ctx = {
            render: () => {
                while(shadow.hasChildNodes()) {
                    shadow.removeChild(shadow.firstChild);
                }
                shadow.append(render());
            }
        }

        const render = constructor(props, ctx);

        ctx.render();

        return component;
    };
}
