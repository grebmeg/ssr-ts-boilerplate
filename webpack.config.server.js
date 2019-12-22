const path = require('path'),
    nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    target: 'node',
    devtool: 'source-map',
    entry: {
        index: ['./src/server/index.tsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/server/'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    externals: [nodeExternals()]
};
