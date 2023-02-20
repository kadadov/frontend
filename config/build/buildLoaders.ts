import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
  };

  const svgLoader = {
    test: /\.svg$/i,
    use: ["@svgr/webpack"],
    generator: {
      filename: "img/[hash][ext][query]",
    },
  };

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    generator: {
      filename: "img/[hash][ext][query]",
    },
  };

  const fontLoader = {
    test: /\.(woff|woff2)$/i,
    type: "asset/resource",
    generator: {
      filename: "fonts/[hash][ext][query]",
    },
  };

  return [cssLoader, svgLoader, imageLoader, fontLoader];
};
