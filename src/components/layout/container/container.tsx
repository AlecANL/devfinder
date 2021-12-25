import React from 'react'

import './container.css'
import classnames from 'classnames'

interface IContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container(props: IContainerProps) {
  const { children, className } = props

  return (
    <section className={classnames('content', className)}>{children}</section>
  )
}
