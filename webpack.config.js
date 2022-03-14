const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    // filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    host: "localhost",
    port: port,
    //  open: true,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     minSize: 80000,
  //     maxSize: 200000,
  //     cacheGroups: {
  //       styles: {
  //         name: "styles",
  //         test: /\.css$/,
  //         chunks: "all",
  //         enforce: true,
  //       },
  //       defaultVendors: {
  //         enforce: true,
  //         filename: "v.[name].[contenthash].bundle.js",
  //       },
  //     },
  //   },
  //   minimize: true,
  //   minimizer: [
  //     //  default is actually smaller in resultin bundle sizes
  //     //  than swc and doesnt wipe all the license comments
  //     //  this lil rust compiler is only a bit faster :(
  //     new TerserPlugin({
  //       // minify: TerserPlugin.swcMinify,
  //       // terserOptions: {},
  //     }),
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.worker\.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "worker-loader",
            options: {
              filename: "[name].[contenthash].worker.js",
              chunkFilename: "[id].[contenthash].worker.js",
            },
          },
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: path.join(__dirname, "public", "favicon.ico"),
    }),
    //  new CompressionWebpackPlugin(),
  ],
};
