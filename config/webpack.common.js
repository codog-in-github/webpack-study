const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry:{
        index:{
            import: path.resolve(__dirname, '../src/index.js')
        }
    },
    module:{
        rules:[
            { test:/\.js$/, use: ['source-map-loader'] },
            { test:/\.(le|c)ss$/, use: ['style-loader','css-loader','less-loader'] }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../static/index.html')
        })
    ],
}