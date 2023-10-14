const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");

dotenv.config();
module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      constants: path.resolve(__dirname, "src/constants/"),
      context: path.resolve(__dirname, "src/context/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      pages: path.resolve(__dirname, "src/pages/"),
      utils: path.resolve(__dirname, "src/utils/"),
      api: path.resolve(__dirname, "src/api/"),
      ui: path.resolve(__dirname, "src/ui/"),
      styles: path.resolve(__dirname, "src/styles/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "public"),
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
