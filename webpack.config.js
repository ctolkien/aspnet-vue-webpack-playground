const webpack = require('webpack');
const path = require('path');
const bundleOutputDir = './wwwroot/dist';

module.exports =  {
    entry: {
        main: './app/main.ts',
        vendor: [
            'event-source-polyfill',
            'vue',
            'vue-router'
        ]
    },
    output: {
        path: path.resolve(__dirname, bundleOutputDir),
        filename: '[name].js',
        publicPath: 'dist/'
    },
    resolve: {
        extensions: ['.vue', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: { 
                    loader: 'ts-loader',
                    options: {
                    appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
    ]
}