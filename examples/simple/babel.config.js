module.exports = {
    presets: [
        '@babel/preset-env',
        [ '@babel/preset-react', {
            runtime: 'automatic',
            importSource: '@vanilla-jsx'
        } ]
    ]
}