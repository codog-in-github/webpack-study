const commonConfig = require('./webpack.common')
const path = require('path')

module.exports = {
   ...commonConfig,
   output: {
       path:path.resolve(__dirname,'../dist'),
       filename: '[name].[contenthash].boudle.js'
   },
   mode:'production'
}