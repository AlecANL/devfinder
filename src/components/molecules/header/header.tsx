import React from 'react'
import classnames from 'classnames'

import './header.css'

interface IHeaderProps {
  children: React.ReactNode
}

export function Header(props: IHeaderProps) {
  const { children } = props

  return <header className={classnames('header')}>{children}</header>
}
