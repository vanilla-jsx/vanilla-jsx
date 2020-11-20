const {getOptions} = require('loader-utils')
const mdx = require('@mdx-js/mdx')

const loader = async function (content) {
  const callback = this.async()
  const options = Object.assign({}, getOptions(this), {
    filepath: this.resourcePath
  })

  let result

  try {
    result = await mdx(content, options)
  } catch (err) {
    return callback(err)
  }

  return callback(null, result.replace('/* @jsxRuntime classic */', '').replace('/* @jsx mdx */', ''))
}

module.exports = loader
