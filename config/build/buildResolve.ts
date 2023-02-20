import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export const buildResolve = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js", ".ts"],
  };
};
