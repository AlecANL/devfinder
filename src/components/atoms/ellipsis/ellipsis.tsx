import React from 'react'

import './ellipsis.css'

interface IEllipsisProps {
  children: React.ReactNode
}

export function Ellipsis(props: IEllipsisProps) {
  const { children } = props

  return <span className='ellipsis'>{children}</span>
}
