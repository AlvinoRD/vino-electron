import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ServerConfig } from '@common/types/server-config'

type Props = {
  serverRunning: boolean
  serverConfig: ServerConfig
}

const Home: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      <p>Welcome to Vino Server!</p>
      <p>
        Server status:{' '}
        {props.serverRunning ? <p color="green">RUNNING</p> : <p color="red">STOPPED</p>}
      </p>
      {props.serverRunning && <p>Listening on localhost:{props.serverConfig.port}</p>}
      <p>
        <br />
      </p>
      <button onClick={() => navigate('/server/config')}>Configure server</button>
      {props.serverRunning ? (
        <button onClick={() => navigate('/server/stop')}>Stop server</button>
      ) : (
        <button onClick={() => navigate('/server/start')}>Start server</button>
      )}
      <button onClick={() => navigate('/server/logs')}>View logs</button>
      <button onClick={() => navigate('/exit')}>Exit</button>
    </div>
  )
}

export default Home
