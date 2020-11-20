# vanilla-jsx/mdx-loader

## install and config

```bash
npm i @vanilla-jsx/mdx-loader
```

and edit `webpack.config.js`:

```js
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /.mdx?$/,
                use: [
                    'babel-loader',
                    '@vanilla-jsx/mdx-loader'
                ]
            }
        ]
    }
}
```

then, coding with mdx.
