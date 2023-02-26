import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  type WebpackPluginInstance
} from "webpack"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

import { type BuildOptions } from "./types/config"

export const buildPlugins = (
  options: BuildOptions
): WebpackPluginInstance[] => {
  const { paths, isDev, isAnalyze } = options

  const plugins = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "src/[name].[hash].css"
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (isAnalyze) {
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "server" }))
  }

  return plugins
}
