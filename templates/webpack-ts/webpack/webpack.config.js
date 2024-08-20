const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, "..", "src", "background.ts"),
	  popup: path.resolve(__dirname, "..", "src", "popup.ts"),
	  board: path.resolve(__dirname, "..", "src", "breadboard", "board.ts")
   },
   output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].js",
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         }
      ],
   },
   target: 'node',
   plugins: [
      new CopyPlugin({
         patterns: [{from: ".", to: ".", context: "public"}]
      }),
	  new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
      })
   ],
};