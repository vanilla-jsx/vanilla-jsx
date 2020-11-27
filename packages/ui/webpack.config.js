module.exports = {
    entry: './index.js',
    output: {
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}
