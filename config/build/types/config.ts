export type BuildMode = "development" | "production"

export interface BuildEnv {
  mode: BuildMode
  port: number
  analyze: boolean
}

export interface BuildOptions {
  mode: BuildMode
  isDev: boolean
  isProd: boolean
  isAnalyze: boolean
  port: number
  paths: BuildPaths
}

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}
