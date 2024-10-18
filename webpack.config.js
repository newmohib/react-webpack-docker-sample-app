const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Import HtmlWebpackPlugin

module.exports = {
  entry: "./src/index.jsx", // Update to the correct file name
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Allow both .js and .jsx files to be handled by Babel
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Automatically resolve .js and .jsx extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Specify the template file
      filename: "index.html", // Output file name
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 3000,
  },
};
