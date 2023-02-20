import path from "path";
import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export type BuildMode = "development" | "production";

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

const config = (env: BuildEnv): Configuration => {
  const port = env.port || 9000;
  const mode = env.mode || "production";
  const isDev = mode !== "production";
  const isProd = mode === "production";

  const paths = {
    entry: path.resolve(__dirname, "src", "index.js"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  return {
    entry: paths.entry,
    output: {
      filename: "js/[name].[hash].js",
      path: paths.build,
      clean: true,
    },
    mode,
    devtool: isDev ? "source-map" : undefined,
    devServer: {
      port,
      open: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash].css",
        chunkFilename: "src/[name].[hash].css",
      }),
      new HtmlWebpackPlugin({
        template: paths.html,
      }),
      new webpack.ProgressPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /\.svg$/i,
          use: ["@svgr/webpack"],
          generator: {
            filename: "img/[hash][ext][query]",
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "img/[hash][ext][query]",
          },
        },
        {
          test: /\.(woff|woff2)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[hash][ext][query]",
          },
        },
      ],
    },
    optimization: {
      minimize: isProd,
      minimizer: [new CssMinimizerPlugin()],
    },
  };
};

export default config;
