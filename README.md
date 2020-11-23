[https://vanilla-jsx.github.io/vanilla-jsx/](https://vanilla-jsx.github.io/vanilla-jsx/)

# vanilla-jsx

> Vanilla jsx without runtime.
>
> HTML Tag return DOM in js, No virtual DOM.

```
const content = <div>This is content.</div>;
document.body.append(content);
```

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

## docs

- Getting started
    - Lowercase is HTML Tag - [demo](https://vanilla-jsx.github.io/vanilla-jsx/#/Lowercase)
    - Kebabcase is WebComponents - [demo](https://vanilla-jsx.github.io/vanilla-jsx/#/Kebabcase)
    - PascalCase is FunctionExec - [demo](https://vanilla-jsx.github.io/vanilla-jsx/#/PascalCase)
- Advanced
    - with Markdown - @vanilla-jsx/mdx-loader - [demo](https://vanilla-jsx.github.io/vanilla-jsx/#/mdx)
    - with Reactive - @vanilla-jsx/observer - [demo](https://vanilla-jsx.github.io/vanilla-jsx/#/observer)

and more: [https://vanilla-jsx.github.io/vanilla-jsx/](https://vanilla-jsx.github.io/vanilla-jsx/)
