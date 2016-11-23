var webpack = require('webpack');

module.exports = {
    module: {
        entry: ['babel-polyfill', 'index.js'],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: [
                        "react",
                        "es2015"
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /flexboxgrid/,
            }
        ],
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin()
        ]
    }

}