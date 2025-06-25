import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  setServerRunning: (running: boolean) => void
}

const ServerStart: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      props.setServerRunning(true)
      navigate('/')
    }, 1200)
  })
  return <p>Starting server...</p>
}

export default ServerStart
