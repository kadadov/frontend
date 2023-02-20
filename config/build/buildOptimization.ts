import { WebpackPluginInstance } from "webpack";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { BuildOptions } from "./types/config";

export const buildOptimization = (
  options: BuildOptions
): WebpackPluginInstance[] => {
  return [new CssMinimizerPlugin()];
};
