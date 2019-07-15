const webpack = require('webpack');
const path = require('path');

// variables
const isProduction = process.argv.indexOf('-p') >= 0;
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clientDevConfig = {
  mode: 'development',
  entry: './src/client.tsx',
  output: {
      filename: 'bundle.js',
      path: outPath,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'store': path.resolve(__dirname, 'src/store'),
      'env': path.resolve(__dirname, 'env')
    }
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  devtool: 'inline-source-map',

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.scss$/, 
        use: [ 
          { loader: 'style-loader' }, 
          { loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]__[hash:base64:5]',
              sourceMap: true
            }
          },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ] 
      }, 
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({
      'process.env.DEV': process.env.DEV,
      'process.env.API_HOST': JSON.stringify(process.env.API_HOST),
    }),
  ],

  devServer: {
    contentBase: sourcePath,
    hot: true,
    stats: {
      warnings: false
    },
  },
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
};

module.exports = clientDevConfig;
