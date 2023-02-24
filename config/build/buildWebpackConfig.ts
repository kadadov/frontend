import { type Configuration } from "webpack"

import { buildDevServer } from "./buildDevServer"
import { buildLoaders } from "./buildLoaders"
import { buildOptimization } from "./buildOptimization"
import { buildPlugins } from "./buildPlugins"
import { buildResolve } from "./buildResolve"
import { type BuildOptions } from "./types/config"

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, isDev, isProd, paths } = options

  return {
    entry: paths.entry,
    output: {
      filename: "js/[name].[hash].js",
      path: paths.build,
      clean: true
    },
    mode,
    devtool: isDev ? "source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    optimization: {
      minimize: isProd,
      minimizer: buildOptimization(options)
    },
    resolve: buildResolve(options)
  }
}
