import fs from 'fs'
import express from 'express'
import http from 'http'
import serveIndex from 'serve-index'
import { RequestLogEntry } from './request-log.js'
import { ServerConfig } from './server-config.js'

export default class Server {
  isRunning: boolean = false
  private app: express.Express
  private handler?: http.Server

  constructor(
    private config: ServerConfig,
    private onLog?: (log: RequestLogEntry) => void
  ) {
    this.app = this.createApp(this.config)
    console.log('Server initialized')
  }

  private createApp(config: ServerConfig) {
    const app = express()
    app.set('trust proxy', true)

    app.use((req, _, next) => {
      const log = `${new Date().toISOString()} - ${req.method} ${req.url} ${req.ip}\n`
      console.log(req.ip)

      if (this.onLog) {
        this.onLog({
          time: new Date().toISOString(),
          ip: req.ip || req.ips?.[0],
          method: req.method,
          url: req.url
        })
      }

      // Recursively create the log directory if it doesn't exist
      if (!fs.existsSync(config.logDir)) {
        fs.mkdirSync(config.logDir, { recursive: true })
      }

      // YYYY-MM-DD-requests.log
      const logFile = `${config.logDir}/${new Date().toISOString().split('T')[0]}.requests.log`
      fs.appendFile(logFile, log, (err) => {
        if (err) {
          console.error('Failed to log request')
        }
      })

      next()
    })

    app.use(express.static(config.rootDir), serveIndex(config.rootDir))

    return app
  }

  updateConfig(config: ServerConfig) {
    const wasRunning = this.isRunning
    this.stop()

    this.config = config
    this.app = this.createApp(this.config)

    if (wasRunning) this.start()
  }

  start() {
    if (this.isRunning) return
    this.handler = this.app.listen(this.config.port)
    this.isRunning = true
  }

  stop() {
    if (!this.isRunning) return
    return new Promise<void>((resolve, reject) => {
      this.handler?.closeAllConnections();
      this.handler?.close((err) => {
        if (err) reject(err)
        else resolve()
      })
      this.isRunning = false
    })
  }

  setOnLog(onLog: (log: RequestLogEntry) => void) {
    this.onLog = onLog
  }
}
