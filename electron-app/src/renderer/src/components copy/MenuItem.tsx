import React from 'react'
import { FC } from 'react'

type Props = React.PropsWithChildren<{
  focused?: boolean
}>

const MenuItem: FC<Props> = (props) => {
  return (
    <div>
      <p color={props.focused ? 'blue' : undefined}> {props.children}</p>
    </div>
  )
}

export default MenuItem
