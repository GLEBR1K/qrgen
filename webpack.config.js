const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'inline-source-map' : 'source-map',

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ExtractCssChunks.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new ExtractCssChunks({
      filename: 'bundle.css',
      chunkFilename: '[chunkhash].bundle.css',
    }),
  ],

  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
};
