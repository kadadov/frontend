import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  type WebpackPluginInstance
} from "webpack"

import { type BuildOptions } from "./types/config"

export const buildPlugins = (
  options: BuildOptions
): WebpackPluginInstance[] => {
  const { paths, isDev } = options

  return [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "src/[name].[hash].css"
    }),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    isDev && new HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin()
  ].filter(Boolean) as WebpackPluginInstance[]
}
