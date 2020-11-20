const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@vanilla-jsx/jsx-runtime': path.resolve(__dirname, '../index.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        publicPath: '/dist'
    }
}