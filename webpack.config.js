const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
        }),
    ],
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
                ),
            },
        ],
    },
};
