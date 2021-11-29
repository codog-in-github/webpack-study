const commonConfig = require('./webpack.common')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

commonConfig.plugins.push(
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, '../static/index.html'),
        chunks:['index']
    })
)


module.exports = {
   ...commonConfig,
   output: {
       path:path.resolve(__dirname,'../dist'),
       filename: '[name].[contenthash].boudle.js'
   },
   mode:'production'
}