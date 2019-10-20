const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        // 清除构建目标文件夹./dist
        new CleanWebpackPlugin({
            default: ['dist']
        }),
        // 自动输出./dist/index.html
        new HtmlWebpackPlugin({
            title: '输出管理'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}