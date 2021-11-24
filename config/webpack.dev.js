const commonConfig = require('./webpack.common')
const path = require('path')
const webpackServer = require('../plugin/service')

commonConfig.plugins.push(
    new webpackServer()
)

module.exports = {
   ...commonConfig,
   output: {
       path:path.resolve(__dirname,'../dist'),
       filename: '[name].js'
    },
    mode:'development'
}