const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /.mdx?$/,
                use: [
                    'babel-loader',
                    '@vanilla-jsx/mdx-loader'
                ]
            }
        ]
    },
    devServer: {
        publicPath: '/dist',
        contentBase: [
            path.join(__dirname),
            path.join(__dirname, 'node_modules/@vanilla-jsx')
        ],
    }
}