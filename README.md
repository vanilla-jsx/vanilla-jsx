# vanilla-jsx

> Vanilla jsx without runtime.
>
> HTML Tag return DOM in js, No virtual DOM.

```js
const content = <div>This is content.</div>;
document.body.append(content);
```

[Run](https://vanilla-jsx.github.io/vanilla-jsx/)

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

[simple source](https://github.com/vanilla-jsx/vanilla-jsx/tree/main/examples/simple)

## Documentation

- Getting started
    - [Lowercase is HTML Tag](https://vanilla-jsx.github.io/vanilla-jsx/#/Lowercase)
    - [Kebabcase is WebComponents](https://vanilla-jsx.github.io/vanilla-jsx/#/Kebabcase)
    - [PascalCase is FunctionExec](https://vanilla-jsx.github.io/vanilla-jsx/#/PascalCase)
    - [with Reactive - @vanilla-jsx/observer](https://vanilla-jsx.github.io/vanilla-jsx/#/observer)
- Advanced
    - [create Offscreen Canvas](https://vanilla-jsx.github.io/vanilla-jsx/#/canvas)
    - [with jQuery, but not selector](https://vanilla-jsx.github.io/vanilla-jsx/#/jquery)
    - [with Markdown - @vanilla-jsx/mdx-loader](https://vanilla-jsx.github.io/vanilla-jsx/#/mdx)

and more: [https://vanilla-jsx.github.io/vanilla-jsx/](https://vanilla-jsx.github.io/vanilla-jsx/)
