const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        dep: path.resolve(__dirname, 'src/dep.js'),
        index:{
            dependOn:'dep',
            import: path.resolve(__dirname, 'src/index.js')
        }
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: process.env.NODE_ENV === 'development'
            ? '[name].js'
            : '[name].[contenthash].boudle.js'
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'static/index.html')
        })
    ],
    mode:'development'
}