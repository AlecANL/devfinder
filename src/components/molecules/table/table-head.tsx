import React from 'react'
import classnames from 'classnames'

import './table.css'

interface ITableHeadProps {
  children: React.ReactNode
  className?: string
}

export function TableHead(props: ITableHeadProps) {
  const { children, className } = props

  return <div className={classnames('table-head', className)}>{children}</div>
}
