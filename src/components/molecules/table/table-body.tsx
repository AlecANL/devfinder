import React from 'react'
import classnames from 'classnames'

import './table.css'

interface ITableBodyProps {
  children: React.ReactNode
  className?: string
}

export function TableBody(props: ITableBodyProps) {
  const { children, className } = props

  return <div className={classnames('table-body', className)}>{children}</div>
}
