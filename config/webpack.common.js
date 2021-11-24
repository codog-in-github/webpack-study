const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry:{
        dep: path.resolve(__dirname, '../src/dep.js'),
        index:{
            dependOn:'dep',
            import: path.resolve(__dirname, '../src/index.js')
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../static/index.html')
        }),
    ],
}