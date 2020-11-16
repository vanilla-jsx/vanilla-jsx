const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@vanilla-jsx/component': path.resolve(__dirname, '../component/index.js')
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