import React from 'react'
import { FC } from 'react'

type Props = React.PropsWithChildren<{}>

const Menu: FC<Props> = (props) => {
  return <div>{props.children}</div>
}

export default Menu
