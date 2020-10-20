const path = require("path");
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude : /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
             modules: true
            }
           },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
};