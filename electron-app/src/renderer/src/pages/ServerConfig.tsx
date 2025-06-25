import React from 'react'
import { useNavigate } from 'react-router-dom'

type FormData = {
  port: number
  rootDir: string
  logDir: string
}

type Props = {
  data: FormData
  onChange: (data: FormData) => void
}

const ServerConfigForm: React.FC<Props> = ({ data, onChange }) => {
  const navigate = useNavigate()
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const result: FormData = {
          port: parseInt((formData.get('port') as string) || '80'),
          rootDir: (formData.get('rootDir') as string) || '',
          logDir: (formData.get('logDir') as string) || ''
        }
        onChange(result)
        navigate('/')
      }}
    >
      <label htmlFor="port">Port</label>
      <input type="number" id="port" name="port" defaultValue={data.port.toString()} />

      <label htmlFor="rootDir">Root directory</label>
      <input type="text" id="rootDir" name="rootDir" defaultValue={data.rootDir} />

      <label htmlFor="logDir">Log directory</label>
      <input type="text" id="logDir" name="logDir" defaultValue={data.logDir} />

      <button type="submit">Submit</button>
    </form>
  )
}

export default ServerConfigForm
