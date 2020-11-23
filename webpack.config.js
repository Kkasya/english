const  webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const plugins = require('./plugins');


module.exports = (env, options) => {
    const isProduction = options.mode === 'production';
    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'script.js',
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                 // }, {
                 //     test: /\.(png|svg|jpe?g|gif)$/,
                 //     loader: "resolve-url-loader", //resolve-url-loader needs to come *BEFORE* sass-loader
                 //     options: {
                 //         sourceMap: true
                 //     }

                 }, {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: ''
                            }
                        },{
                            loader: "css-loader"
                        },{
                            loader: "sass-loader"
                        }
                    ]
                }, {
                     test: /\.(png|svg|jpe?g|gif)$/,

                     use: [

                             'file-loader'
                     ]
                }
            ]
        },

        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin( {
                filename: 'style.css'
            }),
            new HtmlWebpackPlugin( {
                template: 'index.html'
            }),
            plugins.ESLintPlugin,
    ]
    }
    return config;
}

