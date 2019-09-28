const path                 = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    optimization:{
        minimizer:[
            new OptimizeCssAssetsWebpackPlugin({})
        ]
            
    },
    plugins: [
       new HtmlWebpackPlugin({
           filename: "index.html",
           template: "src/index.html"
       }),
       new MiniCssExtractPlugin({
            filename: 'style.css'
       })     
    ],
    module: {
        rules: [
            {
               //test:/\.css$/,
               test: /\.(c|sa|sc)ss$/,
               use: [
                  MiniCssExtractPlugin.loader, 
                   'css-loader',
                   'sass-loader',         
               ]      
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: ['file-loader']
            },
        ]
    }
}