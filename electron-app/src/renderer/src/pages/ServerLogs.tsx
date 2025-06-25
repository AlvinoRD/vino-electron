import React from 'react'
import { FC } from 'react'
import { RequestLogEntry } from '../types/request-log.d.ts'
import { useNavigate } from 'react-router-dom'

type Props = {
  logs: RequestLogEntry[]
}

const ServerLogs: FC<Props> = (props) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/')
  }

  return (
    <>
      <button onClick={handleButtonClick}>go back.</button>

      <ul>
        {props.logs.map((log, i) => (
          // Pretty and colored log entry
          <ul>
            <p>
              <p color="white">{log.time} </p>
              <p color="green">{log.method} - </p>
              <ul color="blue">{log.url} </ul>
              <ul color="white">{log.ip} </ul>
            </p>
          </ul>
        ))}
      </ul>
    </>
  )
}

export default ServerLogs
