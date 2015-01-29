webpack = require('webpack');

/* Obsessive-compulsive configuration, for demonstration purposes.
 Normally you would use only one of jshint or eslint. */

module.exports = {
    entry: './sample.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /.jsx$/, loader: 'jsx-loader'}
        ],
        postLoaders: [
            {test: /\.jsx$/, loader: 'eslint-loader'},
            {test: /\.jsx$/, loader: 'jshint-loader'}
        ]
    },
    jshint: {
        failOnHint: false
    },
    eslint: {
        emitErrors: false
    },
    devtool: 'source-map',
    plugins: [ new webpack.optimize.UglifyJsPlugin()]
};
