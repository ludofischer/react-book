module.exports = {
    entry: './src/wordcount.jsx',
    output: {
        path: __dirname,
        filename: 'build/wordcount.js'
    },
    module: {
        loaders: [
            {test: /.jsx$/, loader: 'jsx-loader'}
        ],
        preLoaders: [
            {
                test: [/\.jsx$/, /.js$/],
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
        ]
    }
};
