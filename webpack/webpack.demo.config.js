const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './demo/index.jsx',
  output: {
    filename: 'bundle.js',
    path: process.cwd() + '/demo_dist',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: process.cwd() + '/demo/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],

  devServer: {
    static: {
      directory: process.cwd() + '/demo_dist',
    },
    open: true,
    compress: true,
    port: 8080,
  },
};
