import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import { type WebpackPluginInstance } from "webpack"

import { type BuildOptions } from "./types/config"

export const buildOptimization = (
  options: BuildOptions
): WebpackPluginInstance[] => {
  return [new CssMinimizerPlugin()]
}
