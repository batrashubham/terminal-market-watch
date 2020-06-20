/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.ts?$|\.js?$/,
                use: 'ts-loader',
                exclude: /node_modules|bin/,
            },
        ],
    },
    plugins: [new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'bin'),
    },
    target: 'node',
};
