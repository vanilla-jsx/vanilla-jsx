module.exports = {
    presets: [
        [ '@babel/preset-react', {
            runtime: 'automatic',
            importSource: '@vanilla-jsx'
        } ],
        ...(process.env.NODE_ENV !== 'development' ? [[ '@babel/preset-env' ]] : [])
    ]
}