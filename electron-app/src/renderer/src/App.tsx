import React, { useEffect } from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import ServerConfigForm from './pages/ServerConfig.js'
import Home from './pages/Home.js'
import { ServerConfig } from '@common/types/server-config'
import usePersistentStorage from './hooks/usePersistentStorage.js'
import ServerStart from './pages/ServerStart.js'
import ServerStop from './pages/ServerStop.js'
import Exit from './pages/Exit.js'
import { RequestLogEntry } from '@common/types/request-log.js'
import ServerLogs from './pages/ServerLogs.js'
import { DEFAULT_SERVER_CONFIG } from '@common/constants'

type Props = Record<string, never>

// let server = new Server(DEFAULT_SERVER_CONFIG)
// @ts-expect-error - server is defined in preload
const server = window.server

const App: React.FC<Props> = () => {
  const { getItem, setItem } = usePersistentStorage()

  const [serverConfig, _setServerConfig] = React.useState(
    getItem('serverConfig') || DEFAULT_SERVER_CONFIG
  )
  const [serverRunning, setServerRunning] = React.useState(false)
  const [logs, setLogs] = React.useState<RequestLogEntry[]>([])

  const setServerConfig = (config: ServerConfig) => {
    _setServerConfig(config)
    setItem('serverConfig', config)
  }

  useEffect(() => {
    server.updateConfig(serverConfig)
    if (serverRunning && !server.isRunning) server.start()
    else if (!serverRunning && server.isRunning) server.stop()
  }, [serverConfig, serverRunning])

  useEffect(
    () =>
      server.setOnLog((log) => {
        setLogs((prevLogs) => [...prevLogs, log])
      }),
    []
  )

  return (
    <div>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="/"
            element={<Home serverRunning={serverRunning} serverConfig={serverConfig} />}
          />
          <Route
            path="/server/config"
            element={<ServerConfigForm data={serverConfig} onChange={setServerConfig} />}
          />
          <Route
            path="/server/start"
            element={<ServerStart setServerRunning={setServerRunning} />}
          />
          <Route path="/server/stop" element={<ServerStop setServerRunning={setServerRunning} />} />
          <Route path="/server/logs" element={<ServerLogs logs={logs} />} />
          <Route path="/exit" element={<Exit setServerRunning={setServerRunning} />} />
        </Routes>
      </MemoryRouter>
    </div>
  )
}

export default App
