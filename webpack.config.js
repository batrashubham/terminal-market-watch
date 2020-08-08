/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    externals: { sqlite3: 'commonjs sqlite3' },
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
        filename: 'index.js',
        path: path.resolve(__dirname, 'bin'),
    },
    target: 'node',
};
