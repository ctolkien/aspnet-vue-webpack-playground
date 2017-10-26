const webpack = require('webpack');
const path = require('path');
const bundleOutputDir = './wwwroot/dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return {
        stats: { modules: false },
        entry: {
            vendor: [
                'event-source-polyfill',
                'vue',
                'vue-router'
            ]
        },
        output: {
            path: path.resolve(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/',
            library: '[name]_[hash]'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
            }),
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            }),
        ].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ])
    }
}
