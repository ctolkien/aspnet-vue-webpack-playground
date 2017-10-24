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
        extensions: ['.js', '.ts', '.vue'],
        alias: { //this is needed to get template-compiler?
            'vue': 'vue/dist/vue.common.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                use: {
                    loader: 'ts-loader',
                    options: {
                    appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        esModule: true
                    }
                } 
            }
        ]
    }
}