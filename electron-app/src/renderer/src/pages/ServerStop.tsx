import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  setServerRunning: (running: boolean) => void
}

const ServerStop: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      props.setServerRunning(false)
      navigate('/')
    }, 400)
  })
  return <p>Stopping server...</p>
}

export default ServerStop
