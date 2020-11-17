# vanilla-jsx

vanilla jsx without Vue.js or React.js

[https://vanilla-jsx.github.io/vanilla-jsx/](https://vanilla-jsx.github.io/vanilla-jsx/)

## install and config

```bash
npm i @vanilla-jsx/jsx-runtime
```

and edit `babel.config.js` or `.babelrc` or other babel config:

```js
...
    presets: [
        ...
        [
            '@babel/preset-react', {
                runtime: 'automatic',
                importSource: '@vanilla-jsx'
            }
        ]
    ]
...
```

then, coding js with jsx.

## example

[Full Project](https://github.com/vanilla-jsx/vanilla-jsx/tree/main/packages/website)

Run yourself: clone this repo, and `npm run serve`

```js
function ComponnetWithEvent() {
    const button = <button style="margin-top: 30px">click me</button>;

    button.addEventListener('click', (e) => {
        button.replaceChildren(<ComponentWithStyle>surpport event listener, then do something, eg: replace children </ComponentWithStyle>)
    });

    return <>{button}</>;
}

function ComponentWithStyle({ children }) {
    const id = `id_${new Date().getTime()}_${parseInt(Math.random() * 1000)}`
    return <>
        <div class={id}>{children}</div>
        <style type="text/css">{`
            .${id} {
                color: blue;
            }
        `}</style>
    </>;
}

function Content() {
    return <>
        <h1>vanilla-jsx</h1>
        <p>vanilla jsx without Vue.js or React.js</p>
        <p style="color: red">with attr, eg: style</p>
        <ComponentWithStyle>Component with style, support scoped use attr</ComponentWithStyle>
        <ComponnetWithEvent></ComponnetWithEvent>
    </>;
}

document.body.append(<Content />);
```

## use with WebComponents

if you want Component with state, you can use WebComponents.

WebComponents = CustomElements + ShadowDOM + TemplatesAndSlots. 详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components).

Kebab case Tag is built to HTML Tag.

Use JSX instead of `getElementById` for get templates at CustomElements.

You can define CustomElements by `customElements.define('kebab-case-name', constructor)`.

Then `<kebab-case-name />`.

For example:

[demo](https://vanilla-jsx.github.io/vanilla-jsx/#/web-components)

```js
class Bolt extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(<div><slot /></div>);
    }
}

customElements.define('bolt-a', Bolt);

function Content() {
    return <bolt-a></bolt-a>
}
```
