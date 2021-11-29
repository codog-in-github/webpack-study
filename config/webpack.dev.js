const commonConfig = require('./webpack.common')
const path = require('path')
const WebpackServer = require('../plugin/WebpackServer')

commonConfig.plugins.push(
    new WebpackServer()
)

module.exports = {
   ...commonConfig,
   output: {
       path:path.resolve(__dirname,'../dist'),
       filename: '[name].js'
    },
    mode:'development'
}