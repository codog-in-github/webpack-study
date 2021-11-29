const commonConfig = require('./webpack.common')
const path = require('path')
const WebpackServer = require('../plugin/WebpackServer')
const HTMLWebpackPlugin = require('html-webpack-plugin')

commonConfig.plugins.push(
    new WebpackServer(),
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, '../static/index.html'),
        chunks:['plugin' ,'index']
    })
)

module.exports = {
   ...commonConfig,
   output: {
       path:path.resolve(__dirname,'../dist'),
       filename: '[name].js'
    },
    mode:'development'
}