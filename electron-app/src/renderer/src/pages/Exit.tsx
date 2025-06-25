import React, { useEffect } from 'react'

type Props = {
  setServerRunning: (running: boolean) => void
}

const Exit: React.FC<Props> = (props) => {
  useEffect(() => {
    props.setServerRunning(false)
    process.exitCode = 1
  })
  return <p>Exiting... (press CTRL+C if it's taking too long)</p>
}

export default Exit
