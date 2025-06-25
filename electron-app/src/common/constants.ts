// @ts-expect-error Exposed in preload
const cwd: string = process ? process.cwd() : window.cwd()

export const DEFAULT_SERVER_CONFIG = {
  port: 80,
  rootDir: cwd,
  logDir: cwd + '\\logs'
}
