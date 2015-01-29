var webpack = require('webpack');

module.exports = {
    entry: [ './index.jsx'],
    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders:[
            {test: /\.jsx$/, loader: 'jsx-loader'}]
    }/*,

    plugins: [new webpack.optimize.UglifyJsPlugin()]*/
};
