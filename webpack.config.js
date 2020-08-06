const webpack = require('webpack');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env, argv) => ({
  devtool: argv.mode !== 'production' ? 'source-map' : 'none',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },

      {
        test: /\.vue$/i,
        use: ['vue-loader'],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },

      {
        test: /\.svg$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'svg',
          publicPath: 'svg',
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'font',
          publicPath: 'font',
        },
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],

  optimization: {
    minimizer: [
      new TerserPlugin({ extractComments: false }),
      new CssnanoPlugin({
        cssnanoOptions: {
          preset: ['default', {
            discardComments: { removeAll: true },
          }],
        },
      }),
    ],
  },

  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    disableHostCheck: true,
    open: true,
    openPage: 'http://localhost:9000',
  },
});
