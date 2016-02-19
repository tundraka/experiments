module.exports ={
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
             {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
        ]
    }
}
