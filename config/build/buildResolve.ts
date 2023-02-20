import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export const buildResolve = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: [".js", ".ts"],
  };
};
