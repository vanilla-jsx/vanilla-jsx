module.exports = {
    presets: [
        [ '@babel/preset-react', {
            runtime: 'automatic',
            importSource: '@vanilla-jsx'
        } ],
        [ '@babel/preset-env' ]
    ]
}