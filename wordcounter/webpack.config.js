module.exports = {
    entry: './src/wordcount.jsx',

    output: {
      path: 'build',
      filename: 'wordcount.js'
    },

    resolve: {
      extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{test: /\.jsx$/, loader: 'jsx-loader'}]
    }
};
