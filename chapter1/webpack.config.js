module.exports = {
    entry: './src/wordcount.jsx',
    output: {
      path: 'build',
      filename: 'wordcount.js'
    },
    module: {
        loaders: [{test: /\.jsx$/, loader: 'jsx-loader'}]
    }
}
