const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const clientDevConfig = {
  mode: 'development',
  entry: './src/client.tsx',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
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
      // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.css$/, 
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: {  
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]__[hash:base64:5]'
            } 
          }

        ]  
      },
      { test: /\.scss$/, 
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: {  
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]__[hash:base64:5]'
            } 
          },
          { loader: 'sass-loader', options: { sourceMap: true }}
        ]  
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};

module.exports = clientDevConfig;
