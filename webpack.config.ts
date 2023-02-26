import path from "path"

import { type Configuration } from "webpack"

import { buildWebpackConfig } from "./config/build/buildWebpackConfig"
import { type BuildEnv } from "./config/build/types/config"

const config = (env: BuildEnv): Configuration => {
  const port = env.port ?? 9000
  const mode = env.mode ?? "production"
  const isAnalyze = env.analyze ?? false
  const isDev = mode !== "production"
  const isProd = mode === "production"

  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src")
  }

  const options = {
    mode,
    port,
    isDev,
    isProd,
    isAnalyze,
    paths
  }

  const config = buildWebpackConfig(options)

  return config
}

export default config
