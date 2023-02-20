import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";
import { Configuration } from "webpack";
import { buildResolve } from "./buildResolve";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildOptimization } from "./buildOptimization";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, isDev, isProd, paths } = options;

  return {
    entry: paths.entry,
    output: {
      filename: "js/[name].[hash].js",
      path: paths.build,
      clean: true,
    },
    mode,
    devtool: isDev ? "source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    optimization: {
      minimize: isProd,
      minimizer: buildOptimization(options),
    },
    resolve: buildResolve(options),
  };
};
