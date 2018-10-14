const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin( {
            filename: 'style.css'
        }),
         new HtmlWebPackPlugin({
            template: './examples/index.html',
            filename: './index.html'
        }),
    ],
    entry: {
        app: './examples/src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
                )
            }
        ]
    },
};
